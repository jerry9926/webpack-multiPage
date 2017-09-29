# webpack多页应用种子项目

该项目目的在于创建一个基于webpack多页面应用时，可以基于这个项目快速开发。

##目录结构
├─ dist             存放打包后代码
├─ gulpfile.js
├─ node_modules
├─ package.json
├─ README.md
├─ src              存放源代码
├─ src/demo-01.html 模版文件
├─ src/js           js文件
├─ src/js/components    js的模块文件夹
├─ src/js/components/aComponent     某个js模块
├─ src/js/components/aComponent/a.js
├─ src/js/pages     js的页面逻辑文件夹
├─ src/js/pages/demo-01.js          某个js页面逻辑
└─ webpack.config.js

##注意点
- 本项目中，以pages里面的js文件集合为入口。一个模版文件对应一个js页面逻辑文件，并且html模版名与js名一一对应。
- dist不受代码版本工具管理，如有需要，手动创建。
