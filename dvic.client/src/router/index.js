import Vue from 'vue'
import VueRouter from 'vue-router'
import Projects from '../views/Projects.vue'
import Users from '../views/Users.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Project',
    component: Projects
  },
    {
    path: '/users',
    name: 'Users',
    component: Users
  },

]

const router = new VueRouter({
  routes
})

export default router
