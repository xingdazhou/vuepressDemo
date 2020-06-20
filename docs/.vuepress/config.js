module.exports = {
    title: '阿达同学的博客', // 页签标题 : A001_VuePress博客搭建的简单教程&问题分析 
    description: '阿达同学的博客,用于写一下笔记和好的文章   ', // meta 中的描述文字，意义不大，SEO用
    // 注入到当前页面的 HTML <head> 中的标签
    head: [
        // 增加一个自定义的 favicon(网页标签的图标)
        // 这里的 '/' 指向 docs/.vuepress/public 文件目录 
        // 即 docs/.vuepress/public/img/geass-bg.ico
        // ['link', {
        //     rel: 'icon',
        //     href: '/Z.jpg'
        // }],
        ['link', {
            rel: 'manifest',
            href: '/Z.jpg'
        }],
        ['link', {
            rel: 'apple-touch-icon',
            href: '/Z.jpg'
        }]

    ],
    
    base: '/xingdazhou/', // 这是部署到github相关的配置
    markdown: {
        lineNumbers: true // 代码块显示行号
    },
    serviceWorker: true, // 是否开启 PWA
    themeConfig: {
        logo: '/img/Z.jpg',
        sidebarDepth: 1, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
        lastUpdated: 'Last Updated', // 文档更新时间：每个文件git最后提交的时间,
        // 顶部导航栏
        nav: [
            // 单项 text：显示文字，link：指向链接
            // 这里的'/' 指的是 docs文件夹路径
            // [以 '/' 结尾的默认指向该路径下README.md文件]
            {
                text: '首页',
                link: '/'
            },
            {
                text: '前端',
                // link: '/front-end/'
                link: '/front-end/'
            }, // http://localhost:8080/Wiki1001Pro/FAQ/
            {
                text: '后端',
                link: '/back-end/'
            },
            {
                text: '算法',
                link: '/algorithm/'
            },
            {
                text: '小程序',
                link: '/applet/'
            },
            {
                text: '网络',
                link: '/internet/'
            },
            {
                text: '新技术',
                items: [{
                        text: "flutter",
                        link: '/flutter/'
                    },
                    {
                        text: "pwa",
                        link: '/pwa/'
                    }
                ]

            },
            // { text: '探索', link: '/Thought/' },
            // 多项，下拉形式

            {
                text: 'GitHub',
                items: [{
                        text: 'GitHub首页',
                        link: 'https://github.com/Mulander-J'
                    },
                    {
                        text: 'Island',
                        link: 'https://mulander-j.github.io/island/code/html/index.html'
                    },
                    {
                        text: 'TimeWaster',
                        link: 'https://mulander-j.github.io/timeWaster/demo/index.html#/'
                    },
                ]
            },
        ],
        sidebar: {
            '/front-end/': [
                ['', '首页'],
                {
                    title: "html",
                    children: [ //html 写笔记在这里
                        ['/front-end/html/主流浏览器', '主流浏览器'],
                        ['/front-end/html/域名解析', '域名解析'],
                        ['/front-end/html/图片', '图片'],
                        ['/front-end/html/a元素', 'a元素'],
                    ]
                },
                {
                    title: "css",
                    children: [ //html 写笔记在这里
                        ['/front-end/css/布局', '布局'],
                        ['/front-end/css/堆叠上下文', '堆叠上下文'],
                        ['/front-end/css/二级菜单', '二级菜单'],
                        ['/front-end/css/盒模型', '盒模型'],
                        ['/front-end/css/盒模型的应用', '盒模型的应用'],
                        ['/front-end/css/居中总结', '居中总结'],
                        ['/front-end/css/属性值的计算过程', '属性值的计算过程'],
                        ['/front-end/css/行盒盒模型', '行盒盒模型'],
                        ['/front-end/css/BFC', 'BFC'],
                        ['/front-end/css/css术语及概念', 'css术语及概念'],
                    ]
                },
                {
                    title: "js",
                    children: [ //html 写笔记在这里
                        ['/front-end/js/模仿实现instanceof', '模仿实现instanceof'],
                        ['/front-end/js/事件循环EvenLoop', '事件循环EvenLoop'],
                        ['/front-end/js/手写call和apply', '手写call和apply'],
                        ['/front-end/js/属性描述符', '属性描述符'],
                        ['/front-end/js/数组去重', '数组去重'],
                        ['/front-end/js/数组转对象', '数组转对象'],
                        ['/front-end/js/引用值问题', '引用值问题'],
                        ['/front-end/js/原型链应用', '原型链应用'],
                        ['/front-end/js/执行上下文', '执行上下文'],
                        ['/front-end/js/作用域链', '作用域链'],
                        ['/front-end/js/作用域与闭包', '作用域与闭包'],
                    ]
                },
                {
                    title: "html5",
                    children: [ //html 写笔记在这里
                        ['/front-end/html5/语义化', '语义化']
                    ]
                },
                {
                    title: "css3",
                    children: [ //html 写笔记在这里
                        // ['/front-end/css3/闭包','闭包']
                    ]
                },
                {
                    title: "es6",
                    children: []
                }
            ],

            '/back-end/': [
                ['', '后端相关知识点'],
                {
                    title: "node基础",
                    children: [ //html 写笔记在这里
                        ['/back-end/node基础', 'node基础'],
                        ['/back-end/后端允许跨域', '后端允许跨域'],
                        ['/back-end/网络编程', '网络编程'],
                    ]
                },
                {
                    title: "koa",
                    children: [ //html 写笔记在这里
                        ['/back-end/KOA-鉴权', 'KOA鉴权']
                    ]
                },
                {
                    title: "数据库",
                    children: []
                },
            ],

            '/vue/': [
                ['', 'vue源码解析'],
                {
                    title: 'vue基础',
                    children: [
                        ['/vue/key属性', 'key属性'],
                        ['/vue/阿里云配置环境', '阿里云配置环境']
                    ]
                },
                {
                    title: 'vue底层',
                    children: [
                        ['/vue/vue核心', 'vue核心'],
                        ['/vue/vue最佳实践', 'vue最佳实践'],
                        ['/vue/vue服务端渲染', 'vue服务端渲染'],
                        ['/vue/vue-router', 'vue-router']
                    ]
                }
            ],
            '/applet/': [
                ['', '小程序开发入门'],
                {
                    title: '小程序',
                    children: [
                        ['/applet/小程序语法', '小程序语法']

                    ]
                }

            ],
            '/internet/': [
                ['', '网络协议及网络安全'],
                {
                    title: '网络安全',
                    children: [
                        ['/internet/常见的web攻击', '常见的web攻击'],
                        ['/inernet/前端性能优化', '前端性能优化']
                    ]
                }
            ]

        },
    },
}