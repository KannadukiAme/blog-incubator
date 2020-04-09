module.exports = {
  title: '雨の箱庭', // Title for the site. This will be displayed in the navbar.
  base: '/',
  dest: './dist',
  theme: '@vuepress/theme-blog',
  themeConfig: {
    // Please keep looking down to see the available options.
  },
  markdown: {
    extendMarkdown: md => {
      md.use(require('markdown-it-task-lists'))
    }
  },
  plugins: ['@vuepress/back-to-top'],
  evergreen: true
}
