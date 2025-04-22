import { viteBundler } from "@vuepress/bundler-vite";
import { registerComponentsPlugin } from "@vuepress/plugin-register-components";
import Path from "path";
import { defineUserConfig } from "vuepress";
import cardContainerPlugin from "./containers/card";
import quesContainerPlugin from "./containers/ques";
import head from "./misc/head";
import theme from "./theme";
type BaseUrl = "/" | `/${string}/` | undefined;
const baseUrl = (process.env?.BASE_URL as BaseUrl) ?? "/";

export default defineUserConfig({
  base: baseUrl,
  head,
  lang: "en-US",
  title: "Aviation Docs Listening",
  description: "Listen to documents and notes about aviation knowledge",
  bundler: viteBundler(),
  plugins: [
    cardContainerPlugin,
    quesContainerPlugin,
    registerComponentsPlugin({
      componentsDir: Path.resolve(__dirname, "./components"),
    }),
  ],
  theme,
  shouldPreload: true,
  shouldPrefetch: false,
});
