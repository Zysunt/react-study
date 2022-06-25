#### 开发流程

```js
npm i -g yarn // 全局安装yarn
yarn -v // 查看yarn版本号 1.22.19
// cd react项目目录
yarn init -y //  初始化项目
yarn add -D create-react-app // 使用本地安装
npx create-react-app --version// 查看本地版本
// 5.0.1
npx create-react-app react-demo// 创建react-demo项目

// 安装props校验
yarn add -D prop-types

// 安装路由
yarn add -D react-router-dom
// "react-router-dom": "^6.3.0" package.json查看是否安装成功
// 安装 渲染路由的方法
yarn add -D react-router-config 
// "react-router-config": "^5.1.1", 引入渲染路由的方法  react-router-dom的版本要跟这里适配都用5.+
yarn add -D react-router-dom@5
// 使用：
// index.js BrowserRouter history模式 HashRouter hash模式 路由可以通过as起别名
import { BrowserRouter as Routes } from 'react-router-dom'
<Routes>
<App />
</Routes> 
// nav.js或者其他需要用路由的地方比如ui下的index.js集中管理路由
import { Link, withRouter } from 'react-router-dom'
<Link to={key}>{label}</Link>// 或者
props.history.push(e.key)
// 路由集中管理
// router文件配置数据
import routes from './router/' // 引入全局配置的路由规则
import { renderRoutes } from 'react-router-config' // 引入渲染路由的方法
{renderRoutes(routes)}// 渲染
// 路由跳转的页面props里就有路由信息，普通组件渲染没有路由信息，需要用到withRouter，比如nav组件如下调整
export default withRouter(Nav)// withRouter让Nav组件传入props （history，location，match，staticContext）
// 1、Route用于路径的匹配(用于定义组件和路径的映射关系,相当于一个占位符,在哪里占位就在哪里渲染)
// 2、path属性：用于设置匹配到的路径
// 3、component: 用于匹配带的路径渲染组件
// 4、exact 精确匹配 比如/ 和/home /user 可以防止/user的时候/ 也展示
// 路由传参
// 动态路由：路由中的路径并不固定,那么我们可以path在route匹配的时候写成/user/:id,这种时候获取参数使用this.props.match.params
// 如果是比较复杂的数据,比如'/userinfo?name=casey&age=18'这种时候需要使用location中的search获取,并且需要下载安装query-string进行处理,这个方法React已经不推荐了。
// cnpm i -D query-string
// 所以这种复杂数据的传参我们可以在Link to中直接传入一个对象

// 路由的集中管理
// 到这里我们会感觉React的路由没有Vue路由好用,因为在我们Vue中路由是集中管理的,但是其实在React中也是可以对路由进行集中管理的。需要用到react-router-cofig

yarn add -D events
// 兄弟组件中,使用eventbus事件总线进行通信,采用发布-订阅event bus进行 "events": "^3.3.0",

// 这个版本可以直接使用scss，不需要配置webpack
// 安装node-sass "node-sass": "^7.0.1",
yarn add -D node-sass

// 安装axios "axios": "^0.27.2",
yarn add -D axios



```
#### 全局安装create-react-app

```js
npm i -g create-react-app // 全局安装
create-react-app --version  // 查看版本号
create-react-app react-demo // 初始化项目
```


### 项目的ui框架选的是Antdesign

