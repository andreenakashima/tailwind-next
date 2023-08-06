"use client";

import { ChangeEvent, ComponentProps } from "react";
import { useFileInput } from "./Root";

export type ControlProps = ComponentProps<"input">;

export const Control = (props: ControlProps) => {
	const { id, onFileSelected } = useFileInput();

	const handleFilesSelected = (event: ChangeEvent<HTMLInputElement>) => {
		if (!event.target.files?.length) return;

		const files = Array.from(event.target.files);

		onFileSelected(files);
	};

	return (
		<input
			type="file"
			className="sr-only"
			id={id}
			onChange={handleFilesSelected}
			{...props}
		/>
	);
};
