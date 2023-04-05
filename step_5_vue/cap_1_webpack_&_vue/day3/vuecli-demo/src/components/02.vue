<template>
  <div>
    <a v-bind:href="url">baidu</a>
    <br />
    <img v-bind:src="img1">
    <br />
    <img :src="img2">
  </div>
</template>

<script>
import img2 from '../assets/1.gif';

export default {
  data() {
    return {
      url: 'http://www.baidu.com',
      img1: 'http://yun.itheima.com/Upload/./Images/20210412/60741c11ab77b.jpg',
      img2,
    };
  },
};
</script>