<template>
  <div>
    <button @click="vueName='UserName'">账号密码填写</button>
    <br>
    <button @click="vueName='UserInfo'">个人信息填写</button>
    <div style="border: 1px solid red;">
      <component :is="vueName"></component>
    </div>
  </div>
</template>

<script>
import UserName from '@/components/01/UserName.vue';
import UserInfo
  from '@/components/01/UserInfo.vue';

export default {
  name: 'DynamicVue',
  data() {
    return {
      vueName: 'UserName',
    };
  },
  components: {
    UserInfo,
    UserName,
  },
};
</script>

<style scoped>

</style>