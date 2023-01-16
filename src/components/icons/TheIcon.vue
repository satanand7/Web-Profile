<template>
    <i :class="'fa '+ type"></i>
</template>

<script lang="ts">
export default {
   props :['type']
   
}
</script>
<style scoped>
i {
    font-size: 1.2rem;
}
</style>

