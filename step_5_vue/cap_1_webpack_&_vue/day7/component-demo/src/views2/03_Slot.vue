<template>
  <div>
    <h4>slot 1</h4>
    <my-slot>
      <template v-slot:slot1>
        <p>123123</p>
        <p>123123</p>
        <p>3424</p>
        <p>423423324</p>
      </template>
      <template #slot2>
        <p>dddddddddddddd</p>
        <p>dddddddddddddd</p>
        <p>dddddddddddddd</p>
      </template>
    </my-slot>
    <h4>slot 2</h4>
    <my-slot>
      <!--   未指定 slot，不插入数据   -->
      wwwwwwwwwwwwwwwwwwwww
    </my-slot>
    <h4>slot 3</h4>
    <my-slot>
      <template #slot1>das</template>
      <template #slot2>qqq</template>
    </my-slot>
    <h4>slot 4 读取子组件的值</h4>
    <!--
      1. 在子子组件定义一个属性 yyy，绑定值
      2. 当前组件指定一个值 xxx，即可直接调用：xxx.yyy
      -->
    <my-slot>
      <template v-slot:slot2="xxx">
        {{ xxx.yyy.three }}
      </template>
    </my-slot>
  </div>
</template>

<script>
import MySlot from '@/components/03/MySlot.vue';

export default {
  name: 'Slot03',
  components: {
    MySlot,
  },
};
</script>

<style scoped>

</style>