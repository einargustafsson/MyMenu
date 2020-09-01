<template>
  <div class="columns is-centered is-multiline">
    <div class="card column is-full-mobile is-half-tablet is-one-third-desktop is-one-quarter-widescreen" v-for="product in products" :key="product.id">
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
      var lang = this.$store.state.userInfo.lang;
      var store = this.$store.state.products;
      if(this.$store.state.locale == "is")
      {
        store = this.$store.state.products_is;
      }

      if (this.$store.state.userInfo.hasSearched) {
        return this.getProductByTitle(store);
      } else if(this.$store.state.userInfo.hasFiltered) {
        return this.getProductByTag(store);
      } else {
          return store;
      }
    }
  },

  methods: {
    getProductByTitle (store) {
      let listOfProducts = store,
          titleSearched = this.$store.state.userInfo.productTitleSearched;
      return this.productsFiltered = getByTitle(listOfProducts, titleSearched);
    },
    getProductByTag (store) {
      let listOfProducts = store,
          tagSearched = this.$store.state.userInfo.productTagFiltered;
      return this.productsFiltered = getByTag(listOfProducts, tagSearched);
    }
  }

};
</script>

<style lang="scss" scoped>
  .card {
    padding: 0;
    border-bottom: 2px solid #613916;
  }
 .columns {
   margin: 0;
  }

</style>
