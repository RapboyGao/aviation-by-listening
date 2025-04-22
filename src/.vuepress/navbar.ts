import { navbar } from "vuepress-theme-hope";

export default navbar([
  {
    link: "/",
    text: "Home",
  },
  {
    text: "PHAK",
    children: ["FAA-Handbooks/PHAK/PHAK-14.md"],
  },
]);
