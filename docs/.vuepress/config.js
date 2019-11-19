// docs https://vuepress.vuejs.org/zh/config/#%E5%9F%BA%E6%9C%AC%E9%85%8D%E7%BD%AE
const path = require('path');
const resolve = dir => path.join(__dirname, dir);
const moment = require('moment');

module.exports = {
  title: '前端笔记',
  base: '/',
  head: [['link', { rel: 'icon', href: '~$img/F_1.png' }]],
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
    ]
  ],
  // 主题配置
  themeConfig: {
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
      }
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
        $img: resolve('./public/assets/images/'),
        $tools: resolve('./utils/index')
      }
    }
  }
};
