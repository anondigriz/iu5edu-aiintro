// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

async function createConfig() {

  /** @type {import('@docusaurus/types').Config} */
  return {
    title: 'Введение в системы искусственного интеллекта',
    tagline: 'Знакомство с искусственным интеллектом и его ролью в современном информационном обществе',
    url: "https://aiintro.docs.iu5edu.ru/",
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'ИУ5 курсы', // Usually your GitHub org/user name.
    projectName: 'aiintro', // Usually your repo name.

    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
    i18n: {
      defaultLocale: 'ru',
      locales: ['ru'],
    },

    presets: [
      [
        'classic',
        /** @type {import('@docusaurus/preset-classic').Options} */
        ({
          docs: {
            sidebarPath: require.resolve('./sidebars.js'),
            // Please change this to your repo.
            // Remove this to remove the "edit this page" links.
            editUrl:
              'https://gitlab.com/iu5edu/aiintro/textbook/-/tree/main/website',
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
          title: 'Введение в ИИ',
          logo: {
            alt: 'Введение в ИИ',
            src: 'img/logo.svg',
          },
          items: [
            {
              type: 'doc',
              docId: 'intro',
              position: 'left',
              label: 'Руководство',
            },
            {
              href: 'https://gitlab.com/iu5edu/aiintro/',
              label: 'GitLab',
              position: 'right',
            },

          ],
        },
        footer: {
          style: 'dark',
          links: [
            {
              title: 'Учебное пособие',
              items: [
                {
                  label: 'Руководство',
                  to: '/docs/intro',
                },
              ],
            },
            {
              title: 'Сообщество',
              items: [
                {
                  label: 'ИУ5 курсы в ВК',
                  href: 'https://vk.com/iu5edu',
                },
                {
                  label: 'ИУ5 в ВК',
                  href: 'https://vk.com/iu5_official',
                },
              ],
            },
            {
              title: 'Дополнительно',
              items: [
                {
                  label: 'GitLab',
                  href: 'https://gitlab.com/iu5edu/aiintro/',
                },
              ],
            },
          ],
          copyright: `Атрибуция: ИУ5 курсы, <a href="https://mivar.org/">НИИ Мивар</a>, <a href="https://inginirium.ru/">Инжинириум&#174;
</a>. ${new Date().getFullYear()}.<br>Текст доступен по лицензии <a href="https://creativecommons.org/licenses/by-sa/4.0/deed.ru"> Attribution-ShareAlike 4.0 International (CC BY-SA 4.0)</a>, если не указано иного.`,
        },
        prism: {
          theme: lightCodeTheme,
          darkTheme: darkCodeTheme,
        },
      }),
  };

}
module.exports = createConfig();
