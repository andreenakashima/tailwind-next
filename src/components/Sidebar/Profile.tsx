import { LogOut } from "lucide-react";
import { Button } from "../Button";

const Profile = () => {
	return (
		<div className="grid grid-cols-profile items-center gap-3">
			<img
				src="https://github.com/andreenakashima.png"
				className="h-10 w-10 rounded-full"
				alt=""
			/>

			<div className="flex flex-col truncate">
				<span className="text-sm font-semibold text-zinc-700 dark:text-zinc-100">
					Andre Nakashima
				</span>
				<span className="text-sm text-zinc-500 truncate dark:text-zinc-400">
					andreenakashima@gmail.com
				</span>
			</div>

			<Button type="button" variant="ghost">
				<LogOut className="w-5 h-5 text-zinc-500" />
			</Button>
		</div>
	);
};

export default Profile;
