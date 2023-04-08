<template>
  <div>
    <div style="float: left">
      <Product dsaddas v-for="(p, index) in products"
          :key="p.id"
          :title="p.title"
          :price="p.price"
          :count="p.count"
          :index="index"
          @minusOne="fn">
      </Product>
    </div>
    <div style="float: left">
      <List :arr="products" :price="products[0].price">
      </List>
    </div>
  </div>
</template>

<script>
import Product from '@/components/my/Product.vue';
import List from '@/components/my/List.vue';

export default {
  name: 'vue03',
  components: {
    Product,
    List,
  },
  data() {
    return {
      products: [
        { id: 1, title: '苹果', price: 10, count: '10千克' },
        { id: 2, title: '葡萄', price: 15, count: '20千克' },
        { id: 3, title: '西瓜', price: 7, count: '12千克' },
      ],
    };
  },
  methods: {
    fn(index) {
      this.products[index].price--;
    },
  }
};
</script>

<style scoped>

</style>