"use client";

import * as SelectPrimitive from "@radix-ui/react-select";
import { ChevronDown } from "lucide-react";
import { ReactNode } from "react";

export interface SelectProps extends SelectPrimitive.SelectProps {
	children: ReactNode;
	placeholder: string;
}

export const Select = ({ children, placeholder, ...props }: SelectProps) => {
	return (
		<SelectPrimitive.Root {...props}>
			<SelectPrimitive.Trigger className="flex h-11 w-full items-center justify-between rounded-lg border border-x-zinc-300 px-3 py-2 shadow-sm data-[placeholder]:text-zinc-600">
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
					className="z-10 w-[--radix-select-trigger-width] rounded-lg border border-zinc-200 bg-white overflow-hidden shadow-sm"
				>
					<SelectPrimitive.Viewport className="outline-none">
						{children}
					</SelectPrimitive.Viewport>
				</SelectPrimitive.Content>
			</SelectPrimitive.Portal>
		</SelectPrimitive.Root>
	);
};
