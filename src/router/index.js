import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import MeTree from '@/views/MeTree.vue'
import MeTreeAbout from '@/components/metree/MeTreeAbout.vue'
import Learning from '@/components/metree/Learning.vue'
import JobExperience from '@/components/metree/JobExperience.vue'
import Moving from '@/components/metree/Moving';
import Qualification from "@/components/metree/Qualification";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/metree',
    name: 'MeTree',
    component: MeTree,
    children: [
      {
        path: '',
        name: 'MeTreeAbout',
        component: MeTreeAbout
      },
      {
        path: '/moving',
        name: 'Moving',
        component: Moving
      },
      {
        path: '/learning',
        name: 'Learning',
        component: Learning
      },
      {
        path: '/jobexperience',
        name: 'JobExperience',
        component: JobExperience
      },
      {
        path: '/qualification',
        name: 'Qualification',
        component: Qualification
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/todolist',
    name: 'TodoList',
    component: () => import(/* webpackChunkName: "todolist" */ '../views/TodoList.vue')
  },
  {
    path: '/titledscarf',
    name: 'TitledScarf',
    component: () => import(/* webpackChunkName: "titledscarf" */ '../views/TitledScarf.vue')
  },
  {
    path: '/webclock',
    name: 'WebClock',
    component: () => import(/* webpackChunkName: "webclock" */ '../views/WebClock.vue')
  }
]

const router = new VueRouter({
  mode: "history",
  routes
})

export default router
