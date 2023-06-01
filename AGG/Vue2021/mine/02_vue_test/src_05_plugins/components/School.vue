<template>
  <div>
    <h3>校名：{{ name }}</h3>
    <h3>地址：{{ address }}</h3>
    <input type="text" v-fbind:value="name">
  </div>
</template>

<script>
export default {
  name: 'School',
  data() {
    return {
      name: '第二小学',
      address: '犀牛陂广场',
    };
  },
};
</script>

<style scoped>

</style>