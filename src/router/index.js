import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ArticlesView from '../views/ArticlesView.vue'

const routes = [
  {
    path: '/:lang?',
    name: 'home',
    component: HomeView
  },
  {
    path: '/:lang?/a-propos',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/:lang?/brochure',
    name: 'brochure',
    component: () => import(/* webpackChunkName: "brochure" */ '../views/BrochureView.vue')
  },
  {
    path: '/:lang?/articles',
    name: 'ArticlesView',
    component: ArticlesView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach((to, from, next) => {
  const defaultLang = 'fr';
  const lang = to.params.lang || defaultLang;
  
  if (!['en', 'fr'].includes(lang)) {
    // Redirect to the default language (English in this case)
    next({ name: to.name, params: { lang: defaultLang } });
  } else {
    next();
  }
});

export default router
