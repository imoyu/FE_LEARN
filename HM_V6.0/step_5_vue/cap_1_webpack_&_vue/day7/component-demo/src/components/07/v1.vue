<template>
  <div>
    111111111111
  </div>
</template>

<script>
export default {
  name: 'v1',
  activated() {
    console.log('activated ...');
  },
  deactivated() {
    console.log('deactivated ...');
  },
  created() {
    console.log('created ...');
  },
  beforeCreate() {
    console.log('beforeCreate ...');
  }
};
</script>

<style scoped>

</style>