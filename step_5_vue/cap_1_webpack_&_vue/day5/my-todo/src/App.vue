<template>
  <section class="todoapp">
    <todo-header @create="createFn"></todo-header>
    <todo-main :list="showArr" @del="delFn"></todo-main>
    <todo-footer :arr="showArr" @changeType="changeTypeFn"></todo-footer>
  </section>
</template>

<script>
import './styles/base.css';
import './styles/index.css';

import TodoHeader from './components/TodoHeader.vue'
import TodoMain from './components/TodoMain.vue';
import TodoFooter from './components/TodoFooter.vue';

export default {
  name: 'App',
  components: {
    TodoHeader,
    TodoMain,
    TodoFooter,
  },
  data() {
    return {
      list: [
        { id: 100, name: '吃饭', isDone: true },
        { id: 201, name: '睡觉', isDone: false },
        { id: 103, name: '打豆豆', isDone: true },
      ],
      taskType: 'all',
    };
  },
  methods: {
    createFn(taskName) {
      let id = this.list.length === 0 ? 100 : this.list[this.list.length - 1].id + 1
      this.list.push({
        id: id,
        name: taskName,
        isDone: false,
      });
    },
    delFn(id) {
      const index = this.list.findIndex((obj) => obj.id === id);
      this.list.splice(index, 1);
    },
    changeTypeFn(type) {
      this.taskType = type;
    },
  },
  computed: {
    showArr() {
      switch (this.taskType) {
        case 'yes':
          return this.list.filter((obj) => obj.isDone);
        case 'no':
          return this.list.filter((obj) => !obj.isDone);
        default:
          return this.list;
      }
    },
  },
};
</script>

<style>

</style>
