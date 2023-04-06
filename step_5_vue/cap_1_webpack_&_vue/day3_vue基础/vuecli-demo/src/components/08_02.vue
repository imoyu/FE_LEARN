<template>
  <div>
    <form action="">
      <div>
        <span>来自于：</span>
        <select v-model="from">
          <option value="南京市">南京</option>
          <option value="武汉市">武汉</option>
          <option value="天津市">天津</option>
        </select>
      </div>
      <div>
        <span>爱好：</span>
        <input type="checkbox" v-model="hobby" value="跑步">跑步
        <input type="checkbox" v-model="hobby" value="打球">打球
        <input type="checkbox" v-model="hobby" value="睡觉">睡觉
      </div>
      <div>
        <span>性别：</span>
        <input type="radio" value="男" v-model="gender" name="sex">男
        <input type="radio" value="女" v-model="gender" name="sex">女
      </div>
      <div>
        <span>自我介绍：</span>
        <textarea v-model="introduce"></textarea>
      </div>
      <input type="submit" value="提交">
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      from: '',
      // 接收 checkBox 的字段是数组时，接收的是 value，字段是值时，绑定的是 checked
      // 复选框勾选 -> 对应的 value 传给数组
      // 数组值改变 -> 找到这个 checkbox，checked 改为 false
      hobby: [],
      gender: '男',
      introduce: '',
    };
  },
};
</script>

<style scoped>

</style>