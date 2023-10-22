import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/docs",
  title: "Etab新标签页",
  description: "Etab新标签页文档",
  head: [['link', { rel: 'icon', href: 'https://etab.store/static/images/logo.png?v=20231018' }]],
  theme,
});
