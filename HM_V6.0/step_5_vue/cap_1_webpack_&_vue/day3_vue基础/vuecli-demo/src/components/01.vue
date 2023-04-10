<template>
  <div>
    <h1>{{ id }}</h1>
    <h2>{{ obj.name }}</h2>
    <h3>{{ obj.age }}</h3>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: 'djasoi',
      obj: {
        name: '12ew',
        age: 12354,
      },
    };
  },
};
</script>

<style scoped>

</style>