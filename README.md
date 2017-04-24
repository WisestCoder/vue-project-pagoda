# vue+webpack项目开发——百果园

## 作者：杜少

## 项目展示地址：[http://www.takozhang.cn/vue-project-pagoda/#!/](http://www.takozhang.cn/vue-project-pagoda/#!/)

## 更多资料详情请咨询本人[博客](http://www.takozhang.cn)

自从vue退出之后，有越来越多的项目在使用 vue。这些项目里面，有桌面端，也有移动端，有面向用户的，也有后台系统。实践方案的话，`vue + webpack + vue-router + vue-resource。`

__相比angular，vue有很多优点:__

* 在 API 与设计两方面上 Vue.js 都比 Angular 简单得多，因此你可以快速地掌握它的全部特性并投入开发。

* Vue.js 有更好的性能，并且非常非常容易优化

就我个人而言，vue 的开发体验还是比较愉悦的。首先，文档非常友好，所以上手会比较快。其次，配合 webpack 和 vue-loader，每个页面都是一个 .vue 文件，写起来很方便。另外，适合做组件化开发（每个组件也是一个 .vue 文件，可以全局或者在需要的地方引入），如果遇到比较复杂的、父子组件间需要频繁通信的场景，可以用 vuex 搞定。

### 以下是我在工作过程中自己设计的一个小项目

#### 1、项目搭建环境

* 本项目主要使用`vue + webpack + vue-router + vue-resource`搭建

####2、项目运行环境

* node环境下使用`git clone https://github.com/dushao103500/vue-project-pagoda.git` 将文件下载至本地，并在目录的上一层启动服务，端口默认为80

####3、项目主要内容（本项目主要有7个页面）

* 引导页 [http://www.takozhang.cn/vue-project-pagoda/#!/](http://www.takozhang.cn/vue-project-pagoda/#!/)
 
引导页主要使用了swiper框架进行图片轮播

![](http://oe51jhwvd.bkt.clouddn.com/vue01.jpg) 

* 主页面 [http://www.takozhang.cn/vue-project-pagoda/#!/index](http://www.takozhang.cn/vue-project-pagoda/#!/index)

主页面主要使用了iscroll来实现滑动，轮播图主要使用swiper，主页面的数据实用的mock数据

![](http://oe51jhwvd.bkt.clouddn.com/vue02.jpg)

* 列表页 [http://www.takozhang.cn/vue-project-pagoda/#!/index/list](http://www.takozhang.cn/vue-project-pagoda/#!/index/list)

列表页的数据采用的是mock数据，使用iscroll来实现滑动，类别的切换主要采用数据过滤,列表页通过路由传递参数从而链接至详情页

![](http://oe51jhwvd.bkt.clouddn.com/vue03.jpg)

* 详情页 [http://www.takozhang.cn/vue-project-pagoda/#!/index/detail/0101](http://www.takozhang.cn/vue-project-pagoda/#!/index/detail/0101)

详情页通过接受传过来的参数，再利用vue-resource插件的XMLHttpRequest来请求数据，详情页的加入购物车功能主要是采用localstorage进行本地存储

![](http://oe51jhwvd.bkt.clouddn.com/vue04.jpg)

* 购物车页 [http://www.takozhang.cn/vue-project-pagoda/#!/index/shoppingCart](http://www.takozhang.cn/vue-project-pagoda/#!/index/shoppingCart)

购物车使用了iscroll来实现页面的滑动，主要使用了localstorage来获取数据，并通过双向绑定来实现数据的增删

![](http://oe51jhwvd.bkt.clouddn.com/vue05.jpg)

* 个人信息页 [http://www.takozhang.cn/vue-project-pagoda/#!/index/my](http://www.takozhang.cn/vue-project-pagoda/#!/index/my)

个人信息主要使用localstorage来进行存储，并通过判断localstorage中的数据来进行页面的渲染

![](http://oe51jhwvd.bkt.clouddn.com/vue07.jpg)

* 登录页 [http://www.takozhang.cn/vue-project-pagoda/#!/login](http://www.takozhang.cn/vue-project-pagoda/#!/login)

登录页的状态、数据管理还是通过localstorage来进行存储

![](http://oe51jhwvd.bkt.clouddn.com/vue06.jpg)

###个人总结
本项目做的比较粗糙，可能跟时间太急有关系，很多数据都没有使用交互，很多功能没有实现，比如主页的下拉刷新，登录页面的弹出层等等，日后完善！


