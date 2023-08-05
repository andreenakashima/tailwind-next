import { ComponentProps } from "react";

type PrefixProps = ComponentProps<"div">;
export const Prefix = (props: PrefixProps) => {
	return <div {...props}></div>;
};

type ControlProps = ComponentProps<"input">;
export const Control = (props: ControlProps) => {
	return (
		<input
			className="flex-1 border-0 bg-transparent p-0 text-zinc-900 placeholder-zinc-600"
			{...props}
		/>
	);
};

type RootProps = ComponentProps<"div">;

export const Root = (props: RootProps) => {
	return (
		<div
			className="flex w-full items-center gap-2 mx-1 rounded-lg border border-zinc-300 py-2 px-3 shadow-sm"
			{...props}
		/>
	);
};