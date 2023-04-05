<template>
  <div>
    <input v-model="msg">
    <br>
    <button @click="reverse">reverse</button>
    <input value="qweqwe">
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: '',
    };
  },
  methods: {
    reverse() {
      console.log('msg:', this.msg);
      this.msg = this.msg.split("").reverse().join("");
    },
  },
};
</script>

<style scoped>

</style>