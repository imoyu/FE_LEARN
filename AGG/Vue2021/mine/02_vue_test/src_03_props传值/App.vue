<template>
  <div>
    <school></school>
    <hr>
    <student name="aaa" :age="12" sex="male"></student>
    <student name="aaa" :age="14" sex="female"></student>
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