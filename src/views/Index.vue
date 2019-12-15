<template>
    <cls-views :is-bar="true" :tab-bar-item="list" class="index-container">
        <cls-button>这里是一个按钮</cls-button>
        <cls-cards v-for="(item, index) in 10" :key="index">
            <h1>这是一段标题.....</h1>
            <h2>这是一段标题.....</h2>
            <h3>这是一段标题.....</h3>
            <h4>这是一段标题.....</h4>
            <h5>这是一段标题.....</h5>
            <h6>这是一段标题.....</h6>
        </cls-cards>
    </cls-views>
</template>

<script>
    import ClsViews from "../components/ClsViews";
    import ClsButton from "../components/ClsButton";
    import ClsCards from "../components/ClsCards";

    export default {
        components: {
            ClsCards,
            ClsViews,
            ClsButton
        },
        data () {
            return {
                list: [
                    {
                        id: 0,
                        title: '首页',
                        path: '/',
                        icon: require('../assets/images/message_unread.png'),
                        selectIcon: ''
                    },
                    {
                        id: 0,
                        title: '社交',
                        path: '/sign/register',
                        icon: require('../assets/images/partner.png'),
                        selectIcon: ''
                    },
                    {
                        id: 0,
                        title: '发现',
                        path: '/sign/login',
                        icon: require('../assets/images/international.png'),
                        selectIcon: ''
                    }
                ]
            }
        },
        mounted () {
        }
    }
</script>
