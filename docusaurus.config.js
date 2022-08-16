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
    trailingSlash: true,
    organizationName: 'Getdeck',
    projectName: 'getdeck',
    deploymentBranch: 'main',
    scripts: [
        {
            src: "https://buttons.github.io/buttons.js",
            async: true,
            defer: true,
        },
    ],
    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                gtag: {
                    trackingID: 'GTM-TM2VPNG',
                    anonymizeIP: true,
                },
                sitemap: {
                    changefreq: 'weekly',
                    priority: 0.5,
                    ignorePatterns: ['/tags/**'],
                    filename: 'sitemap.xml',
                },
                docs: {
                    routeBasePath: 'docs',
                    path: 'docs',
                    sidebarPath: require.resolve('./sidebarsDocs.js'),
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

    plugins: [
        [
            '@docusaurus/plugin-content-docs',
            {
                id: 'beiboot',
                path: 'beiboot',
                routeBasePath: 'beiboot',
                sidebarPath: require.resolve('./sidebarsBeiboot.js'),
            },
        ],
    ],

    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            announcementBar: {
                id: 'support_us',
                content:
                    'If you like Getdeck, please give us a ⭐ star on <a target="_blank" href="https://github.com/Getdeck/getdeck/">GitHub</a> and support this project.',
                backgroundColor: '#ebedf0',
                textColor: '#1c1e21',
                isCloseable: false,
            },
            navbar: {
                title: 'Getdeck',
                logo: {
                    alt: 'Getdeck Logo',
                    src: 'img/logo.svg',
                },
                items: [
                    {
                        to: '/docs/',
                        position: 'right',
                        label: 'Docs',
                    },
                    {
                        to: '/beiboot/',
                        position: 'right',
                        label: 'Beiboot',
                        className: 'navbar-icon-menu',
                    },
                    {
                        position: 'right',
                        label: 'Wharf',
                        to: '/wharf/',
                        className: 'navbar-icon-menu',
                    },
                    {
                        to: '/docs/cli-reference/',
                        position: 'right',
                        label: 'CLI',
                        className: 'navbar-icon-menu button button--secondary button--navitem',
                    },
                    {
                        to: '/docs/deckfile-specs/',
                        position: 'right',
                        label: 'deck.yaml',
                        className: 'navbar-icon-menu button button--secondary button--navitem',
                    },
                    {
                        href: 'https://github.com/Getdeck/getdeck',
                        label: 'Getdeck on GitHub',
                        position: 'right',
                        'aria-label': 'GitHub repository',
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
                                label: 'Introduction for Developers',
                                to: '/docs/overview/introduction-for-developers/',
                            },
                            {
                                label: 'Introduction for DevOps',
                                to: '/docs/overview/introduction-for-devops/',
                            },
                            {
                                label: 'Deckfile',
                                to: '/docs/deckfile-specs/',
                            },
                            {
                                label: 'CLI Reference',
                                to: '/docs/cli-reference/',
                            },
                        ],
                    },
                    {
                        title: 'Community',
                        items: [
                            {
                                label: 'Getdeck',
                                href: 'https://github.com/Getdeck/getdeck',
                            },
                            {
                                href: 'https://github.com/Getdeck/beiboot',
                                label: 'Beiboot',
                            },
                            {
                                href: 'https://github.com/Getdeck/wharf',
                                label: 'Wharf',
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
            colorMode: {
                disableSwitch: false,
                respectPrefersColorScheme: true,
            },
        }),
};

module.exports = config;
