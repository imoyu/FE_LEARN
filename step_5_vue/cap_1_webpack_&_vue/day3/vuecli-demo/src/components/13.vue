<template>
  <div>
    <div v-for="(v, i) in arr">
      {{ i }} --> {{ v }}
    </div>
    <hr>
    <table id="tb">
      <thead>
        <tr>
          <td>id</td>
          <td>姓名</td>
          <td>性别</td>
          <td>爱好</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="obj in stuArr">
          <td>{{ obj.id }}</td>
          <td>{{ obj.name }}</td>
          <td>{{ obj.sex }}</td>
          <td>{{ obj.id }}</td>
        </tr>
      </tbody>
    </table>
    <hr>
    <div v-for="(value, key) in tObj">
      {{ key }} --> {{ value }}
    </div>
    <hr>
    <div v-for="n in count">
      {{ n }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: ['小明', '小欢欢', '大黄'],
      stuArr: [
        {
          id: 1001,
          name: '孙悟空',
          sex: '男',
          hobby: '吃桃子',
        },
        {
          id: 1002,
          name: '猪八戒',
          sex: '男',
          hobby: '背媳妇',
        },
      ],
      tObj: {
        name: '小黑',
        age: 18,
        class: '1期',
      },
      count: 10,
    };
  },
};
</script>

<style scoped>

</style>