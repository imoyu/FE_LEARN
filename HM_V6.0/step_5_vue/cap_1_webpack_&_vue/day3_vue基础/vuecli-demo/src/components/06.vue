<template>
  <div>
    <input @keydown.a="f">
  </div>
</template>

<script>
export default {
  methods: {
    f(e) {
      console.log('aa');
      console.log(e);
    },
  },
};
</script>

<style scoped>

</style>