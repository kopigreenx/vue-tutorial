import Vue from 'vue';
import Router from 'vue-router'
import store from './store.js';
import About from './views/About.vue'
import Home from './views/Home.vue'
import Todo from './views/Todo.vue'
import Login from './views/Login.vue'

Vue.use(Router);

const router = new Router({
    mode:'history',
    routes:[
        {
            path: '/',
            component: Home,
            meta: {
                requiresAuth: false
            }
        },
        {
            path : '/About',
            component: About,
            meta: {
                requiresAuth: false
            }
        },
        {
            path : '/Todo',
            component: Todo,
            meta: {
                requiresAuth: true
            }
        },
        {
            path : '/Login',
            component: Login,
            meta: {
                requiresAuth: false
            }
        }
    ]
})

router.beforeEach((to,from,next) => {
    if(to.matched.some(record => record.meta.requiresAuth)){
        if (store.getters.isLoggedIn) {
            next()
            return     
        }
        next('/login')
    }else{
        next()
    }
})

export default router;