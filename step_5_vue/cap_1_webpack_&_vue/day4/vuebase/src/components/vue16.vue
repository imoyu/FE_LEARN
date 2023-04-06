<template>
  <div>
    <span>全选：</span><input type="checkbox" v-model="all">&nbsp;&nbsp;<button @click="reverseSelect">反选</button>
    <ul>
      <li v-for="(obj, index) in arr" :key="index">
        <input type="checkbox" v-model:checked="obj.c">
        {{ obj.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'vue16',
  data() {
    return {
      arr: [
        {
          name: "猪八戒",
          c: false,
        },
        {
          name: "孙悟空",
          c: false,
        },
        {
          name: "唐僧",
          c: false,
        },
        {
          name: "白龙马",
          c: false,
        },
      ],
      xxx: [],
    };
  },
  methods: {
    reverseSelect() {
      this.arr.forEach(a => a.c = !a.c);
    },
  },
  computed: {
    all: {
      get() {
        return this.arr.every(a => a.c);
      },
      set(val) {
        this.arr.forEach(a => a.c = val);
      },
    }
  }
};
</script>

<style scoped>

</style>