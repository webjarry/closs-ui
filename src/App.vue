<template>
    <div id="app">
        <transition name="topbar" mode="out-in">
            <router-view/>
        </transition>
    </div>
</template>

<script>
export default {
  name: 'app',
  components: {
  }
}
</script>
