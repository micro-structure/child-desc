// import Vue from 'vue'
// import Router from 'vue-router'
import Home from './views/Home.vue'

// Vue.use(VueRouter)

// const router = new VueRouter({
//   routes: [
//   ]
// })

// console.log(window.router)
router.addRoutes([
  {
    path: '/',
    name: 'home2',
    component: Home
  }
])
// export default router