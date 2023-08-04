import {
	BarChart,
	CheckSquare,
	Cog,
	Flag,
	Home,
	LifeBuoy,
	Search,
	SquareStack,
	Users,
} from "lucide-react";
import Logo from "./Logo";
import NavItem from "./NavItem";
import UsedSpaceWidget from "./UsedSpaceWidget";
import Profile from "./Profile";

const Sidebar = () => {
	return (
		<aside className="flex flex-col gap-6 px-5 py-8 border-r border-zinc-200">
			<Logo />

			<div className="flex w-full items-center gap-2 mx-1 rounded-lg border border-zinc-300 py-2 px-3 shadow-sm">
				<Search className="w-5 h-5 text-zinc-500" />
				<input
					className="flex-1 border-0 bg-transparent p-0 text-zinc-900 placeholder-zinc-600"
					placeholder="Search"
				/>
			</div>

			<nav className="space-y-0.5">
				<NavItem title="Home" icon={Home} />
				<NavItem title="Dashboard" icon={BarChart} />
				<NavItem title="Projects" icon={SquareStack} />
				<NavItem title="Tasks" icon={CheckSquare} />
				<NavItem title="Reporting" icon={Flag} />
				<NavItem title="Users" icon={Users} />
			</nav>

			<div className="mt-auto flex flex-col gap-6">
				<nav className="space-y-0.5">
					<NavItem title="Support" icon={LifeBuoy} />
					<NavItem title="Settings" icon={Cog} />
				</nav>

				<UsedSpaceWidget />

				<div className="h-px bg-zinc-200" />

				<Profile />
			</div>
		</aside>
	);
};

export default Sidebar;
