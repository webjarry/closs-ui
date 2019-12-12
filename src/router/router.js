import Vue from 'vue'
import VueRouter from "vue-router";
import Index from '../views/Index'
import Sign from '../views/Sign'
import Register from "../views/sign/Register";

const Login = () => import( '../views/sign/Login.vue' );

const routes = [
    {
        path: '/',
        name: 'Index',
        component: Index
    },
    {
        path: '/sign',
        redirect: {
            name: 'Login'
        },
        component: Sign,
        children: [
            {
                path: '/sign/login',
                name: 'Login',
                component: Login
            },
            {
                path: '/sign/register',
                name: 'Register',
                component: Register
            }
        ]
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

/*
    router.beforeEach((to, from, next) => {
        let AccountToken = storage.get('AccountToken');

        !to.meta.isLogin ?
            next() : AccountToken !== null && AccountToken.length >= 10 ?
            next() : Toast.fail('请先登录!') && next({name: 'Login'})

    });
 */

Vue.use(VueRouter);

export default router