<template>
  <div>
    
      <!--
      <div class="navbar-brand">
        
        <nuxt-link :to="{ name: 'index' }" class="navbar-item">
          <h1 class="title is-3 is-flex-mobile"></h1>
        </nuxt-link>
        
        
      </div>
      -->
      
            
              <div class="header search-bar">
                <VmSearch></VmSearch>
                <div class="language-selector">
                  <ul>
                    <li v-if="this.$store.state.locale != 'en'" class="en"><a href="/en">EN</a></li>
                    <li v-if="this.$store.state.locale != 'is'" class="is"><a href="/is">IS</a></li>
                  </ul>
                </div> 
              </div>
              <div class="filter"
                :class="{ 'navbar--hidden': !showNavbar }">
                
                <div class="shopping-cart" @click="showCheckoutModal">
                  <span class="icon">
                    <i class="fa fa-shopping-cart"></i>
                  </span>
                  <span :class="[numProductsAdded > 0 ? 'tag is-info' : '']">{{ numProductsAdded }}</span>
                </div>
                <VmFilter></VmFilter>
              </div>
      
     
    
    <p class="intro">{{ $t('intro') }}</p>
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
        isMenuOpen: false,
        showNavbar: true,
        lastScrollPosition: 0
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

    mounted () {
      window.addEventListener('scroll', this.onScroll)
    },
    beforeDestroy () {
      window.removeEventListener('scroll', this.onScroll)
    },

    methods: {
      showCheckoutModal () {
        this.$store.commit('showCheckoutModal', true);
      },
      onScroll () {
        const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop
        if (currentScrollPosition < 0) {
          return
        }
        // Stop executing this function if the difference between
        // current scroll position and last scroll position is less than some offset
        if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 60) {
          return
        }
        this.showNavbar = currentScrollPosition < this.lastScrollPosition
        this.lastScrollPosition = currentScrollPosition
      }
    }
  };
</script>

<style lang="scss" scoped>
  
  .header {
    background: url('/images/loki.png') no-repeat;
    background-position: 10px 10px;
    background-size: 75px;
    padding-left: 105px;
    height:65px;
    padding-top: 5px;
  }

  .shopping-cart {
    cursor: pointer;
    z-index: 10;
    top: -38px;
    right: 10px;
    position: absolute;
    border: 2px solid #613916;
    border-bottom: 2px solid #fff;
    border-radius: 5px 5px 0 0;
    padding: 5px;
    background: rgba(255,255,255,0.9);
  }
  .fa-shopping-cart{
    width: 16px;
    height: 13px;
    background-size: 16px;
    display: inline-block;
    background: url('/images/cart.svg') no-repeat;
    }
  .filter {
    bottom: 0px;
    left: 0;
    position: fixed;
    border-top: 2px solid #613916;
    -webkit-box-shadow: 1px -5px 5px 0px rgba(0,0,0,0.21);
    -moz-box-shadow: 1px -5px 5px 0px rgba(0,0,0,0.21);
    box-shadow: 1px -5px 5px 0px rgba(0,0,0,0.21);
    background: rgba(255,255,255,0.9);
    padding: 10px 10px 5px;
    z-index: 5;
    width: 100%;
  }
  a {
    color: grey;
  }
  .intro {
    text-align: center; 
    padding: 10px; 
    background: #613916; 
    color: white;
    white-space: pre;
  }

  .filter {
  position: fixed;
  transform: translate3d(0, 0, 0);
  transition: 0.3s all ease-out;
  }
  .filter.navbar--hidden {
    transform: translate3d(0, 100%, 0);
  }
  .language-selector {
      position: absolute;
      top: 25px;
      right: 10px;
      z-index: 10;
  }
  .language-selector li{
      display: inline-block; 
    position: relative;
    width: 30px;
}
  .language-selector li a{
      color: #fff;
      padding: 0;
      margin: 0;
      display: block;
  }
  .language-selector li a:after {
      position: absolute;
      top: 0;
      left: 0;
      content: '';
      width: 26px;
      height: 22px;
      background-image: url('/images/en.svg');
      display: block;
      background-size: 22px;
      background-repeat: no-repeat;
  }
  .language-selector li.is a:after {
      background-image: url('/images/is.svg');
  }
</style>
