import Selection from '../components/Selection.vue'
import Home from '../components/Home.vue'
import Recipe from '../components/Recipe.vue'
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
    component: Home,
    path: '/'
  },
  {
    component: Recipe,
    path: '/recipe'
  },
  {
    component: Selection,
    path: '/selection'
  },
]

const router = new VueRouter({
  routes,
  linkExactActiveClass: "is-active" /* <<< Visar vilken sida man är inne på i navbaren. Exact-delen behövs för att inte Home är ifylld hela tiden. */
})

export default router