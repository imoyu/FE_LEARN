<template>
  <div>
    <h1>1. 动态dynamic组件使用</h1>
    <vue01></vue01>
    <hr>
    <!--    <h1>2. 组件缓存</h1>-->
    <!--    <UseDynamic2></UseDynamic2>-->
    <!--    <hr>-->
    <h1>3. 组件-插槽</h1>
    <slot-panel></slot-panel>
    <hr>
    <!--    <h1>4. 组件-具名插槽</h1>-->
    <!--    <UseSlot2></UseSlot2>-->
    <!--    <hr>-->
    <!--    <h1>5. 组件-作用域插槽</h1>-->
    <!--    <UseSlot3></UseSlot3>-->
    <!--    <hr>-->
    <!--    <h1>6. 作用域插槽-使用场景</h1>-->
    <!--    <p>组件内标签可以随意定义和数据使用</p>-->
    <!--    <UseTable></UseTable>-->
    <!--    <hr>-->
    <!--    <h1>7. 自定义指令</h1>-->
    <!--    <UseDirective></UseDirective>-->
    <!--    <h1>8. 测试 v-if v-show 是否能触发 activated</h1>-->
    <!--    <Test_Activated></Test_Activated>-->
  </div>
</template>

<script>
import vue01 from '@/views2/vue01.vue';
import SlotPanel from '@/views2/03_Slot.vue'

export default {
  name: 'App2',
  components: {
    vue01,
    SlotPanel,
  },
};
</script>

<style scoped>

</style>