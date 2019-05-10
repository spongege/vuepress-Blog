module.exports = {
  title: '随笔',
  description: '一些前端笔记',
  base: '/Vuepress-Blog/',
  dest: 'docs',
  home: true,
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: 'https://avatars1.githubusercontent.com/u/35484453?s=460&v=4'
      }
    ]
  ],
  ga: '', //谷歌id
  serviceWorker: true,
  themeConfig: {
    // sidebarDepth:2,
    nav: [
      {
        text: '前端技术栈',
        items: [
          { text: '汇总', link: '/web/a' },
          { text: '小记', link: '/tips/a' }
        ]
      },

      { text: '关于我们', link: '/about' },
      { text: 'GitHub', link: 'https://github.com/spongege' }
    ],
    sidebar: {
      '/web/': [
        {
          title: 'web',
          children: ['a']
        }
      ],
      '/tips/': [
        {
          title: 'tips',
          children: ['a']
        }
      ]
    }
  },
  displayAllHeaders: true, //显示所有页面的标题链接
  plugins: [
    [
      '@vuepress/register-components',
      {
        componentsDir: './components'
      }
    ]
  ]
}
