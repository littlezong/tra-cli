# 项目结构

html 传统网页模板，基于`webpack4.x`，默认主要结构为`js`、`style`和`assets`。第三方库建议通过 npm 包的形式引入，也可下载后置于`lib`中引用。项目目录结构如下：

```
src
│
│─ build
│─ dist  (生产)
│─ src   (开发)
│   └─static
│   │    │
│   │    │─ assets (静态资源)
│   │    │─ js
│   │    │─ lib (第三方文件)
│   │    └─ style
│   │
│   └─ index.html
│   └─ test.html
│   └─ ...
│
│─ .postcssrc.js
│─ package.json
│─ README.md
│─ yarn.lock
└─ ...
```

# 支持

- 项目默认配置本地服务地址*localhost*及端口*8008*（可通过`build/config.js`修改）

- 为 src 目录下的所有 html 模板提供热加载功能

- 支持使用 'es6'、'less'、'sass' 的语法

# 安装 && 开始

- 将项目克隆到本地后，通过 `yarn install` 安装依赖

- 完成后执行 `yarn start` 即可看到项目启动。
  默认 [http://localhost:8008]() 对应页面**index.html**

- 新建页面**test.html**，则可通过 [http://localhost:8008/test]() 访问到

# 开发环境

> 通过`yarn start`启动开发环境

在开发环境下，手动引入样式或 js 时，路径忽略 static。例如 test.html：

```html
<!-- ... -->
<body>
<!-- ... -->
<script src="./js/1.js"></script>
</body>
```

同时，如果在 js 中引入(import)样式，则需手动引入与 js 名字一样的样式：

```html
<head>
    <meta charset="utf-8">
    <!-- ... -->
    <link href="./css/1.css" rel="stylesheet" type="text/css" />
</head>
<body>
<!-- ... -->
<script src="./js/1.js"></script>
</body>
```

# 生产环境

> 使用`yarn build`打包项目

项目打包至根目录下的**dist**文件夹中，打包后的文件应该通过服务地址运行，藉由 `file://` 地址直接打开可能会报错。
