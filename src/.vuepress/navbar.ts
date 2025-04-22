import { navbar } from "vuepress-theme-hope";

export default navbar([
  {
    link: "/",
    text: "Home",
  },
  {
    text: "PEPEC",
    children: ["/Notes/pepec/pepec-900s.html", "/Notes/pepec/pepec-stories.html", "/Notes/pepec/pepec-choosing.html"],
  },
  {
    text: "Study",
    children: [
      {
        text: "运行手册",
        children: ["/Notes/operations-manual/OM-05.md", "/Notes/operations-manual/OM-Misc.md"],
      },
      {
        text: "危险品",
        children: ["/dangerous-goods/index.html"],
      },
      {
        text: "FCTM",
        children: ["/Notes/FCTM/index.html"],
      },
      {
        text: "Fleet",
        children: ["/Notes/Fleet/3DD"],
      },
    ],
  },
  {
    text: "Checklists",
    children: ["/Checklists/before-flight-day", "/Checklists/before-flight-going", "/Checklists/direct-preparing", "/Checklists/ground-operations"],
  },
]);
