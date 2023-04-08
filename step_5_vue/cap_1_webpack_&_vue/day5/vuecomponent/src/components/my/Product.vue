<template>
  <div id="pd">
    <h4>{{ title }}</h4>
    <div>{{ price }}</div>
    <div>{{ count }}</div>
    <button @click="sonFn">价格-1</button>
    <button @click="sonFn2">1.列表价格-1</button>
    <button @click="sonFn3">2.列表价格-1</button>
  </div>
</template>

<script>
import eventBus from '@/EventBus';

export default {
  name: 'Product',
  props: [
    'title',
    'price',
    'count',
    'index',
  ],
  methods: {
    sonFn() {
      this.$emit('minusOne', this.index);
    },
    sonFn2() {
      eventBus.$emit('f2', this.index, 1);
    },
    sonFn3() {
      this.$emit('f3', this.index, 1);
    },
  }
};
</script>

<style scoped>
#pd {
  width: 400px;
  border: 2px solid mediumpurple;
  padding: 20px;
  margin: 20px;
  border-radius: 5px;
}
</style>