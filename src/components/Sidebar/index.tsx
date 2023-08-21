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
import * as Input from "../Input";

const Sidebar = () => {
	return (
		<aside className="fixed top-0 left-0 right-0 bottom-0 z-20 bg-white border-b  flex flex-col gap-6 p-4 border-zinc-200 lg:right-auto lg:w-80 lg:border-r lg:px-5 lg:py-8 lg:relative">
			<Logo />

			<Input.Root>
				<Input.Prefix>
					<Search className="w-5 h-5 text-zinc-500" />
				</Input.Prefix>
				<Input.Control placeholder="Search" />
			</Input.Root>

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
