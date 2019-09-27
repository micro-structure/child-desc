// import Vue from 'vue'
// import Router from 'vue-router'
import Home from './views/Home.vue'

// Vue.use(VueRouter)

<<<<<<< HEAD
// const router = new VueRouter({
//   routes: [
//   ]
// })
=======
const router = window.router = new VueRouter({
  routes: [
  ]
})
>>>>>>> 0edfe452eeaf0d10c3be6879d7567523080567cc

// console.log(window.router)
router.addRoutes([
  {
    path: '/',
    name: 'home2',
    component: Home
  }
])
// export default router