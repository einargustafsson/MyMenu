<template>
  <div class="columns is-centered is-multiline">
    <p class="intro">Add the items you want to the cart <br> We'll come and take your order</p>
    <div class="card column is-one-quarter" v-for="product in products" :key="product.id">
      <VmProducts :product="product"></VmProducts>
    </div>
    <div class="section" v-if="products.length === 0">
      <p>{{ noProductLabel }}</p>
    </div>
  </div>
</template>

<script>
import VmProducts from '../Products';
import { getByTitle } from '@/assets/filters';
import { getByTag } from '@/assets/tags';

export default {
  name: 'productsList',
  
  components: { VmProducts },
  
  data () {
    return {
      id: '',
      noProductLabel: 'No product found',
      productsFiltered: []
    };
  },

  computed: {
    products () {
      if (this.$store.state.userInfo.hasSearched) {
        return this.getProductByTitle();
      } else if(this.$store.state.userInfo.hasFiltered) {
        return this.getProductByTag();
      } else {
        return this.$store.state.products;
      }
    }
  },

  methods: {
    getProductByTitle () {
      let listOfProducts = this.$store.state.products,
          titleSearched = this.$store.state.userInfo.productTitleSearched;
      return this.productsFiltered = getByTitle(listOfProducts, titleSearched);
    },
    getProductByTag () {
      let listOfProducts = this.$store.state.products,
          tagSearched = this.$store.state.userInfo.productTagFiltered;
      return this.productsFiltered = getByTag(listOfProducts, tagSearched);
    }
  }

};


</script>

<style lang="scss" scoped>
  .card {
    padding: 0;
    border-bottom: 2px solid #209cee;
  }
 .columns {margin: 0;}
 .intro {padding: 10px 20px; text-align: center;}
</style>
