import { navbar } from "vuepress-theme-hope";

export default navbar([
  {
    link: "/",
    text: "Home",
  },
  {
    text: "Boeing",
    children: [
      {
        text: "737 FCTM",
        children: ["Boeing/737-FCTM/737-FCTM-01.md"],
      },
    ],
  },
  {
    text: "PHAK",
    children: ["FAA-Handbooks/PHAK/PHAK-14.md"],
  },
  {
    text: "AC",
    children: ["FAA-Handbooks/AC/AC90-117.md", "FAA-Handbooks/AC/AC120-51E.md", "FAA-Handbooks/AC/AC120-108A"],
  },
]);
