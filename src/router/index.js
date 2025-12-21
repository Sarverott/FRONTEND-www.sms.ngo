import { createRouter, createWebHistory } from "vue-router";
//import HomeView from '../views/HomeView.vue'

//import Callendarium from '@/views/subdisplays/Callendarium.vue'
import StartingHome from "@/views/subdisplays/StartingHome.vue";

import AboutPage from "@/views/subdisplays/AboutPage.vue";
import CalendarPage from "@/views/subdisplays/CalendarPage.vue";
import ContactPage from "@/views/subdisplays/ContactPage.vue";
import WorkshopPage from "@/views/subdisplays/WorkshopPage.vue";
//import SocmedTest from '@/views/subdisplays/SocmedTest.vue'
// import LogoTest from '@/views/subdisplays/LogoTest.vue'

//HOME / NASZA WIZJA / PRACOWNIE / OFERTA / KALENDARZ / REGULAMIN / KONTAKT

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "HOME",
			component: StartingHome,
		},
		{
			path: "/about",
			name: "O NAS",
			component: AboutPage,
		},
		{
			path: "/contact",
			name: "KONTAKT",
			component: ContactPage,
		},
		{
			path: "/workshops",
			name: "WARSZTATY",
			component: WorkshopPage,
		},
		{
			path: "/calendar",
			name: "KALENDARZ",
			component: CalendarPage,
		},
		// {
		//   path: '/about',
		//   name: 'about',
		//   component: LogoTest,
		// }
	],
});

export default router;
