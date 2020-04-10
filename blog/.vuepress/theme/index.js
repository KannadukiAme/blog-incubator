module.exports = (themeConfig, ctx) => {
  const plugins = [
    '@vuepress/plugin-nprogress',
    ['@vuepress/medium-zoom', true],
    [
      '@vuepress/search',
      {
        searchMaxSuggestions: 10,
      },
    ],
    ['@vuepress/blog', {
      directories: [
        {
          id: 'post',
          dirname: '_posts',
          path: '/',
        },
      ],
      frontmatters: [
        {
          id: 'tag',
          keys: ['tags'],
          path: '/tag/',
        },
      ],
      globalPagination: {
        lengthPerPage: 5,
      },
    }],
    ['smooth-scroll', true],
  ]

  themeConfig = {
    ...themeConfig,
    plugins
  }

  return themeConfig
}
