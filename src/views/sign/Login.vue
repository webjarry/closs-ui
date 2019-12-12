<template>
    <cls-views :is-bar="true" :tab-bar-item="list" class="login-container">
        <div class="cls-card" v-for="(item, index) in 12" :key="index"></div>
    </cls-views>
</template>

<script>
    import ClsViews from "../../components/ClsViews";

    export default {
        name: "Login",
        components: {
            ClsViews
        },
        data() {
            return {
                list: [
                    {
                        id: 0,
                        title: '首页',
                        path: '/',
                        icon: require('../../assets/images/message_unread.png'),
                        selectIcon: ''
                    },
                    {
                        id: 0,
                        title: '社交',
                        path: '/sign/register',
                        icon: require('../../assets/images/partner.png'),
                        selectIcon: ''
                    },
                    {
                        id: 0,
                        title: '发现',
                        path: '/sign/login',
                        icon: require('../../assets/images/international.png'),
                        selectIcon: ''
                    }
                ]
            }
        }
    }
</script>
