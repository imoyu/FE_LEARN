<template>
  <div>
    <p v-text="msg"></p>
    <p v-html="msg">30</p>
  </div>
</template>

<script>
export default {
  name: 'vue10',
  data() {
    return {
      msg: '<span>我是一个span</span>',
    };
  },
};
</script>

<style scoped>

</style>