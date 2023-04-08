<template>
  <ul class="todo-list">
    <!-- completed: 完成的类名 -->
    <li v-for="(obj, index) in list" class="{completed: obj.isDone}" :key="obj.id">
      <div class="view">
        <input class="toggle" type="checkbox" />
        <label> {{ obj.name }} </label>
        <button class="destroy" @click="delFn(obj.id)"></button>
      </div>
    </li>
  </ul>

</template>

<script>
export default {
  props: ['list'],
  methods: {
    delFn(id) {
      this.$emit('del', id);
    },
  }
};
</script>