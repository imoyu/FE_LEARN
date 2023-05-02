<template>
  <div>
    <school></school>
    <hr>
    <student></student>
    <student></student>
    <button ref="btn" @click="show">打印组件</button>
    <h4 ref="btn">======</h4>
  </div>
</template>

<script>
import School from '@/components/School.vue';
import Student from '@/components/Student.vue';

// 1. 有多个相同的 ref 时，取最后一个
// 2. ref 作用于原生标签，获得到 dom 元素，作用于组件标签，获取到组件对象
// 3. 使用 id，getDocumentById 获取组件元素，得到内部的 dom 对象
export default {
  name: 'App',
  components: {
    Student,
    School,
  },
  methods: {
    show() {
      console.log(this.$refs.btn);
    },
  }
};
</script>

<style scoped>

</style>