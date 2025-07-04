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
        text: "737 FCOM",
        children: ["Boeing/737-FCOM/737-Exterior-Inspection.md"],
      },
      {
        text: "737 FCTM",
        children: ["Boeing/737-FCTM/737-FCTM-01.md", "Boeing/737-FCTM/737-FCTM-03.md", "Boeing/737-FCTM/737-FCTM-04.md", "Boeing/737-FCTM/737-FCTM-05.md", "Boeing/737-FCTM/737-FCTM-06.md"],
      },
      {
        text: "737 QRH",
        children: ["Boeing/737-QRH/737-QRH-Memory-items.md"],
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
