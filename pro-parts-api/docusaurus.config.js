import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '[pro]Parts',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://www.pro-parts.com/',
  baseUrl: '/',

  organizationName: 'ZF',
  projectName: 'spryker-b2b-marketplace',

  onBrokenLinks: 'throw',


  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'pt'],
    localeConfigs: {
      en: {
        label: 'English',
        htmlLang: 'en',
        direction: 'ltr',
      },
      pt: {
        label: 'Português Brasileiro',
        htmlLang: 'pt-BR',
        direction: 'ltr',
        translate: true,
      },
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.js',
          docItemComponent: '@theme/ApiItem',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],

  plugins: [
    [
      'docusaurus-plugin-openapi-docs',
      {
        id: 'pro-parts-api',
        docsPluginId: 'classic',
        config: {
          proPartsApiOffer: {
            specPath: 'pro-parts-api-offer.yml',
            outputDir: 'docs/pro-parts-api-offer',
            sidebarOptions: {},
          },
          proPartsApiOrder: {
            specPath: 'pro-parts-api-order.yml',
            outputDir: 'docs/pro-parts-api-order',
            sidebarOptions: {},
          },
          proPartsApiPartner: {
            specPath: 'pro-parts-api-partner.yml',
            outputDir: 'docs/pro-parts-api-partner',
            sidebarOptions: {},
          },
          proPartsApiPing: {
            specPath: 'pro-parts-api-ping.yml',
            outputDir: 'docs/pro-parts-api-ping',
            sidebarOptions: {},
          },
        },
      },
    ],
  ],

  themes: ['docusaurus-theme-openapi-docs'],

  themeConfig: {
    navbar: {
      title: '',
      logo: {
        alt: '[pro]Parts',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'localeDropdown',
          position: 'left',
        },
      ],
    },

    footer: {},

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },

    languageTabs: [
      {
        highlight: 'bash',
        language: 'curl',
        logoClass: 'curl',
      },
      {
        highlight: 'php',
        language: 'php',
        logoClass: 'php',
      },
      {
        highlight: 'javascript',
        language: 'nodejs',
        logoClass: 'nodejs',
      },
      {
        highlight: 'javascript',
        language: 'javascript',
        logoClass: 'javascript',
      },
      {
        highlight: 'python',
        language: 'python',
        logoClass: 'python',
      },
    ],
  },
};

export default config;
