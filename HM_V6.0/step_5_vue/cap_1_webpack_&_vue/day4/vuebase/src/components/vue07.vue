<template>
  <div>{{ msg | f1 | f2 }}</div>
</template>

<script>
export default {
  name: 'vue07',
  data() {
    return {
      msg: 'das cx ccs',
    };
  },
  filters: {
    f1(s) {
      return s.split(' ').reverse().join(' ');
    },
    f2(s) {
      return `[ ${s} ]`;
    },
  },
};
</script>

<style scoped>

</style>