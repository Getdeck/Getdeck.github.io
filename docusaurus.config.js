// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Getdeck',
  tagline: 'A CLI that creates reproducible Kubernetes environments for development and testing.',
  url: 'https://getdeck.dev',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Getdeck',
  projectName: 'getdeck',
  deploymentBranch: 'main',

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        gtag: {
          trackingID: 'GTM-TM2VPNG',
          anonymizeIP: true,
        },
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/Getdeck/Getdeck.github.io/tree/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/Getdeck/Getdeck.github.io/tree/main/',
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
      navbar: {
        title: 'Getdeck',
        logo: {
          alt: 'Getdeck Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'deck/intro',
            position: 'left',
            label: 'Docs',
          },
          {
            type: 'doc',
            docId: 'deckfile/deckfile-specs',
            position: 'left',
            label: 'deck.yaml',
            className: 'navbar-icon-menu',
          },
          {
            href: 'https://github.com/Getdeck/getdeck',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Introduction',
                to: '/docs/deck/intro',
              },
              {
                label: 'Deckfile',
                to: '/docs/deckfile/specs',
              },
              {
                label: 'CLI Reference',
                to: '/docs/deck/for-devs/cli-reference',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/Getdeck/getdeck',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Gefyra',
                href: 'https://github.com/gefyrahq/gefyra',
              },
              {
                label: 'Unikube',
                href: 'https://unikube.io',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Blueshoe GmbH. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
