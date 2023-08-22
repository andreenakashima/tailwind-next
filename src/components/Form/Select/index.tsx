"use client";

import * as SelectPrimitive from "@radix-ui/react-select";
import { ChevronDown } from "lucide-react";
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export interface SelectProps extends SelectPrimitive.SelectProps {
	children: ReactNode;
	placeholder: string;
}

export const Select = ({ children, placeholder, ...props }: SelectProps) => {
	return (
		<SelectPrimitive.Root {...props}>
			<SelectPrimitive.Trigger
				className={twMerge(
					"flex h-11 w-full items-center justify-between rounded-lg border border-x-zinc-300 px-3 py-2 shadow-sm data-[placeholder]:text-zinc-600 outline-none",
					"focus:border-violet-300 focus:ring-4 focus:ring-violet-100",
					"dark:border-zinc-700 dark:bg-zinc-800 dark:focus-within:ring-violet-500/10 dark:focus-within:border-violet-500 dark:data-[placeholder]:text-zinc-400"
				)}
			>
				<SelectPrimitive.Value
					placeholder={placeholder}
					className="text-black"
				/>
				<SelectPrimitive.Icon>
					<ChevronDown className="w-5 h-5 text-zinc-500" />
				</SelectPrimitive.Icon>
			</SelectPrimitive.Trigger>

			<SelectPrimitive.Portal>
				<SelectPrimitive.Content
					side="bottom"
					position="popper"
					sideOffset={8}
					className={twMerge(
						"z-10 w-[--radix-select-trigger-width] animate-slideDownAndFade overflow-hidden rounded-lg shadow-sm ",
						"border border-zinc-200 bg-white",
						"dark:border-zinc-700 dark:bg-zinc-800"
					)}
				>
					<SelectPrimitive.Viewport className="outline-none">
						{children}
					</SelectPrimitive.Viewport>
				</SelectPrimitive.Content>
			</SelectPrimitive.Portal>
		</SelectPrimitive.Root>
	);
};
