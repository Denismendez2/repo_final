import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
//import PortfolioSection from '../views/PortfolioSection.vue'
import CategoriasFotosView from '../views/CategoriasFotosView.vue'
import CategoriasVideosView from '../views/CategoriasVideosView.vue'
import ImageCollageView from '../views/ImageCollageView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/Cfotografias',
    name: 'Cfotografias',
    component: CategoriasFotosView
  },
  {
    path: '/Cvideos',
    name: 'Cvideos',
    component: () => import('../views/CategoriasVideosView.vue')
  },
  
  {
  path: '/:category/:subcategory',
  name: 'CollageView',
  component: ImageCollageView,
  props: true
},{
  path: '/Cdrone',
  name: 'dron',
  component: ImageCollageView,
  props: {
    category: 'dron',
    subcategory: null
  }
},


]


const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    }
    return { top: 0 }
  }
})

export default router
