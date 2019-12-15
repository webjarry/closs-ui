<template>
    <div class="cls-cards">
        <div class="cls-cards-header"></div>

        <div class="cls-card-main">
            <slot></slot>
        </div>

        <div class="cls-card-footer">
            <div class="nav">
                <div class="item" v-for="(item, index) in bar" :key="index">
                    <div class="icon">
                        <img :src="item.icon" alt="" />
                    </div>
                    <div class="text">{{item.title}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ClsCard",
    props: {
        isFooter: {
            type: Boolean,
            default: true
        }
    },
    data () {
        return {
            bar: [
                {
                    id: 0,
                    title: '321',
                    icon: require('../assets/images/bar/like.png')
                },
                {
                    id: 0,
                    title: '55',
                    icon: require('../assets/images/bar/mark.png')
                },
                {
                    id: 0,
                    title: '785',
                    icon: require('../assets/images/bar/light.png')
                }
            ]
        }
    }
}
</script>

<style scoped>

</style>