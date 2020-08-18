<template>
  <div>
    <div class="card-image">
      <figure class="image" v-if="product.imgURL != ''">
        <img :src="product.imgURL">
      </figure>
      <p class="is-pulled-right price" v-if="product.price != ''">
          <span class="title is-4"><strong>ISK {{ product.price }}</strong></span>
        </p>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="">
          <h2 class="title is-4">{{ product.title }}</h2>
        </div>
      </div>
      <div class="content is-clearfix">
        <p>{{ product.description }}</p>
        
      </div>
      <div class="card-footer btn-actions">
        <div class="card-footer-item field is-grouped">
          <div class="buttons">
            <!--
            <button class="button is-primary add-to-order" v-if="!product.isAddedToCart" @click="addToCart(product.id)">{{ addToCartLabel }}</button>
            <button class="button is-text" v-if="product.isAddedToCart" @click="removeFromCart(product.id, false)">{{ removeFromCartLabel }}</button>
            -->
          </div>
           <div class="selector is-rounded is-small">
            <button class="button remove-from-cart" @click="removeFromCart(product.id, false)">-</button>
            <span class="counter-container">
              <input class="counter" v-model="newValue" disabled />
            </span>
            <button class="button add-to-cart" @click="addToCart(product.id)">+</button>
          </div>
           
        </div>
      </div>
    </div>
    <!--
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
    -->
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
      width:100%;
      text-align:center;
      font-size:18px;
      font-weight: bold;
      padding:3px;
      border:none;
      background: #fff;
      margin-top: 5px;
      color: #209cee;
  }
 .button,
 .selector {
   z-index: 2;
 }
 .selector {
   display: flex; justify-content: flex-end; width: 100%}
 .selector button {background-color: #209cee; color: white; margin: 0; font-weight: bold; font-size: 18px;}
 .selector button ,
  .selector .counter-container {
      flex: 1;
  }

 .price {
    position: absolute; 
    bottom: 10px; 
    right: 10px;
    padding: 10px;
    background: #fc0;
    border-radius: 5px 0 0 5px;
    opacity: 0.8;
}
.card-content {
  padding: 0.5rem 1rem;
}
.card-content h2, .card-content p{
   padding: 0 15px;
 }

 .buttons {
   margin: 0;
 }

.card-image {
  min-height: 80px;
}
.image img {
  margin-bottom: 20px;
}
 .card .media {margin-bottom: 0.5rem;}
 .add-to-order {background-color: #209cee;}
</style>


