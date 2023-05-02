<template>
  <div>
    <h3>姓名：{{ name }}</h3>
    <h3>年龄：{{ age }}</h3>
  </div>
</template>

<script>
export default {
  name: 'Student',
  data() {
    return {
      name: 'Jaeger',
      age: 15,
    };
  }
};
</script>

<style scoped>

</style>