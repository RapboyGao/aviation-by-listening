import { registerComponentsPlugin } from "@vuepress/plugin-register-components";
import { defineUserConfig } from "vuepress";
import cardContainerPlugin from "./containers/card";
import quesContainerPlugin from "./containers/ques";
import head from "./misc/head";
import theme from "./theme";
import Path from "path";

type BaseUrl = "/" | `/${string}/` | undefined;
const baseUrl = (process.env?.BASE_URL as BaseUrl) ?? "/";

export default defineUserConfig({
  base: baseUrl,
  head,
  lang: "en-US",
  title: "Aviation Docs Listening",
  description: "Listen to documents and notes about aviation knowledge",
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
