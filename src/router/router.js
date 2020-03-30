import Vue from 'vue'
import VueRouter from "vue-router";
import Index from '../views/Index';

const routes = [
    {
        path: '/',
        name: 'Index',
        component: Index
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

router.beforeEach((to, from, next) => {
    let AccountToken = localStorage.get('AccountToken');

    !to.meta.isLogin ?
        next()
        : AccountToken !== null && AccountToken.length >= 10
        ? next()
        : window.console.log('请先登录!') && next({name: 'Login'})

});

Vue.use(VueRouter);

export default router