export default {
  "title": "wwwwtao是个前端",
  "titleDelimiter": "-",
  "url": "https://zhangqiang.vercel.app",
  "baseUrl": "/",
  "favicon": "https://avatars.githubusercontent.com/u/44993003?s=400&u=02570a73330dd7eeae310b302962c034b2833988&v=4",
  "organizationName": "zhangqiang",
  "projectName": "zhangqiang.vercel.app",
  "themeConfig": {
    "hideableSidebar": true,
    "navbar": {
      "title": "潜心专研的小张同学",
      "logo": {
        "alt": "wwwwtao是个前端",
        "src": "https://avatars.githubusercontent.com/u/44993003?s=400&u=02570a73330dd7eeae310b302962c034b2833988&v=4",
        "srcDark": "https://avatars.githubusercontent.com/u/44993003?s=400&u=02570a73330dd7eeae310b302962c034b2833988&v=4"
      },
      "items": [
        {
          "type": "localeDropdown",
          "position": "left",
          "dropdownItemsBefore": [],
          "dropdownItemsAfter": []
        },
        {
          "to": "docs/all-intro",
          "label": "专属学习笔记",
          "position": "left"
        }
      ],
      "hideOnScroll": false
    },
    "footer": {
      "style": "dark",
      "links": [
        {
          "title": "学习",
          "items": [
            {
              "label": "w3school 在线教程",
              "to": "https://www.w3school.com.cn/index.html"
            },
            {
              "label": "JavaScript | MDN",
              "to": "https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/random"
            },
            {
              "label": "前端学习路线",
              "to": "https://objtube.gitee.io/front-end-roadmap/#/"
            },
            {
              "label": "使用 State Hook – React",
              "to": "https://zh-hans.reactjs.org/docs/hooks-state.html#gatsby-focus-wrapper"
            }
          ]
        },
        {
          "title": "社交媒体",
          "items": [
            {
              "label": "GitHub",
              "href": "https://github.com/JACK-ZHANG-coming"
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
              "label": "峰华前端工程师",
              "to": "https://zxuqian.cn"
            }
          ]
        }
      ],
      "copyright": "<p>Copyright © 2021 潜心专研的小张同学 (张强) Built with Docusaurus and FengHua.</p><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc/4.0/\"><img alt=\"Creative Commons License\" style=\"border-width:0\" src=\"/img/creative-commons-license-icon.png\" /></a><br />本站所有内容遵循 <a rel=\"license\" href=\"https://creativecommons.org/licenses/by-nc/4.0/deed.zh-Hans\" style=\"color: hsl(210deg, 100%, 80%)\">CC BY-NC 4.0 协议</a>，转载须注明署名和出处，且不可用于商业用途。若与其他同步平台协议冲突，以本网站为准。"
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
          "editUrl": "https://github.com/JACK-ZHANG-coming/my-now-blog/blob/main",
          "remarkPlugins": [
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
            "title": "wwwwtao是个前端",
            "copyright": "Copyright © 2022 wwwwtao (文涛) Built with Docusaurus.<p><a href=\"http://beian.miit.gov.cn/\">冀ICP备14007097号-3</a></p>"
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
    "docusaurus2-dotenv",
    [
      "@docusaurus/plugin-content-blog",
      {
        "id": "lifestyle-blog",
        "routeBasePath": "lifestyle",
        "path": "./lifestyle",
        "feedOptions": {
          "type": "all",
          "title": "wwwwtao是个前端",
          "copyright": "Copyright © 2022 wwwwtao (文涛) Built with Docusaurus.<p><a href=\"http://beian.miit.gov.cn/\">冀ICP备14007097号-3</a></p>"
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
    "localeConfigs": {
      "zh-CN": {
        "label": "中文",
        "direction": "ltr"
      },
      "en": {
        "label": "English",
        "direction": "ltr"
      }
    }
  },
  "baseUrlIssueBanner": true,
  "onBrokenLinks": "throw",
  "onBrokenMarkdownLinks": "warn",
  "onDuplicateRoutes": "warn",
  "customFields": {},
  "themes": [],
  "noIndex": false
};