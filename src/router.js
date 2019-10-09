import Home from './views/Home.vue'

// todo
// 目前有个问题，即开发阶段，不能使用按需引入，因为待加载的模块 devServer 不同
// 打包后的按需引入还必须要保证子项目之间 webpackChunkName: '' 不被重复冲突

window.router.addRoutes([
  {
    path: '/',
    name: 'home',
    // component: () => import('./views/Home.vue')
    component: Home
  }
])
