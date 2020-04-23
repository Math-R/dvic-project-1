import Vue from 'vue'
import VueRouter from 'vue-router'
import Projects from '../views/Projects.vue'
import Project from '../views/Project.vue'
import Users from '../views/Users.vue'
import User from '../views/User.vue'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/projects',
        name: 'Projects',
        component: Projects
    },
    {
        path: '/projects/:id',
        name: 'Project',
        component: Project,
        props: (route) => ({id: route.params.id})
    },
    {
        path: '/users',
        name: 'Users',
        component: Users,
    },
    {
        path: '/users/:id',
        name: 'User',
        component: User,
        props: (route) => ({id: route.params.id})
    },

]

const router = new VueRouter({
    routes
})

export default router
