<template>
    <div class="cls-views">
        <div class="cls-main">
            <slot></slot>
        </div>
        <transition name="topbar" mode="out-in">
            <cls-tab-bar :bars="tabBarItem" v-if="isBar" v-show="showBar"></cls-tab-bar>
        </transition>
    </div>
</template>

<script>
    import ClsTabBar from "./ClsTabBar";

    export default {
        name: "ClsViews",
        components: {ClsTabBar},
        props: {
            isBar: Boolean,
            tabBarItem: Array
        },
        data() {
            return {
                i: 0,
                showBar: false
            }
        },
        methods: {
            handleScroll: function () {
                let scrollTop = window.pageYOffset || document.documentElement.scrollTop ||
                    document.body.scrollTop, _this = this, scroll = scrollTop - _this.i;

                _this.i = scrollTop;

                if (scroll <= 0 || _this.i <= 80) {
                    _this.showBar = true
                } else {
                    _this.showBar = false
                }

            }
        },
        mounted() {
            window.addEventListener('scroll', this.handleScroll, true);
            setTimeout(() => {this.showBar = true}, 500)
        }
    }
</script>
