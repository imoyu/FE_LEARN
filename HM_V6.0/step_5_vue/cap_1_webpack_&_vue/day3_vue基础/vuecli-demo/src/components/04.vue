<template>
  <div>
    <a @click="f()" href="http://www.baidu.com">baidu1</a>
    <br>
    <a @click="f($event)" href="http://www.baidu.com">baidu2</a>
  </div>
</template>

<script>
export default {
  methods: {
    // 有其它参数时需要手动传 e
    f(e) {
      e.preventDefault();
    },
  }
};
</script>

<style scoped>

</style>