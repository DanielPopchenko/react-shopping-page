import Catalogue from "./pages/catalogue/Catalogue";
import Favourite from "./pages/favourite/Favourite";
import About from "./pages/about/About";

export const routes = [
	{
		path: "/catalogue",
		exact: false,
		component: Catalogue,
		title: "CATALOGUE",
		// auth: true,
	},
	{
		path: "/favourite",
		exact: false,
		component: Favourite,
		title: "FAVOURITE",

		// auth: true,
	},
	{
		path: "about",
		exact: false,
		component: About,
		title: "ABOUT US",
	},
];
