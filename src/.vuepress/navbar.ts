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
  {
    text: "AC",
    children: ["FAA-Handbooks/AC/AC120-51E.md", "FAA-Handbooks/AC/AC120-108A"],
  },
]);
