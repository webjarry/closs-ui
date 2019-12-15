<template>
    <div>
        <transition name="topbar" mode="out-in">
            <router-view/>
        </transition>
    </div>
</template>

<script>
    export default {
        name: "Sign"
    }
</script>
