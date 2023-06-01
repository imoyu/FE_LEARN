<template>
  <div>
    <school></school>
    <hr>
    <student></student>
    <student></student>
  </div>
</template>

<script>
import School from '@/components/School.vue';
import Student from '@/components/Student.vue';

export default {
  name: 'App',
  components: {
    Student,
    School,
  }
};
</script>

<style scoped>

</style>