<template>
  <div>
    <h3>校名：{{ name }}</h3>
    <h3>地址：{{ address }}</h3>
    {{ x }}, {{ y }}
  </div>
</template>

<script>
import { m2 } from '@/mixin';

export default {
  name: 'School',
  data() {
    return {
      name: '第二小学',
      address: '犀牛陂广场',
    };
  },
  mixins: [m2],
};
</script>

<style scoped>

</style>