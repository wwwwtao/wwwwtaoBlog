export default {
  "title": "文涛前端工程师",
  "titleDelimiter": "-",
  "url": "https://zxuqian.cn",
  "baseUrl": "/",
  "favicon": "img/favicon.ico",
  "organizationName": "zxuqian",
  "projectName": "zxuqian.cn",
  "themeConfig": {
    "image": "img/fenghua.jpg",
    "announcementBar": {
      "id": "feature_release",
      "content": "更新<a href='/docs/videos/browser/js-web-animations-api'>《与 CSS Keyframes 媲美的原生 JS 高性能动画 API 教程》配套文本</a>",
      "backgroundColor": "#fafbfc",
      "textColor": "#091E42",
      "isCloseable": true
    },
    "hideableSidebar": true,
    "navbar": {
      "title": "文涛",
      "logo": {
        "alt": "文涛",
        "src": "img/logo.webp",
        "srcDark": "img/logo.webp"
      },
      "items": [
        {
          "to": "/",
          "label": "首页",
          "position": "right",
          "items": [
            {
              "label": "随笔",
              "to": "lifestyle"
            }
          ]
        },
        {
          "label": "学习",
          "position": "right",
          "items": [
            {
              "label": "技术视频",
              "to": "docs/videos/"
            },
            {
              "label": "CSS 完全指南",
              "to": "docs/css/css-tutorial-intro"
            },
            {
              "label": "资源导航",
              "to": "docs/resources/"
            }
          ]
        },
        {
          "label": "课程",
          "position": "right",
          "items": [
            {
              "label": "React 即时通信 UI 开发实战",
              "to": "docs/course/react-chat-ui"
            }
          ]
        },
        {
          "label": "小工具",
          "position": "right",
          "to": "docs/tools/"
        },
        {
          "href": "https://github.com/zxuqian/zxuqian.cn",
          "label": "本站源码",
          "position": "right"
        }
      ],
      "hideOnScroll": false
    },
    "algolia": {
      "apiKey": "fabfb0e9997e101154ed85d64b7b6a3c",
      "indexName": "ZXUQIANCN",
      "appId": "LIJMO3C9C4",
      "contextualSearch": false,
      "searchParameters": {}
    },
    "footer": {
      "style": "dark",
      "links": [
        {
          "title": "学习",
          "items": [
            {
              "label": "React 即时通信 UI 开发实战",
              "to": "docs/course/react-chat-ui"
            },
            {
              "label": "技术视频",
              "to": "docs/videos"
            },
            {
              "label": "CSS 完全指南",
              "to": "docs/css/css-tutorial-intro"
            },
            {
              "label": "资源导航",
              "to": "docs/resources"
            }
          ]
        },
        {
          "title": "社交媒体",
          "items": [
            {
              "label": "GitHub",
              "href": "https://github.com/zxuqian/zxuqian.cn"
            },
            {
              "label": "Bilibili 哔哩哔哩",
              "href": "https://space.bilibili.com/302954484"
            },
            {
              "label": "网易云课堂",
              "href": "https://study.163.com/course/courseMain.htm?courseId=1210022809&share=2&shareId=480000002172128"
            },
            {
              "label": "腾讯课堂",
              "href": "https://ke.qq.com/course/2839093?tuin=3850fdc6"
            }
          ]
        },
        {
          "title": "友情链接",
          "items": [
            {
              "label": "yuqing521のblog",
              "to": "https://yuqing521.github.io/"
            },
            {
              "label": "lookroot的个人空间",
              "to": "https://www.lookroot.cn/"
            },
            {
              "label": "潜心专研的小张同学",
              "to": "https://zhangqiang.vercel.app/"
            }
          ]
        }
      ],
      "copyright": "<p>Copyright © 2022 文涛 (张旭乾) Built with Docusaurus.</p><p><a href=\"http://beian.miit.gov.cn/\" >冀ICP备14007097号-3</a></p><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc/4.0/\"><img alt=\"Creative Commons License\" style=\"border-width:0\" src=\"/img/creative-commons-license-icon.png\" /></a><br />本站所有内容遵循 <a rel=\"license\" href=\"https://creativecommons.org/licenses/by-nc/4.0/deed.zh-Hans\" >CC BY-NC 4.0 协议</a>，转载须注明署名和出处，且不可用于商业用途。若与其他同步平台协议冲突，以本网站为准。"
    },
    "prism": {
      "theme": {
        "plain": {
          "color": "#393A34",
          "backgroundColor": "#f6f8fa"
        },
        "styles": [
          {
            "types": [
              "comment",
              "prolog",
              "doctype",
              "cdata"
            ],
            "style": {
              "color": "#999988",
              "fontStyle": "italic"
            }
          },
          {
            "types": [
              "namespace"
            ],
            "style": {
              "opacity": 0.7
            }
          },
          {
            "types": [
              "string",
              "attr-value"
            ],
            "style": {
              "color": "#e3116c"
            }
          },
          {
            "types": [
              "punctuation",
              "operator"
            ],
            "style": {
              "color": "#393A34"
            }
          },
          {
            "types": [
              "entity",
              "url",
              "symbol",
              "number",
              "boolean",
              "variable",
              "constant",
              "property",
              "regex",
              "inserted"
            ],
            "style": {
              "color": "#36acaa"
            }
          },
          {
            "types": [
              "atrule",
              "keyword",
              "attr-name",
              "selector"
            ],
            "style": {
              "color": "#00a4db"
            }
          },
          {
            "types": [
              "function",
              "deleted",
              "tag"
            ],
            "style": {
              "color": "#d73a49"
            }
          },
          {
            "types": [
              "function-variable"
            ],
            "style": {
              "color": "#6f42c1"
            }
          },
          {
            "types": [
              "tag",
              "selector",
              "keyword"
            ],
            "style": {
              "color": "#00009f"
            }
          }
        ]
      },
      "darkTheme": {
        "plain": {
          "backgroundColor": "#282c34",
          "color": "#ffffff"
        },
        "styles": [
          {
            "types": [
              "attr-name"
            ],
            "style": {
              "color": "#c5a5c5"
            }
          },
          {
            "types": [
              "attr-value"
            ],
            "style": {
              "color": "#8dc891"
            }
          },
          {
            "types": [
              "comment",
              "block-comment",
              "prolog",
              "doctype",
              "cdata",
              "shebang"
            ],
            "style": {
              "color": "#999999"
            }
          },
          {
            "types": [
              "property",
              "number",
              "function-name",
              "constant",
              "symbol",
              "deleted"
            ],
            "style": {
              "color": "#5a9bcf"
            }
          },
          {
            "types": [
              "boolean"
            ],
            "style": {
              "color": "#ff8b50"
            }
          },
          {
            "types": [
              "tag"
            ],
            "style": {
              "color": "#fc929e"
            }
          },
          {
            "types": [
              "string"
            ],
            "style": {
              "color": "#8dc891"
            }
          },
          {
            "types": [
              "punctuation"
            ],
            "style": {
              "color": "#8dc891"
            }
          },
          {
            "types": [
              "selector",
              "char",
              "builtin",
              "inserted"
            ],
            "style": {
              "color": "#D8DEE9"
            }
          },
          {
            "types": [
              "function"
            ],
            "style": {
              "color": "#79b6f2"
            }
          },
          {
            "types": [
              "operator",
              "entity",
              "url",
              "variable"
            ],
            "style": {
              "color": "#d7deea"
            }
          },
          {
            "types": [
              "keyword"
            ],
            "style": {
              "color": "#c5a5c5"
            }
          },
          {
            "types": [
              "at-rule",
              "class-name"
            ],
            "style": {
              "color": "#FAC863"
            }
          },
          {
            "types": [
              "important"
            ],
            "style": {
              "fontWeight": "400"
            }
          },
          {
            "types": [
              "bold"
            ],
            "style": {
              "fontWeight": "bold"
            }
          },
          {
            "types": [
              "italic"
            ],
            "style": {
              "fontStyle": "italic"
            }
          },
          {
            "types": [
              "namespace"
            ],
            "style": {
              "opacity": 0.7
            }
          }
        ]
      },
      "defaultLanguage": "javascript",
      "additionalLanguages": []
    },
    "gtag": {
      "trackingID": "G-6PSESJX0BM",
      "anonymizeIP": true
    },
    "colorMode": {
      "defaultMode": "light",
      "disableSwitch": false,
      "respectPrefersColorScheme": false,
      "switchConfig": {
        "darkIcon": "🌜",
        "darkIconStyle": {},
        "lightIcon": "🌞",
        "lightIconStyle": {}
      }
    },
    "docs": {
      "versionPersistence": "localStorage"
    },
    "metadatas": []
  },
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "sidebarPath": "/Users/wwwwtao/Desktop/学习/wwwwtaoBlog/sidebars.js",
          "editUrl": "https://github.com/zxuqian/zxuqian.cn/tree/master",
          "remarkPlugins": [
            null,
            null
          ],
          "rehypePlugins": [
            null
          ],
          "showLastUpdateTime": true
        },
        "blog": {
          "path": "./blog",
          "routeBasePath": "/",
          "blogSidebarTitle": "近期文章",
          "remarkPlugins": [
            null
          ],
          "rehypePlugins": [
            null
          ],
          "feedOptions": {
            "type": "all",
            "title": "文涛前端工程师",
            "copyright": "Copyright © 2022 文涛 (张旭乾) Built with Docusaurus.<p><a href=\"http://beian.miit.gov.cn/\" class=\"footer_lin\">冀ICP备14007097号-3</a></p>"
          }
        },
        "theme": {
          "customCss": "/Users/wwwwtao/Desktop/学习/wwwwtaoBlog/src/css/custom.css"
        },
        "sitemap": {
          "changefreq": "daily",
          "priority": 0.5
        }
      }
    ]
  ],
  "plugins": [
    "/Users/wwwwtao/Desktop/学习/wwwwtaoBlog/src/plugin/plugin-baidu-analytics",
    "/Users/wwwwtao/Desktop/学习/wwwwtaoBlog/src/plugin/plugin-baidu-push",
    "/Users/wwwwtao/Desktop/学习/wwwwtaoBlog/src/plugin/plugin-google-adsense",
    "/Users/wwwwtao/Desktop/学习/wwwwtaoBlog/src/plugin/plugin-onesignal-push",
    "/Users/wwwwtao/Desktop/学习/wwwwtaoBlog/src/plugin/plugin-latest-docs",
    "docusaurus2-dotenv",
    [
      "@docusaurus/plugin-content-blog",
      {
        "id": "secret-garden",
        "routeBasePath": "lifestyle",
        "path": "./lifestyle",
        "feedOptions": {
          "type": "all",
          "title": "文涛前端工程师",
          "copyright": "Copyright © 2022 文涛 (张旭乾) Built with Docusaurus.<p><a href=\"http://beian.miit.gov.cn/\" >冀ICP备14007097号-3</a></p>"
        }
      }
    ]
  ],
  "stylesheets": [
    {
      "rel": "preconnect",
      "href": "https://fonts.gstatic.com",
      "type": "text/css"
    },
    {
      "href": "/katex/katex.min.css",
      "type": "text/css",
      "integrity": "sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X",
      "crossorigin": "anonymous"
    },
    {
      "href": "https://fonts.font.im/css?family=Raleway:500,700&display=swap",
      "type": "text/css",
      "rel": "stylesheet"
    }
  ],
  "i18n": {
    "defaultLocale": "zh-CN",
    "locales": [
      "zh-CN"
    ],
    "localeConfigs": {}
  },
  "baseUrlIssueBanner": true,
  "onBrokenLinks": "throw",
  "onBrokenMarkdownLinks": "warn",
  "onDuplicateRoutes": "warn",
  "customFields": {},
  "themes": [],
  "noIndex": false
};