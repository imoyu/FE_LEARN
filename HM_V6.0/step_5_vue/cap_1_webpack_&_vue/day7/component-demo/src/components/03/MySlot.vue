<template>
  <div style="border: 2px solid blue;width: 400px">
    <slot name="slot1">{{ sonObj.one }}</slot>
    <hr>
    <slot name="slot2" :yyy="sonObj">{{ sonObj.two }}</slot>
  </div>
</template>

<script>
export default {
  name: 'MySlot',
  data() {
    return {
      sonObj: {
        one: '默认的slot1',
        two: '默认的slot2',
        three: '😎😭😎😭😎😭😎😭😎😭😎😭'
      },
    };
  },
};
</script>

<style scoped>

</style>