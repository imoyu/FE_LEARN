<template>
  <div>
    <p>1. 获取所有图书信息</p>
    <button @click="getBooks">点击-查看控制台</button>
    <ul>
      <li v-for="(book, index) in books" :key="index">{{ book }}</li>
    </ul>
    <p>2. 查询某本书籍信息</p>
    <input type="text" placeholder="请输入要查询 的书名" v-model="bookName" />
    <button @click="getBook">查询</button>
    <p>3. 新增图书信息</p>
    <div>
      <input type="text" placeholder="书名" v-model="bookObj.bookname">
    </div>
    <div>
      <input type="text" placeholder="作者" v-model="bookObj.author">
    </div>
    <div>
      <input type="text" placeholder="出版社" v-model="bookObj.publisher">
    </div>
    <button @click="addBook">发布</button>
  </div>
</template>

<script>
import axios from 'axios';

// 其它文件引入axios也会受到影响
axios.defaults.baseURL = 'http://123.57.109.30:3006';

export default {
  name: 'AxiosTest',
  data() {
    return {
      books: [],
      bookName: undefined,
      bookObj: { // 参数名提前和后台的参数名对上-发送请求就不用再次对接了
        bookname: null,
        author: undefined,
        publisher: undefined,
      },
    };
  },
  methods: {
    getBooks() {
      return axios({
        method: 'GET',
        url: '/api/getbooks',
      }).then((res) => {
        console.log(res);
        // 第一个data后去body数据，第二个是自定义字段
        this.books = res.data.data;
      });
    },
    getBook() {
      axios({
        url: '/api/getbooks',
        method: 'GET',
        params: { // 都会axios最终拼接到url?后面
          bookName: this.bookName,
        },
      }).then(res => {
        console.log(res);
      });
    },
    addBook() {
      /*
      input 表单未输入时，字段值就是 data 里的初始值，
      输入后内容为空时，传进来的是空字段
      undefined 字段不会被请求发出，而 null，''都会被请求发出
       */
      console.log(this.bookObj);
      axios({
        method: 'POST',
        url: '/api/addbook',
        data: {
          appkey: '7250d3eb-18e1-41bc-8bb2-11483665535a',
          ...this.bookObj,
        },
      });
    },
  },
};
</script>

<style scoped>

</style>