import SettingTabs from "@/components/SettingsTabs";
import * as Input from "@/components/Input";
import { Mail, UploadCloud, User } from "lucide-react";

export default function Home() {
	return (
		<>
			<h1 className="text-3xl font-medium text-zinc-900">Settings</h1>

			<SettingTabs />

			<div className="mt-6 flex flex-col">
				<div className="flex items-center justify-between pb-5 border-b border-zinc-200">
					<div className="space-y-1">
						<h2 className="text-lg font-medium text-zinc-900">Personal info</h2>
						<span className="text-sm text-zinc-500">
							Update your photo and personal details here.
						</span>
					</div>

					<div className="flex items-center gap-2">
						<button
							type="button"
							className="rounded-lg px-4 py-2 text-sm font-semibold shadow-sm border border-zinc-300 text-zinc-700 hover:bg-zinc-50"
						>
							Cancel
						</button>
						<button
							type="submit"
							form="settings"
							className="rounded-lg px-4 py-2 text-sm font-semibold shadow-sm bg-violet-600 text-white hover:bg-violet-700"
						>
							Save
						</button>
					</div>
				</div>

				<form
					id="settings"
					className="mt-6 flex flex-col w-full gap-5 divide-y divide-zinc-200"
				>
					<div className="grid grid-cols-form gap-3">
						<label
							htmlFor="firstName"
							className="text-sm font-medium text-zinc-700"
						>
							Name
						</label>
						<div className="grid grid-cols-2 gap-6">
							<Input.Root>
								<Input.Control id="firstName" defaultValue="Antonio" />
							</Input.Root>

							<Input.Root>
								<Input.Control defaultValue="da Silva" />
							</Input.Root>
						</div>
					</div>

					<div className="grid grid-cols-form gap-3 pt-5">
						<label
							htmlFor="email"
							className="text-sm font-medium text-zinc-700"
						>
							Email
						</label>

						<Input.Root>
							<Input.Prefix>
								<Mail className="h-5 w-5 text-zinc-500" />
							</Input.Prefix>
							<Input.Control
								id="email"
								type="email"
								defaultValue="exemplo@email.com"
							/>
						</Input.Root>
					</div>

					<div className="grid grid-cols-form gap-3 pt-5">
						<label
							htmlFor="photo"
							className="text-sm font-medium text-zinc-700"
						>
							Your photo
							<span className="text-sm font-normal text-zinc-500 block mt-0.5">
								This will be displayed on your profile.
							</span>
						</label>

						<div className="flex items-start gap-5">
							<div className="bg-violet-50 flex h-16 w-16 items-center justify-center rounded-full">
								<User className="w-8 h-8 text-violet-500" />
							</div>

							<label
								htmlFor="photo"
								className="group flex-1 cursor-pointer flex flex-col items-center gap-3 rounded-lg border border-zinc-300 px-6 py-4 text-center text-zinc-500 shadow-sm hover:border-violet-200 hover:bg-violet-25 hover:text-violet-500"
							>
								<div className="rounded-full border-6 border-zinc-50 bg-zinc-100 p-2 group-hover:border-violet-50 group-hover:bg-violet-100">
									<UploadCloud className="w-5 h-5 text-zinc-500 group-hover:text-violet-600" />
								</div>

								<div className="flex flex-col items-center gap-1">
									<span className="text-sm">
										<span className="font-semibold text-violet-500">
											Click to upload
										</span>{" "}
										or drag and drop
									</span>
									<span className="text-sm">
										SVG, PNG or GIF (max. 800x400px)
									</span>
								</div>
							</label>

							<input type="file" className="sr-only" id="photo" />
						</div>
					</div>

					<div className="grid grid-cols-form gap-3 pt-5">
						<label htmlFor="role" className="text-sm font-medium text-zinc-700">
							Role
						</label>

						<Input.Root>
							<Input.Control id="role" defaultValue="CTO" />
						</Input.Root>
					</div>

					<div className="grid grid-cols-form gap-3 pt-5">
						<label
							htmlFor="country"
							className="text-sm font-medium text-zinc-700"
						>
							Country
						</label>

						<div></div>
					</div>

					<div className="grid grid-cols-form gap-3 pt-5">
						<label
							htmlFor="timezone"
							className="text-sm font-medium text-zinc-700"
						>
							Timezone
						</label>

						<div></div>
					</div>

					<div className="grid grid-cols-form gap-3 pt-5">
						<label htmlFor="bio" className="text-sm font-medium text-zinc-700">
							Bio
							<span className="text-sm font-normal text-zinc-500 block mt-0.5">
								Write a short introduction.
							</span>
						</label>

						<div></div>
					</div>

					<div className="grid grid-cols-form gap-3 pt-5">
						<label
							htmlFor="projects"
							className="text-sm font-medium text-zinc-700"
						>
							Portfolio projects
							<span className="text-sm font-normal text-zinc-500 block mt-0.5">
								Share a snippets of your work.
							</span>
						</label>

						<div></div>
					</div>

					<div className="flex items-center justify-end gap-2 pt-5">
						<div className="flex items-center gap-2">
							<button
								type="button"
								className="rounded-lg px-4 py-2 text-sm font-semibold shadow-sm border border-zinc-300 text-zinc-700 hover:bg-zinc-50"
							>
								Cancel
							</button>
							<button
								type="submit"
								form="settings"
								className="rounded-lg px-4 py-2 text-sm font-semibold shadow-sm bg-violet-600 text-white hover:bg-violet-700"
							>
								Save
							</button>
						</div>
					</div>
				</form>
			</div>
		</>
	);
}
