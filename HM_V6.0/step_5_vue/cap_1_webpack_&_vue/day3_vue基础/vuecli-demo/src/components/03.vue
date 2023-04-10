<template>
  <div>
    <p>{{ number }}</p>
    <button v-on:click="number = number + 1">+1</button>
    <button @click="addOne">+1</button>
    <button @click="add(5)">+5</button>
    <button @click="number = number - 1">-1</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      number: 60,
    };
  },
  methods: {
    addOne() {
      // this 指的是当前的 Vue 组件，data 里的数值会被添加到组件中去
      this.number++;
    },
    add(n) {
      this.number += 5;
    },
  },
};
</script>

<style scoped>

</style>