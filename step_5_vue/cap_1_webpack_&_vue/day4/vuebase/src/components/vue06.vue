<template>
  <div id="app">
    <div class="container">
      <!-- 顶部框模块 -->
      <div class="form-group">
        <div class="input-group">
          <h4>品牌管理</h4>
        </div>
      </div>

      <!-- 数据表格 -->
      <table class="table table-bordered table-hover mt-2">
        <thead>
          <tr>
            <th>编号</th>
            <th>资产名称</th>
            <th>价格</th>
            <th>创建时间</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(obj, index) in list" :key="index">
            <td>{{ obj.id }}</td>
            <td>{{ obj.name }}</td>
            <!-- 如果价格超过100，就有red这个类 -->
            <td :class="{red: obj.price > 100}">{{ obj.price }}</td>
            <td>{{ obj.time | formatDate }}</td>
            <td><a href="#" @click.prevent="del(obj.id)">删除</a></td>
          </tr>
        </tbody>
        <tfoot v-if="list.length !== 0">
          <tr style="background-color: #EEEEEE">
            <td>统计：</td>
            <td colspan="2">总价钱为：{{ totalPrice }}</td>
            <td>平均价格：{{ avlPrice }}</td>
            <td></td>
          </tr>
        </tfoot>

      </table>

      <!-- 添加资产 -->
      <form class="form-inline">
        <div class="form-group">
          <div class="input-group">
            <input
                type="text"
                class="form-control"
                placeholder="资产名称"
                v-model:value="name"
            />
          </div>
        </div>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <div class="form-group">
          <div class="input-group">
            <input
                type="text"
                class="form-control"
                placeholder="价格"
                v-model:value.number="price"
            />
          </div>
        </div>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <!-- 阻止表单提交 -->
        <button class="btn btn-primary" @click.prevent="add">添加资产</button>
      </form>
    </div>
  </div>
</template>

<script>

import moment from 'moment/moment';

export default {
  data() {
    return {
      name: undefined, // 名称
      price: undefined, // 价格
      list: JSON.parse(localStorage.getItem('products')) || [],
      // list: [
      //   { id: 100, name: '外套', price: 199, time: new Date('2010-08-12') },
      //   { id: 101, name: '裤子', price: 34, time: new Date('2013-09-01') },
      //   { id: 102, name: '鞋', price: 25.4, time: new Date('2018-11-22') },
      //   { id: 103, name: '头发', price: 19900, time: new Date('2020-12-12') },
      // ],
    };
  },
  methods: {
    del(id) {
      this.list = this.list.filter(obj => obj.id !== id);
    },
    add() {
      // 即使输入数字，获取到的类型也是 string
      console.log(typeof this.price);
      // todo 判断是否是数字：https://blog.csdn.net/qq_23365135/article/details/123833406
      if (!this.name || this.name.trim() === '' || !this.price || this.price === 0) {
        return alert('不能为空');
      }
      this.list.push({
        id: (this.list[this.list.length - 1]?.id || 99) + 1,
        name: this.name,
        price: this.price,
        time: new Date(),
      });
      this.name = undefined;
      this.price = undefined;
    },
  },
  filters: {
    formatDate(val) {
      return moment(val).format('YYYY-MM-DD');
    },
  },
  computed: {
    totalPrice() {
      return this.list.reduce((sum, obj) => sum += obj.price, 0);
    },
    avlPrice() {
      // computed 中定义的方法最终会变成 Vue 组件的属性
      return this.list.length === 0 ? 0 : this.totalPrice / this.list.length;
    },
  },
  watch: {
    list: {
      deep: true,
      handler() {
        localStorage.setItem('products', JSON.stringify(this.list));
      },
    },
  },
};
</script>

<style>
.red {
  color: red;
}
</style>