import type { PwaPluginOptions } from "@vuepress/plugin-pwa";
// 如果你需要 PWA。安装 @vuepress/plugin-pwa 并取消下方注释

const pwa: PwaPluginOptions = {
  favicon: "/assets/icon/IMG_0485.JPG",
  cacheHTML: true,
  cacheImage: true,
  appendBase: true,

  apple: {
    icon: "/assets/icon/IMG_0485.JPG",
    statusBarColor: "black",
  },
  maxSize: 1024 * 1024,
  maxImageSize: 1024 * 1024,
};

export default pwa;
