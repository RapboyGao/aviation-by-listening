import { markdownContainerPlugin, MarkdownContainerPluginOptions } from "@vuepress/plugin-markdown-container";

export const option: MarkdownContainerPluginOptions = {
  type: "card",
  before(b) {
    return `<div class="question-card">`;
  },
  after() {
    return `</div>`;
  },
};

export const plugin = markdownContainerPlugin(option);

export default plugin;
