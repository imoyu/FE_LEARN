<template>
  <div>
    <ol>
      <!--  加 key 与不加的区别  -->
      <li v-for="item in arr" :key="item.id">
        {{ item.id }} -- {{ item.name }}
        <input />
      </li>
    </ol>
    <button @click="add">添加</button>
  </div>
</template>

<script>
export default {
  name: 'vue03',
  data() {
    return {
      arr: [
        {
          name: '老大',
          id: 50,
        },
        {
          name: '老二',
          id: 31,
        },
        {
          name: '老三',
          id: 10,
        },
      ],
    };
  },
  methods: {
    add() {
      this.arr.splice(1, 0, {
        name: '新人',
        id: 67,
      });
    },
  },
};
</script>

<style scoped>

</style>