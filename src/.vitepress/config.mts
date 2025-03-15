import { defineConfig } from 'vitepress'

export default defineConfig({

  base: '/',
  lang: 'zh-Hans',
  title: "风绘之境",
  description: "一个支持生电、养老的纯净综合性MC服务器~",
  head: [['link', { rel: 'icon', href: '/logo/Windrealm.svg' }]],
  lastUpdated: true,

  markdown: {
    container: {
      tipLabel: '提示',
      warningLabel: '警告',
      dangerLabel: '危险',
      infoLabel: '信息',
      detailsLabel: '详细信息'
    }
  },

  vite
      : {
    optimizeDeps
        : {
      exclude
          : [
        '@nolebase/vitepress-plugin-enhanced-readabilities/client',
        'vitepress',
        '@nolebase/ui',
      ],
    },
    ssr
        : {
      noExternal
          : [
        // 如果还有别的依赖需要添加的话，并排填写和配置到这里即可 //
        '@nolebase/vitepress-plugin-enhanced-readabilities',
        '@nolebase/ui',
      ],
    },
  },

  themeConfig: {

    logo: '/logo/Windrealm.svg',

    sidebar: {
      '/': { base: '/', items: sidebarWindrealm() },
    },


    nav: [
      { text: '首页', link: '/' },
      { text: '主站', link: 'https://mikufun.top' }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/WindrealmMC' }
    ],

    editLink: {
      pattern: 'https://github.com/WindrealmMC/docs',
      text: '在 GitHub 上编辑此页面'
    },

    footer: {
      message: '本站所有文档采用 CC BY-SA 4.0 许可协议发布',
      copyright: `版权所有 © 2019-${new Date().getFullYear()} WindrealmMC`
    },

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    outline: {
      label: '页面导航'
    },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },

    langMenuLabel: '多语言',
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    skipToContentLabel: '跳转到内容',

    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档'
          },
          modal: {
            displayDetails: '显示详情',
            resetButtonTitle: '清除查询',
            backButtonTitle: '返回',
            noResultsText: '没有找到相关内容',
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭'
            }
          }
        }
      }
    }
  }
})

function sidebarWindrealm(): DefaultTheme.SidebarItem[] {
  return [
    {
      items: [
        {
          text: '关于',
          items: [
            { text: '关于', link: 'about' }
          ],
        },
        {
          text: '联系我们',
          items: [
            { text: '联系我们', link: 'contact' }
          ],
        },
      ],
    },
  ]
}