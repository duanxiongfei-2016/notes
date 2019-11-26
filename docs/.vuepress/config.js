// docs https://vuepress.vuejs.org/zh/config/#%E5%9F%BA%E6%9C%AC%E9%85%8D%E7%BD%AE
const path = require('path');
const resolve = dir => path.join(__dirname, dir);
const moment = require('moment');

module.exports = {
  title: '前端笔记',
  base: '/',
  head: [
    ['link', { rel: 'icon', href: '/assets/images/F_1.png' }]
  ],
  description: 'Welcome to my VuePress site',
  dest: 'dist', // 打包之后的文件目录
  port: '9898',
  markdown: {
    lineNumbers: false // 是否展示代码块的行号
  },
  plugins: [
    '@vuepress/back-to-top',
    '@vuepress/last-updated',
    [
      '@vuepress/last-updated',
      {
        transformer: timestamp => {
          moment.locale('zh-CN');
          return moment(timestamp).fromNow();
        }
      }
    ],
    [
      '@vuepress/medium-zoom',
      {
        selector: 'img',
        options: {
          margin: 16,
          scrollOffset: 40
        }
      }
    ],
    [
      'vuepress-plugin-helper-live2d', {
        live2d: {
          // 是否启用(关闭请设置为false)(default: true)
          enable: true,
          // 模型名称(default: hibiki)>>>取值请参考：
          // https://github.com/JoeyBling/hexo-theme-yilia-plus/wiki/live2d%E6%A8%A1%E5%9E%8B%E5%8C%85%E5%B1%95%E7%A4%BA
          model: 'epsilon2_1',
          display: {
            position: "right", // 显示位置：left/right(default: 'right')
            width: 135, // 模型的长度(default: 135)
            height: 300, // 模型的高度(default: 300)
            hOffset: 65, //  水平偏移(default: 65)
            vOffset: 0, //  垂直偏移(default: 0)
          },
          mobile: {
            show: false // 是否在移动设备上显示(default: false)
          },
          react: {
            opacity: 0.8 // 模型透明度(default: 0.8)
          }
        }
      }
    ]
  ],
  // 主题配置
  themeConfig: {
    logo: '/assets/images/F_1.png', // 导航栏左边logo,不写就不显示
    sidebarDepth: 3, // 侧边栏显示3级
    lastUpdated: '上次更新', // 给每篇加上最后更新时间，基于 git
    repo: 'https://github.com/duanxiongfei-2016/notes.git',
    repoLabel: 'Github',
    editLinks: true,
    editLinkText: '在 GitHub 上编辑此页',
    // 导航栏
    nav: [
      {
        text: '指南',
        link: '/home/base'
      },
      {
        text: '笔记',
        items: [
          {
            text: 'PE',
            link: '/PE/nginx'
          },
          {
            text: 'vue',
            link: '/vue/dataBinding'
          },
          {
            text: 'flutter',
            link: '/flutter/base'
          },
          {
            text: 'node',
            link: '/node/koa2'
          },
          {
            text: '代码规范',
            link: '/rules/eslint'
          }
        ]
      },
      {
        text: '国际化',
        items: [{ text: '国际化?不存在的😂', link: '/' }]
      },
      {
        text: '留言',
        link: '/leaveMessage/base'
      },
    ],
    search: true, // 是否显示默认的搜索框
    searchMaxSuggestions: 10, // 默认搜索框显示的搜索结果数量
    // 侧边栏导航路由
    sidebar: {
      '/home/': ['base'],
      '/PE/': [
        'nginx',
        'https',
        'ftp',
        'gitlab',
        'git',
        // 'nvm',
        'node',
        'jenkins',
        'docker'
      ],
      '/flutter/': ['base', 'dart'],
      '/vue/': ['dataBinding', 'v-model', 'componentCommunication'],
      '/node/': ['koa2', 'mongoDB'],
      '/utils/': ['base'],
      '/rules/': ['eslint']
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('../'),
        '$img': resolve('./public/assets/images'),
        '$tools': resolve('./utils/index')
      }
    }
  }
};
