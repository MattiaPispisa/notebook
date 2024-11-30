import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import 'dotenv/config'

const config: Config = {
  title: "Notebook",
  tagline: "The Programming Notebook",

  // Set the production url of your site here
  url: "https://MattiaPispisa.github.io",
  baseUrl: "/notebook/",

  organizationName: "MattiaPispisa",
  projectName: "notebook",
  trailingSlash: false,
  deploymentBranch: "gh-pages",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "logo.png",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",

      {
        theme: {
          customCss: ["./src/css/custom.css"],
        },
        docs: {
          routeBasePath: "",
          sidebarPath: "./sidebars.ts",
          editUrl: "https://github.com/MattiaPispisa/notebook/tree/main/",
          showLastUpdateTime: true,
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    algolia: {
      appId: process.env.ALGOLIA_APP_ID,
      apiKey: process.env.ALGOLIA_APP_KEY,
      indexName: "mattiapispisa",
      contextualSearch: true,
      externalUrlRegex: "external\\.com|domain\\.com",
      replaceSearchResultPathname: {
        from: "/docs/", // or as RegExp: /\/docs\//
        to: "/",
      },
      searchParameters: {},
      searchPagePath: "search",
      insights: false,
    },
    navbar: {
      title: "Notebook",
      logo: { src: "logo.png", alt: "programming-notebook" },
      hideOnScroll: true,
      items: [
        {
          href: "https://github.com/MattiaPispisa/notebook",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          label: "Profile",
          href: "http://mattiapispisa.it",
        },
        {
          label: "GitHub",
          href: "https://github.com/MattiaPispisa",
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Notebook`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
