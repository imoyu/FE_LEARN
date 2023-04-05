<template>
  <input v-model.lazy.trim="msg">
</template>

<script>
export default {
  name: 'vue09',
  data() {
    return {
      msg: ''
    }
  },
};
</script>

<style scoped>

</style>