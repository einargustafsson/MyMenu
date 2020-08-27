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
    background: url('/images/messinn.png') no-repeat;
    background-position: 50% 50%;
    background-size: 85px;
    width: 90px;
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
</style>
