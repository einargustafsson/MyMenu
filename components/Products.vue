<template>
  <div>
    <div class="card-image">
      <figure class="image ">
        <img :src="product.imgURL" alt="Placeholder image">
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <h2 class="title is-4">{{ product.title }}</h2>
        </div>
        
      </div>
      <div class="content is-clearfix">
        <p>{{ product.description }}</p>
        <p class="is-pulled-right">
          <span class="title is-4"><strong>ISK {{ product.price }}</strong></span>
        </p>
      </div>
      <div class="card-footer btn-actions">
        <div class="card-footer-item field is-grouped">
          
          <div class="buttons">
            <button class="button is-primary" v-if="!product.isAddedToCart" @click="addToCart(product.id)">{{ addToCartLabel }}</button>
            <button class="button is-text" v-if="product.isAddedToCart" @click="removeFromCart(product.id, false)">{{ removeFromCartLabel }}</button>
            
            
          </div>
           <div class="selector is-rounded is-small">
            <button class="button remove-from-cart" @click="removeFromCart(product.id, false)">-</button>
            <input class="counter" v-model="newValue" disabled />
            <button class="button add-to-cart" @click="addToCart(product.id)">+</button>
          </div>
           
        </div>
      </div>
    </div>
    <nuxt-link
      class="details"
      :to="{
        name: 'product_detail-id',
        params: {
          id: product.id,
          title: product.title,
          price: product.price,
          rating: product.ratings,
          reviews: product.reviews,
          isAddedBtn: product.isAddedBtn
        }
      }"
    >
    </nuxt-link>
  </div>
</template>

<script>


export default {
  name: 'products',
  //props: ['product'],
  props: {
    product: Object,
    value: {
      default: 0,
      type: Number
    },
    min: {
      default: 0,
      type: Number
    },
    max: {
      default: undefined,
      type: Number
    }
  },

  data () {
    return {
      addToCartLabel: 'Add',
      viewDetailsLabel: 'Details',
      removeFromCartLabel: 'Clear',
      addToFavouriteLabel: 'Add to favourite',
      removeFromFavouriteLabel: 'Remove from favourite',
      selected: 1,
      quantityArray: [],
      newValue: 0
    }
  },

  mounted () {
    for (let i = 1; i <= 10; i++) {
      this.quantityArray.push(i);
    }

    if (this.$props.product.quantity > 1) {
      this.selected = this.$props.product.quantity;
    }
  },

  computed: {
    isUserLogged () {
      return this.$store.getters.isUserLoggedIn;
    }
  },

  methods: {
    addToCart (id) {
      let data = {
        id: id,
        status: true,
        quantity: this.newValue + 1
      }
      this.$store.commit('addToCart', id);
      this.$store.commit('setAddedBtn', data);
      if (this.max === undefined || (this.newValue < this.max)) {
        this.newValue = this.newValue + 1;
       }
       this.$store.commit('quantity', data);
    },
    removeFromCart (id) {
      let data = {
        id: id,
        status: false,
        quantity: this.newValue - 1
      }
      
      this.$store.commit('setAddedBtn', data);
      if ((this.newValue) > this.min) {
        this.newValue = this.newValue - 1;
        this.$store.commit('quantity', data);
      }
      if((this.newValue) == 0) {
        this.$store.commit('removeFromCart', id);
      }
    },
    saveToFavorite (id) {
      let isUserLogged = this.$store.state.userInfo.isLoggedIn;

      if (isUserLogged) {
        this.$store.commit('addToFavourite', id);
      } else {
        this.$store.commit('showLoginModal', true);
      }
    },
    removeFromFavourite (id) {
      this.$store.commit('removeFromFavourite', id);
    },
    onSelectQuantity (id) {
      let data = {
        id: id,
        quantity: this.selected
      }
      this.$store.commit('quantity', data);
    }
  }
}
</script>

<style lang="scss" scoped>
 .details {
    cursor: pointer;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;

    &:hover {
      border: 1px solid #51bafc;
    }
 }
 .counter {
      width:50px;
      text-align:center;
      font-size:15px;
      padding:3px;
      border:none;
      background: #fff;
      margin-top: 5px;
      color: #333;
  }
 .button,
 .selector {
   z-index: 2;
 }
 .selector {
   position: absolute;
   right: 15px;
   bottom: 25px;
 }
 .card-content {
   padding: 0;
 }
 .buttons {
   margin: 0;
 }
 h2 {
   margin-top: 20px;
 }
</style>


