"use client";

import { UploadCloud } from "lucide-react";
import { useFileInput } from "./Root";
import { twMerge } from "tailwind-merge";

export const Trigger = () => {
	const { id } = useFileInput();

	return (
		<label
			htmlFor={id}
			className={twMerge(
				"group flex-1 cursor-pointer flex flex-col items-center gap-3 rounded-lg border px-6 py-4 text-center shadow-sm",
				"border-zinc-300 text-zinc-500 hover:border-violet-200 hover:bg-violet-25 hover:text-violet-500",
				"dark:border-zinc-800 dark:hover:border-zinc-700 dark:hover:bg-zinc-800 dark:hover:text-violet-300"
			)}
		>
			<div
				className={twMerge(
					"rounded-full border-6 border-zinc-50 bg-zinc-100 p-2 group-hover:border-violet-50 group-hover:bg-violet-100",
					"dark:border-zinc-700 dark:bg-zinc-800 dark:group-hover:border-zinc-600 dark:group-hover:bg-zinc-700"
				)}
			>
				<UploadCloud className="w-5 h-5 text-zinc-600 group-hover:text-violet-600 dark:text-zinc-500 dark:group-hover:text-violet-300" />
			</div>

			<div className="flex flex-col items-center gap-1">
				<span className="text-sm">
					<span className="font-semibold text-violet-500 dark:text-violet-300">
						Click to upload
					</span>{" "}
					or drag and drop
				</span>
				<span className="text-sm">SVG, PNG or GIF (max. 800x400px)</span>
			</div>
		</label>
	);
};
