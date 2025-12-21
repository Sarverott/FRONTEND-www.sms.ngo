import Pages from "@/views/subdisplays/pages";

const ROUTES = [
	{
		path: "/",
		name: "HOME",
		component: Pages.Home,
	},
	{
		path: "/about/:topic",
		component: Pages.Glossary,
		children: [
			// UserHome will be rendered inside User's <router-view>
			// when /user/:id is matched
			{
				path: "",
				name: "O NAS",
				component: Pages.About,
			},

			// ...other sub routes
		],
	},
	{
		path: "/contact",
		name: "KONTAKT",
		component: Pages.Contact,
	},
	{
		path: "/workshops",
		name: "WARSZTATY",
		component: Pages.Workshop,
	},
	{
		path: "/calendar",
		name: "KALENDARZ",
		component: Pages.Calendar,
	},
	// {
	//   path: '/about',
	//   name: 'about',
	//   component: LogoTest,
	// }
];

export default ROUTES;
