module.exports = {
  title: '雨の箱庭', // Title for the site. This will be displayed in the navbar.
  base: '/',
  dest: './dist',
  head: [
    ['link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css', integrity: 'sha256-h20CPZ0QyXlBuAw7A+KluUYx/3pK+c7lYEpqLTlxjYQ=', crossorigin: 'anonymous' }]
  ],
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
