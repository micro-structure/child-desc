window.router.addRoutes([
  {
    path: '/',
    name: 'home',
    component: () => import('./views/Home.vue')
  }
])
