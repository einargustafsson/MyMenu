<template>
  <div>
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <nuxt-link :to="{ name: 'index' }" class="navbar-item">
          <h1 class="title is-3 is-flex-mobile"></h1>
        </nuxt-link>

        <div class="navbar-item shopping-cart" @click="showCheckoutModal">
            <span class="icon">
              <i class="fa fa-shopping-cart"></i>
            </span>
            <span :class="[numProductsAdded > 0 ? 'tag is-info' : '']">{{ numProductsAdded }}</span>
          </div>
      </div>

      <div class="navbar-menu is-active">
        <div class="navbar-start">
          <div class="navbar-item field">
            <VmSearch></VmSearch>
            <VmFilter></VmFilter>
          </div>
        </div>
        
      </div>

     
    </nav>
    <p class="intro">You can add items to the cart and then we'll come and take your order</p>
  </div>
</template>

<script>
  
  import VmSearch from '../search/Search';
  import VmFilter from '../filter/Tags';

  export default {
    name: 'VmHeader',

    data () {
      return {
        linkedinTooltip: 'Follow us on Linkedin',
        facebookTooltip: 'Follow us on Facebook',
        twitterTooltip: 'Follow us on Twitter',
        instagramTooltip: 'Follow us on Instagram',
        isCheckoutActive: false,
        isMenuOpen: false
      }
    },

    components: {
      VmSearch,
      VmFilter
    },

    computed: {
      numProductsAdded () {
        return this.$store.getters.productsAdded.length;
      }
    },

    methods: {
      showCheckoutModal () {
        this.$store.commit('showCheckoutModal', true);
      }
    }
  };
</script>

<style lang="scss" scoped>
  .navbar {
    
    width: 100%;
  }
  .title {
    background: url('https://static1.squarespace.com/static/5c721c5034c4e26716faa829/t/5c7a84f00d929729702eebd5/1595371955548/?format=1500w') no-repeat;
    background-position: 50% 50%;
    background-size: 165px;
    width: 175px;
    height: 55px;
  }
  .shopping-cart {
    cursor: pointer;
    position: absolute;
    top: 20px;
    right: 20px;
    position: fixed;
  }
  a {
    color: grey;
  }
  .intro {padding: 10px 20px; text-align: center;}
</style>
