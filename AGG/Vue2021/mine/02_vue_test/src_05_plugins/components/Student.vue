<template>
  <div>
    <h4>姓名：{{ name }}</h4>
    <h4>年龄：{{ age }}</h4>
    <button @click="test">测试 hello</button>
  </div>
</template>

<script>
export default {
  name: 'Student',
  data() {
    return {
      name: 'John',
      age: 11,
    };
  },
  methods: {
    test() {
      this.hello();
    },
  }
};
</script>

<style scoped>

</style>