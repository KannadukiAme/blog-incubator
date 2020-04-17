module.exports = {
  title: '雨の空', // Title for the site. This will be displayed in the navbar.
  base: '/',
  dest: './dist',
  head: [
    ['link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css', integrity: 'sha256-h20CPZ0QyXlBuAw7A+KluUYx/3pK+c7lYEpqLTlxjYQ=', crossorigin: 'anonymous' }]
  ],
  themeConfig: {
    // Please keep looking down to see the available options.
    nav: [
      { text: '首页', link: '/' },
      { text: '文章', link: '/guide/' },
      { text: '分类', link: 'https://google.com' },
      { text: '关于', link: 'https://google.com' }
    ]
  },
  markdown: {
    extendMarkdown: md => {
      md.use(require('markdown-it-task-lists'))
    }
  },
  plugins: ['@vuepress/back-to-top'],
  evergreen: true
}
