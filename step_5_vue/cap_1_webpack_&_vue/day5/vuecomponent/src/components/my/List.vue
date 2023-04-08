<template>
  <div>
    <!--  f3接收不到，因为f3不是绑定在触发对象 Product 上，需要使用一个中间对象 eventBus  -->
    <ul @f3="fn3">
      <li v-for="(obj, index) in arr" :key="index">
        {{ obj.title }}  {{ obj.price }}元/千克
      </li>
    </ul>
    <div>price[0]: {{ price }}</div>
    <button @click="fn4">-1</button>
    <button @click="fn5">price[0] -1</button>
  </div>
</template>

<script>
import eventBus from '@/EventBus';

export default {
  name: 'List',
  props: ['arr', 'price'],
  created() {
    eventBus.$on('f2', (index, num) => {
      this.arr[index].price -= num;
    });
  },
  methods: {
    fn3(index, num) {
      this.arr[index].price -= num;
    },
    fn4() {
      // 这里传递的是一个列表，子组件改变，父组件也会改变
      this.arr[0].price -= 1;
    },
    fn5() {
      // 传值的话子组件改变，父组件不改变，需要改变父组件的值
      this.price -= 1;
    },
  }
};
</script>

<style scoped>
ul {
  width: 400px;
  padding: 20px;
  border: 2px solid #000;
  border-radius: 5px;
  margin: 10px;
}
</style>