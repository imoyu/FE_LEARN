<template>
  <div>
    <!--  里面只能放一个标签？  -->
    <keep-alive>
      <!--   if 会触发   -->
      <v1 v-if="s1"></v1>
    </keep-alive>
    <keep-alive>
      <!--   show 不会   -->
      <v1 v-show="s2"></v1>
    </keep-alive>
    <button @click="toggleS1">if</button>
    <button @click="toggleS2">show</button>
    <v1></v1>
  </div>
</template>

<script>
import V1 from '../components/07/v1.vue';

export default {
  name: '08_Test_Activated',
  components: { V1 },
  data() {
    return {
      s1: true,
      s2: true,
    };
  },
  methods: {
    toggleS1() {
      this.s1 = !this.s1;
    },
    toggleS2() {
      this.s2 = !this.s2;
    },
  }
};
</script>

<style scoped>

</style>