<template>
    <div class="cls-button cls-radius--style primary--color">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "ClsButton",
        props: {
            msg: String
        }
    }
</script>
