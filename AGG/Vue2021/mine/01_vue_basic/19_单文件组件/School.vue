<template>
  <div>
    <h2>校名：{{ name }}</h2>
    <student></student>
  </div>
</template>

<script>
import Student from './Student.vue';

export default {
  name: 'School',
  components: {
    Student,
  },
  data() {
    return {
      name: '第一中学',
    };
  },
};
</script>

<style scoped>

</style>