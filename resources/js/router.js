import VueRouter from 'vue-router';
import store from './store';

const routes = [{
    path: '*',
    component: () => import ("./views/NotFound.vue"),
  },
  {
    path: '/',
    component: () => import ("./views/activity/Index.vue"),
    meta: {requiresAuth: true },
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
    meta: {requiresAuth: true },
  },
  {
    path: '/activity/edit/:id',
    component: () => import ("./views/activity/Edit.vue"),
    meta: {requiresAuth: true },
  },
  {
    path: '/activity/show/:id',
    component: () => import ("./views/activity/Show.vue"),
    meta: {requiresAuth: true },
  },
  {
    path: '/activity/search/:date',
    component: () => import ("./views/activity/Search.vue"),
    meta: {requiresAuth: true },
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  const token = store.state.token;
  const requiresAuth = to.matched.some(route => route.meta.requiresAuth);
  
  if (token && !requiresAuth) next('/');
  if (!token && requiresAuth) next('/login')
  else next();
});

export default router