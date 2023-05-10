// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'BTBC AV TEAM',
  tagline: 'Documentation Center',
  favicon: 'img/btbclogo.jpg',

  // Set the production url of your site here
  url: 'https://jcgordon10.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/btbc-av/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'jcgordon10', // Usually your GitHub org/user name.
  projectName: 'btbc-av', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/BTBC_AV_Logo.svg',
      navbar: {
        title: '',
        logo: {
          alt: 'My Site Logo',
          src: 'img/BTBC_AV_Logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Docs',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Get Started',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Updates',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              }
            ],
          },
          {
            title: 'External',
            items: [
              {
                label: 'YouTube',
                href: 'https://www.youtube.com/@BurgeTerraceBaptistChurch',
              },
              {
                label: 'Church Center',
                href: 'https://burgeterrace.churchcenter.com/home',
              },
              {
                label: 'Website (Retiring)',
                href: 'https://burgeterrace.org/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Burge Terrace Baptist Church
        · 9345 Brookville Road · Indianapolis, IN 46239 · 317-862-6109 · Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
