## 子项目模版

子项目的最终形态应该只有一个入口文件：`app.js`，也就是未打包前的`main.js`。

子项目是不需要容器 `index.html` 的，它是以路由的形式，"寄生"在父级的 `router-view` 中。

所以，落地到实际的点上，分为开发时和打包后。

## 开发时

我们需要做到与平时独立开发应用无区别、无感知、无侵入、无依赖。所以 

- devServer 必须有且仅有一个，这样才能保持热更新
- 子项目只需关注项目内的需求及文件
- 子项目也能共用全局 `store` 、能跳转到另一个子项目的路由，也就是说 Vue 实例有且仅有一个

当 Vue 实例全局唯一，那么父级所注册的组件、挂载到 `prototype` 上的属性或方法，在运行时 `this` 上都能获取。

## 打包

要做到"去容器"，我们只需在打包时将 `index.html` 及父级依赖去除再打包即可。

## 通过 Vue 插件实现

我们可以通过 [vue-cli-plugin-micro](https://github.com/micro-structure/plugin) 来帮助实现上述功能。

## 子项目开发流程

通过 [micro-structure-cli](https://github.com/micro-structure/cli) 创建子项目

```
# 初始化选择子项目
micro init
```

安装 vue 插件

```
vue add micro
```

启动本地服务

```
npm run serve
```