```js
yarn add antd//  "antd": "^4.21.3",
// https://ant.design/index-cn 官网地址
// 修改 src/App.css，在文件顶部引入 antd/dist/antd.css。
@import '~antd/dist/antd.css';

// 通常需要优化，按需引入更好，打包体积更小，官网说比如无法进行主题配置

// 使用craco "@craco/craco": "^6.4.3",
yarn add @craco/craco
yarn add -D babel-plugin-import// 配置按需引入设置 "babel-plugin-import": "^1.13.5",
// 创建craco.config.js 配置如下
module.exports = {
    babel: {
        plugins: [
            [
                "import",
                {
                    "libraryName": "antd",
                    "libraryDirectory": "es",
                    "style": "css" // 设置为true默认是less
                }
            ]
        ]
    }
}
// 注释或者去掉 @import '~antd/dist/antd.css'; 重启项目

/* package.json */
"scripts": {
-   "start": "react-scripts start",
-   "build": "react-scripts build",
-   "test": "react-scripts test",
+   "start": "craco start",
+   "build": "craco build",
+   "test": "craco test",
}

// 使用图标，需要先安装  "@ant-design/icons": "^4.7.0",
yarn add -D @ant-design/icons

```

### mock数据
```
// mock文件下
yarn init -y// 创建package.json
yarn add koa -D // 下载koa 基于nodejs的web开发框架 优雅、简洁、表达力强、自由度高 官网 https://koa.bootcss.com/
yarn add koa-router -D
yarn add mockjs -D

```

### redux
存储状态state的容器 可预测的状态管理 主要是用来做组件通信的
之前兄弟组件，子孙等组件，传值很麻烦，通过props或者eventbus，context等
业务场景需要涉及到不同层次的组件进行组件通信时，用redux
使用Redux的五步骤为：
1、创建一个对象,作为状态state
2、创建Store存储state
3、通过action来修改state
4、修改reducer中的处理代码(reducer 纯函数：一个函数的返回结果只依赖于它的参数,并且在执行过程里面没有副作用)
5、可以在派发action之前,监听store的变化
```js
yarn add redux -D // 或者 npm i redux -D
// "redux": "^4.2.0"

// index.js的内容
const redux = require('redux')
// redux有三大块：store、action、reducer

const initState = {
    count: 0
}

// 3、reduce 是去连接store和action的
const reducer = (state=initState, action) => {
    switch(action.type) {
        case 'INCREMENT': 
            return {...state, count: state.count + 1}
        // 如果没有匹配到任何的action就直接返回state
        default:
            return state
    }
}

// 1、store 保存状态,创建一个store对象即可
const store = redux.createStore(reducer)


// 2、action 是用来修改store的
const action = { type: 'INCREMENT' }

// 5、在派发action之前可以订阅store的修改,监听store的变化
store.subscribe(() => {
    console.log('store被修改了')
    console.log(`count: ${store.getState().count}`) // count: 1
})

// 4、派发action
store.dispatch(action)

// redux的三大原则
// 1. 单一数据源
//    整个应用程序的state被存储在一颗object tree 中，并且这个object tree只存储在一个store中,
//    单一的数据源可以让整个应用程序的state变得很方便去维护、追踪、修改
// 2. state是只读的
//    唯一修改的state的方法是：触发action，不用试图在其他地方通过其他的方式来修改state
//    可以保证所有的修改都被集中处理，并且严格按照顺序来执行
// 3. 使用纯函数来执行修改
//    通过reducer将state和action联系在一起，并且返回一个新的state

```
#### React-redux
用Provider包括根组件，这样就能让所有的子组件都能拿到store中的数据
```js
yarn add react-redux -D //cnpm i -D react-redux
```
### 中间件
redux推荐的网络请求的中间件是redux-thunk,这个中间件的目的就是在dispatch和action最终到达reducer之间扩展一些代码
```cmd
yarn add -D redux-thunk
```

### 防止浏览器警告
```
// 没有添加被动事件监听器来阻止'whell’事件，请考虑添加事件管理者’passive’
yarn add default-passive-events -S
// index.js
import 'default-passive-events'
```

#### 组件化侧重UI布局，模块化侧重功能设计

### 运行
`npm start`或者`yarn start`


### `npm test`


### `npm run build`


### `npm run eject` 不常用

**Note: this is a one-way operation. Once you `eject`, you can't go back!**


### `npm run build` fails to minify

git push https://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@github.com/Zysunt/react-study.git
