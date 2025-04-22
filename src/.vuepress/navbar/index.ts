import { navbar } from "vuepress-theme-hope";

const nav = navbar([
	{
		link: "/",
		text: "Home",
	},
	{
		text: "English",
		children: ["/Notes/pepec"],
	},
	{
		text: "Study",
		children: [
			{
				text: "运行手册",
				children: [
					"/Notes/operations-manual/OM-05.md",
					"/Notes/operations-manual/OM-Misc.md",
				],
			},
			{
				text: "危险品",
				children: ["/dangerous-goods"],
			},
			{
				text: "FCTM",
				children: ["/Notes/FCTM"],
			},
			{
				text: "Fleet",
				children: ["/Notes/Fleet/3DD"],
			},
		],
	},
	{
		text: "Checklists",
		children: [
			"/Checklists/before-flight-day/",
			"/Checklists/before-flight-going/",
			"/Checklists/direct-preparing/",
			"/Checklists/ground-operations",
		],
	},
]);

export default nav;

export const enNavbar = nav;
export const zhNavbar = nav;
