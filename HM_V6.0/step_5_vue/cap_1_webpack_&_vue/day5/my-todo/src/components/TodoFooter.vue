<template>
  <footer class="footer">
    <span class="todo-count">剩余<strong>{{ taskCount }}</strong></span>
    <ul class="filters" @click="clickFn">
      <li>
        <a class="{selected: taskType === 'all'}" href="javascript:" @click="taskType='all'">全部</a>
      </li>
      <li>
        <a class="{selected: taskType === 'yes'}" href="javascript:" @click="taskType='yes'">未完成</a>
      </li>
      <li>
        <a class="{selected: taskType === 'no'}" href="javascript:" @click="taskType='no'">已完成</a>
      </li>
    </ul>
    <button class="clear-completed">清除已完成</button>
  </footer>
</template>

<script>
export default {
  props: ['arr'],
  data() {
    return {
      taskType: 'all',
    };
  },
  computed: {
    taskCount() {
      return this.arr.length;
    },
  },
  methods: {
    clickFn() {
      this.$emit('changeType', this.taskType);
    },
  }
};
</script>