<template>
    <cls-views :is-bar="true" :tab-bar-item="list" class="index-container">
        <cls-cards v-for="(item, index) in 10" :key="index">
            <div class="video-box">
                <video src="https://www.w3school.com.cn/i/movie.ogg"></video>
            </div>

            <div class="tag">
                <div class="tag-item" v-for="(item, index) in 6" :key="index"><span>动漫迷 ></span></div>
            </div>
        </cls-cards>
    </cls-views>
</template>

<script>
    import ClsViews from "../components/ClsViews";
    import ClsCards from "../components/ClsCards";

    export default {
        components: {
            ClsCards,
            ClsViews
        },
        data() {
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
        methods: {
            onSubmit: function () {
            }
        },
        mounted() {

        }
    }
</script>
