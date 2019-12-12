<template>
    <div class="cls-bar-box" v-x>
        <div class="cls-bar cls-radius--style">
            <div class="cls-bar-item">
                <div class="item cls-radius--style" v-for="(item, index) in bars" :key="index" @click="onGotoPage(item.path)">
                    <div class="item-icon">
                        <img :src="item.icon" alt="">
                    </div>
                    <div class="item-text">
                        <span>{{item.title}}</span>
                    </div>
                </div>
            </div>
            <div class="cls-bar-blur cls-radius--style"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ClsTabBar",
        props: {
            bars: {
                type: Array
            }
        },
        methods: {
            onGotoPage: function (path) {
                this.$router.replace(path)
            }
        }
    }
</script>
