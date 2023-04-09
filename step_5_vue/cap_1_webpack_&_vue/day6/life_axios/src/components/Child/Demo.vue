<template>
  <div>
    <p>我是Demo组件</p>
  </div>
</template>

<script>
export default {
  methods: {
    fn() {
      console.log('demo组件内的方法被调用了');
    },
    data() {
      return {
        aaa: 1234556,
        dshj: 'dsadfasd ',
      };
    },
  },
};
</script>

<style>

</style>