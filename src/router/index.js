import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue' 
import AboutView from '../views/AboutView.vue'
import CategoriasFotosView from '../views/CategoriasFotosView.vue'
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
    path: '/ImageCollage',
    name: 'ImageCollage',
    component: ImageCollageView
  }

  
]

const router = createRouter({
  history: createWebHistory(), 
  routes
})

export default router