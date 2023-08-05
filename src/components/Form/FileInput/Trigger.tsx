import { UploadCloud } from "lucide-react";

export const Trigger = () => {
	return (
		<label
			htmlFor="photo"
			className="group flex-1 cursor-pointer flex flex-col items-center gap-3 rounded-lg border border-zinc-300 px-6 py-4 text-center text-zinc-500 shadow-sm hover:border-violet-200 hover:bg-violet-25 hover:text-violet-500"
		>
			<div className="rounded-full border-6 border-zinc-50 bg-zinc-100 p-2 group-hover:border-violet-50 group-hover:bg-violet-100">
				<UploadCloud className="w-5 h-5 text-zinc-500 group-hover:text-violet-600" />
			</div>

			<div className="flex flex-col items-center gap-1">
				<span className="text-sm">
					<span className="font-semibold text-violet-500">Click to upload</span>{" "}
					or drag and drop
				</span>
				<span className="text-sm">SVG, PNG or GIF (max. 800x400px)</span>
			</div>
		</label>
	);
};