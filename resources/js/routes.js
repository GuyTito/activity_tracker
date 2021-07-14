export default {
  mode: "history",
  routes: [
    {
      path: '*',
      component: () => import ("./views/NotFound.vue"),
    },
    {
      path: '/',
      component: () => import ("./views/activity/Index.vue"),
      name: 'home'
    },
    {
      path: '/register',
      component: () => import ("./views/Register.vue"),
    },
    {
      path: '/login',
      component: () => import ("./views/Login.vue"),
    },
    {
      path: '/activity/create',
      component: () => import ("./views/activity/Create.vue"),
    },
    {
      path: '/activity/edit/:id',
      component: () => import ("./views/activity/Edit.vue"),
    },
    {
      path: '/activity/show/:id',
      component: () => import ("./views/activity/Show.vue"),
    },
  ]
}