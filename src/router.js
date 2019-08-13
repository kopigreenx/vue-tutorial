import Vue from 'vue';
import Router from 'vue-router'

import About from './views/About.vue'
import Home from './views/Home.vue'
import Todo from './views/Todo.vue'

Vue.use(Router);

export default new Router({
    mode:'history',
    routes:[
        {
            path: '/',
            component: Home
        },
        {
            path : '/About',
            component: About
        },
        {
            path : '/Todo',
            component: Todo
        }
    ]
})