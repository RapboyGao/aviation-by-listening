import { markdownContainerPlugin, MarkdownContainerPluginOptions } from "@vuepress/plugin-markdown-container";

export const option: MarkdownContainerPluginOptions = {
  type: "ques",
  before(b) {
    return `<Ques ${b} >`;
  },
  after() {
    return `</Ques>`;
  },
};

export const plugin = markdownContainerPlugin(option);

export default plugin;
