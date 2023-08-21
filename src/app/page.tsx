import SettingTabs from "@/components/SettingsTabs";
import * as Input from "@/components/Input";
import * as FileInput from "@/components/Form/FileInput";
import { Bold, Italic, Link, List, ListOrdered, Mail } from "lucide-react";
import { Select } from "@/components/Form/Select";
import { SelectItem } from "@/components/Form/Select/SelectItem";
import { Textarea } from "@/components/Form/Textarea";
import { Button } from "@/components/Button";

export default function Home() {
	return (
		<>
			<h1 className="text-3xl font-medium text-zinc-900">Settings</h1>

			<SettingTabs />

			<div className="mt-6 flex flex-col">
				<div className="flex flex-col gap-4 lg:flex-row lg:items-center justify-between pb-5 border-b border-zinc-200">
					<div className="space-y-1">
						<h2 className="text-lg font-medium text-zinc-900">Personal info</h2>
						<span className="text-sm text-zinc-500">
							Update your photo and personal details here.
						</span>
					</div>

					<div className="flex items-center gap-2">
						<Button variant="outline" type="button">
							Cancel
						</Button>
						<Button type="submit" form="settings">
							Save
						</Button>
					</div>
				</div>

				<form
					id="settings"
					className="mt-6 flex flex-col w-full gap-5 divide-y divide-zinc-200"
				>
					<div className="flex flex-col lg:grid lg:grid-cols-form gap-3">
						<label
							htmlFor="firstName"
							className="text-sm font-medium text-zinc-700"
						>
							Name
						</label>
						<div className="flex flex-col lg:grid lg:grid-cols-2 gap-6">
							<Input.Root>
								<Input.Control id="firstName" defaultValue="Antonio" />
							</Input.Root>

							<div className="flex flex-col gap-3 lg:block">
								<label
									htmlFor="lastName"
									className="text-sm font-medium text-zinc-700 lg:sr-only"
								>
									Last Name
								</label>
								<Input.Root>
									<Input.Control id="lastName" defaultValue="da Silva" />
								</Input.Root>
							</div>
						</div>
					</div>

					<div className="flex flex-col lg:grid lg:grid-cols-form gap-3 pt-5">
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

					<div className="flex flex-col lg:grid lg:grid-cols-form gap-3 pt-5">
						<label
							htmlFor="photo"
							className="text-sm font-medium text-zinc-700"
						>
							Your photo
							<span className="text-sm font-normal text-zinc-500 block mt-0.5">
								This will be displayed on your profile.
							</span>
						</label>

						<FileInput.Root className="flex flex-col lg:flex-row lg:items-start gap-5">
							<FileInput.ImagePreview />
							<FileInput.Trigger />
							<FileInput.Control />
						</FileInput.Root>
					</div>

					<div className="flex flex-col lg:grid lg:grid-cols-form gap-3 pt-5">
						<label htmlFor="role" className="text-sm font-medium text-zinc-700">
							Role
						</label>

						<Input.Root>
							<Input.Control id="role" defaultValue="CTO" />
						</Input.Root>
					</div>

					<div className="flex flex-col lg:grid lg:grid-cols-form gap-3 pt-5">
						<label
							htmlFor="country"
							className="text-sm font-medium text-zinc-700"
						>
							Country
						</label>

						<Select placeholder="Select a country...">
							<SelectItem value="br" text="Brazil" />
							<SelectItem value="us" text="United States" />
						</Select>
					</div>

					<div className="flex flex-col lg:grid lg:grid-cols-form gap-3 pt-5">
						<label
							htmlFor="timezone"
							className="text-sm font-medium text-zinc-700"
						>
							Timezone
						</label>

						<Select placeholder="Select a timezone...">
							<SelectItem
								value="utc-08"
								text="Pacific Standard Time (UTC-08:00)"
							/>
							<SelectItem value="utc-03" text="America-SaoPaulo (UTC-03:00)" />
						</Select>
					</div>

					<div className="flex flex-col lg:grid lg:grid-cols-form gap-3 pt-5">
						<label htmlFor="bio" className="text-sm font-medium text-zinc-700">
							Bio
							<span className="text-sm font-normal text-zinc-500 block mt-0.5">
								Write a short introduction.
							</span>
						</label>

						<div className="space-y-2">
							<div className="flex flex-col lg:grid gap-3 lg:grid-cols-2">
								<Select placeholder="" defaultValue="normal">
									<SelectItem
										value="normal"
										text="Normal text"
										defaultChecked
									/>
									<SelectItem value="md" text="Markdown" />
								</Select>

								<div className="flex items-center gap-1">
									<Button type="button" variant="ghost">
										<Bold className="w-4 h-4 text-zinc-500" strokeWidth={3} />
									</Button>
									<Button type="button" variant="ghost">
										<Italic className="w-4 h-4 text-zinc-500" strokeWidth={3} />
									</Button>
									<Button type="button" variant="ghost">
										<Link className="w-4 h-4 text-zinc-500" strokeWidth={3} />
									</Button>
									<Button type="button" variant="ghost">
										<List className="w-4 h-4 text-zinc-500" strokeWidth={3} />
									</Button>
									<Button type="button" variant="ghost">
										<ListOrdered
											className="w-4 h-4 text-zinc-500"
											strokeWidth={3}
										/>
									</Button>
								</div>
							</div>

							<Textarea
								name="bio"
								id="bio"
								defaultValue="I'm a Product Designer based in Melbourne, Australia. I specialise in UX/UI design, brand strategy, and Webflow development."
							/>
						</div>
					</div>

					<div className="flex flex-col lg:grid lg:grid-cols-form gap-3 pt-5">
						<label
							htmlFor="projects"
							className="text-sm font-medium text-zinc-700"
						>
							Portfolio projects
							<span className="text-sm font-normal text-zinc-500 block mt-0.5">
								Share a snippets of your work.
							</span>
						</label>

						<FileInput.Root>
							<FileInput.Trigger />
							<FileInput.FileList />
							<FileInput.Control multiple />
						</FileInput.Root>
					</div>

					<div className="flex items-center justify-end gap-2 pt-5">
						<div className="flex items-center gap-2">
							<Button variant="outline" type="button">
								Cancel
							</Button>
							<Button variant="primary" type="submit" form="settings">
								Save
							</Button>
						</div>
					</div>
				</form>
			</div>
		</>
	);
}
