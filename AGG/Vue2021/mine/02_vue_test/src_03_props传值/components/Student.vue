<template>
  <div>
    <h4>姓名：{{ name }}</h4>
    <h4>年龄：{{ ageCopy }}</h4>
    <h4>性别：{{ sex }}</h4>
    <button @click="add">年龄 ++</button>
    <hr>
  </div>
</template>

<script>
export default {
  name: 'Student',
  // 写法一：
  // props: ['name', 'age', 'sex']

  // 写法二：
  props: {
    name: String,
    age: Number,
    sex: String,
  },

  // 写法三：
  // props: {
  //   name: {
  //     type: String,
  //     require: true,
  //     default: '无名'
  //   }
  // }
  data() {
    return {
      ageCopy: this.age,
    }
  },
  methods: {
    add() {
      // props 的值不能直接修改
      this.ageCopy++;
    },
  }
};

</script>

<style scoped>

</style>