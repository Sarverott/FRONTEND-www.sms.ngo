import { createRouter, createWebHistory } from "vue-router";
//import HomeView from '../views/HomeView.vue'

import Callendarium from "@/views/subdisplays/Callendarium.vue";
import HelloWorld from "@/views/subdisplays/HelloWorld.vue";
import SocmedTest from "@/views/subdisplays/SocmedTest.vue";
// import LogoTest from '@/views/subdisplays/LogoTest.vue'

//HOME / NASZA WIZJA / PRACOWNIE / OFERTA / KALENDARZ / REGULAMIN / KONTAKT

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "HOME",
			component: HelloWorld,
		},
		{
			path: "/vision",
			name: "NASZA WIZJA",
			component: SocmedTest,
		},
		{
			path: "/workstations",
			name: "PRACOWNIE",
			component: Callendarium,
		},
		{},
		// {
		//   path: '/about',
		//   name: 'about',
		//   component: LogoTest,
		// }
	],
});

export default router;
