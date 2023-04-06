<template>
  <div>
    <div>{{ arr }}</div>
    <button @click="reverse()">数组反转</button>
  </div>
</template>

<script>
export default {
  name: 'v01',
  data() {
    return {
      arr: [
        1,
        2,
        3,
        4,
      ],
    };
  },
  methods: {
    reverse() {
      this.arr.splice();
    },
  },
};
</script>

<style scoped>

</style>