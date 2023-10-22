import { hopeTheme } from "vuepress-theme-hope";
import sidebar from "./sidebar.js";
export default hopeTheme({
  author: {
    name: "鬼哥",
    url: "https://Etab.store/",
  },
  logo: "/logo.png",
  repo: "/yangyunhai/etab-docs",
  docsDir: "src",
  sidebar,
  print:false,
  plugins: {
    mdEnhance: {
      align: true,
      attrs: true,
      chart: false,
      codEtabs: true,
      demo: false,
      echarts: false,
      figure: true,
      flowchart: true,
      gfm: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      katex: true,
      mark: true,
      mermaid: true,
      playground: {
        presets: ["md", "vue"],
      },
      revealjs: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
      stylize: [{
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,
      vuePlayground: true,
    },
  },
});
