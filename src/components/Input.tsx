import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

type PrefixProps = ComponentProps<"div">;
export const Prefix = (props: PrefixProps) => {
	return <div {...props}></div>;
};

type ControlProps = ComponentProps<"input">;
export const Control = (props: ControlProps) => {
	return (
		<input
			className="flex-1 border-0 bg-transparent p-0 text-zinc-900 placeholder-zinc-600 outline-none dark:placeholder-zinc-400 dark:text-zinc-100"
			{...props}
		/>
	);
};

type RootProps = ComponentProps<"div">;

export const Root = (props: RootProps) => {
	return (
		<div
			className={twMerge(
				"flex w-full items-center gap-2 rounded-lg border border-zinc-300 py-2 px-3 shadow-sm",
				"focus-within:border-violet-300 focus-within:ring-4 focus-within:ring-violet-100",
				"dark:border-zinc-700 dark:bg-zinc-800 dark:focus-within:ring-violet-500/10 dark:focus-within:border-violet-500",
				props.className
			)}
			{...props}
		/>
	);
};
