# vue-router

vue-cli3和vue-cli2安装router插件

vue add router  ||  npm install vue-router -S



### 路由传参

- params

- query

  传参形式为： /123?name=david&age=18


### 参数属性传递

​	针对params传参


通过设置props：true，在组件里面来接收参数。


### 嵌套路由

在路由配置里面增加children字段。子路由里面的path不加 ‘/’,‘/’代表是根路径（绝对路径）



### 命名视图

一个组件内部有多个router-view该如何分配组件？比如三栏布局，顶部栏点击按钮，左侧栏的菜单变化



这个命名视图就是给视图添加一个name属性。比如说在App.vue中有两个router-view，一个具名视图，一个匿名视图


然后在routes配置里面把component修改为components为对象


### 导航守卫

- 全局守卫
  - router.beforeEach((to,from,next)=>{})
  - 一般配置在main.js
- 路由独享的守卫
  - 写在路由配置里面
- 组件内的守卫
  - 写在组件内部的

其中里面的beforeRouteEnter不能访问this

其中beforeRouteUpdate要触发就是在同一个组件内，但是参数不同，比如foo/1和foo/2，只能通过按钮跳转来触发  

beforeRouteLeave通常用于表单，如用户写完表单不小心点到别处，可以提醒



### 异步组件

其实是一个要导入函数

```component : import ('./components/PageA')```

这样写的好处就是按需加载。就是只有进入这个组件后，这个组件才会被加载过来。一开始并不会加载这个组件。

也叫懒加载。



### vuex

写好store.js并导出

<!-- ![image-20200606154408961](../assets/image-20200606154408961.png) -->

然后在main.js里面引入并挂载到vue实例上，后面所有组件里面就可以使用this.$store.state等

<!-- ![image-20200606154315667](../assets/image-20200606154315667.png) -->

单项数据流

<!-- ![image-20200606154249575](../assets/image-20200606154249575.png) -->

store.js里面除了state,mutations,anctions,还有getters

### getters

和计算属性computed类似，就是对某一个数据取值前加工。比如

<!-- ![image-20200606154857195](../assets/image-20200606154857195.png) -->

### mapActions

首先要从vuex中结构出来mapActions

```js

import mapActions from 'vuex';
//然后在把组件内操作state的方法有anctions中的方法进行映射
methods:{
    ...mapActions([
        'increment',
        'decrement'
    ])
}
```



### modules

指的是不止有一个store.js文件的情况下

在src下创建一个store文件夹再进去创建一个modules文件夹

列如: modules下面有a.js，b.js和index.js。其中index.js就是用来配置store的，下面是index.js

<!-- ![image-20200606160858165](../assets/image-20200606160858165.png) -->

下面是a.js的内容  b.js内容类似

<!-- ![image-20200606161015572](../assets/image-20200606161015572.png) -->

导出a.js和b.js的时候开启命名空间是为了分清每个模块相同名称的方法。

<!-- ![image-20200606161039131](../assets/image-20200606161039131.png) -->

然后去到main.js引入并挂载。

<!-- ![image-20200606161155055](../assets/image-20200606161155055.png) -->

然后到组件里面的用法就是这样

<!-- ![image-20200606161433697](../assets/image-20200606161433697.png) -->

