import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/en/": [
    {
      text: "XiaoMo Flower",
      icon: "note",
      prefix: "xm/",
      children: "structure",
    },
    {
      text: "Behind...",
      icon: "note",
      prefix: "behind/",
      children: "structure",
    },
  ],
});
