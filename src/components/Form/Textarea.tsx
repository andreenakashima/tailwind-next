import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

export interface TextareaProps extends ComponentProps<"textarea"> {}

export const Textarea = (props: TextareaProps) => {
	return (
		<textarea
			className={twMerge(
				"min-h-[120px] resize-y w-full rounded-lg px-3 py-2 shadow-sm outline-none",
				"border border-zinc-300 focus:border-violet-300 focus:ring-4 focus:ring-violet-100",
				"dark:border-zinc-700 dark:bg-zinc-800 dark:focus:ring-violet-500/10 dark:focus:border-violet-500 dark:placeholder-zinc-400 dark:text-zinc-100"
			)}
			{...props}
		/>
	);
};
