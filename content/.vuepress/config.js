module.exports = {
  title: 'sponge',
  description: '一些很随意的前端笔记',
  base: '/vuepress-blog/',
  dest: 'docs',
  home: true,
  head: [
    ["link", { rel: "icon", href: "/hero.jpg" }]
  ],
  ga: 'UA-140141424-1', //谷歌id
  serviceWorker: true,
  themeConfig: {
    // sidebarDepth:2,
    nav: [
      {
        text: '前端技术栈',
        items: [
          { text: '笔记', link: '/jsNotes/reg' },
          { text: '其他', link: '/tips/arrSort' }
        ]
      },

      { text: '关于我们', link: '/about' },
      { text: 'GitHub', link: 'https://github.com/spongege' }
    ],
    sidebar: {
      '/jsNotes/': [
        {
          title: 'jsNotes',
          children: ['reg', 'arrSort']
        }
      ],
      '/tips/': [
        {
          title: 'tips',
          children: ['arrSort']
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
