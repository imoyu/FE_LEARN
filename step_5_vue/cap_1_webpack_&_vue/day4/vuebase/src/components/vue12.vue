<template>
  <div>
    {{ num }}
  </div>
</template>

<script>
export default {
  name: 'vue12',
  data() {
    return {
      a: 10,
      b: 12,
    };
  },
  computed: {
    num() {
      return this.a + this.b;
    },
  },
};
</script>

<style scoped>

</style>