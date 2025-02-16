/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @noflow
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

const BASE_URL = '/fbt/'; // Base URL for project
const GITHUB = 'https://github.com/facebookincubator/fbt';

// List of projects/orgs using your project for the users page.
const users = [
  {
    caption: 'Facebook',
    image: BASE_URL + 'img/flogo_RGB_HEX-72.svg',
    infoLink: 'https://www.facebook.com',
    pinned: true,
  },
];

const siteConfig = {
  title: 'FBT',
  tagline: 'An internationalization framework',
  url: 'https://facebookincubator.github.io',
  baseUrl: BASE_URL,
  // For github.io type URLs, you would set the url and baseUrl like:
  // url: 'https://facebook.github.io',
  // baseUrl: '/fbt/',

  // Used for publishing and more
  projectName: 'fbt',
  organizationName: 'facebookincubator',
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    {doc: 'getting_started', label: 'Docs'},
    {page: 'help', label: 'Help'},
    {href: GITHUB, label: 'GitHub'}
  ],

  // If you have users set above, you add it here:
  users,

  /* path to images for header/footer */
  headerIcon: 'img/fbt.png',
  footerIcon: 'img/fbt.png',
  favicon: 'img/favicon_blue.png',

  /* Colors for website */
  colors: {
    primaryColor: '#4267B2',
    secondaryColor: '#5890ff',
  },

  /* Custom fonts for website */
  /*
  fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },
  */

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()} Facebook`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'default',
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: ['https://buttons.github.io/buttons.js'],

  // On page navigation for the current documentation page.
  onPageNav: 'separate',
  // No .html extensions for paths.
  cleanUrl: true,

  // Open Graph and Twitter card images.
  ogImage: 'img/fbt.png',
  twitterImage: 'img/fbt.png',

  // Show documentation's last contributor's name.
  enableUpdateBy: true,

  // Show documentation's last update time.
  enableUpdateTime: true,

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  repoUrl: GITHUB,
  discordUrl: "https://discord.gg/cQvXZr5",
};

module.exports = siteConfig;
