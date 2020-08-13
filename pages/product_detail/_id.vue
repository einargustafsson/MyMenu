<template>
  <div class="section">
    <div class="card is-clearfix columns">
        <figure class="card-image is-one-thirds">
          <img :src="product.imgURL" alt="Placeholder image">
        </figure>
        <div class="card-content column is-two-thirds">
          <div class="card-content__title">
            <h2 class="title is-4">{{ product.title }}
              
            </h2>
          </div>
          <div class="card-content__text">
            <p>{{ product.description }}</p>
          </div>
         
          <div class="card-content__reviews">
            <!--
            <div class="select is-rounded is-small is-pulled-right">
              <select @change="onSelectQuantity(product.id)" v-model="selected">
                <option v-for="quantity in quantityArray" :value="quantity">{{ quantity }}</option>
              </select>
            </div>
            -->
            <div class="selector is-rounded is-small">
              <button class="button remove-from-cart" @click="removeFromCart(product.id, false)">-</button>
              <input class="counter" v-model="product.quantity" disabled />
              <button class="button add-to-cart" @click="addToCart(product.id)">+</button>
            </div>
          </div>
          <div class="card-content__price is-pulled-left">
            <span class="title is-4"><strong> ISK {{ product.price }}</strong></span>
          </div>
          <div class="card-content__btn is-pulled-right">
            <button class="button is-primary" v-if="!isAddedBtn" @click="addToCart(product.id)">{{ addToCartLabel }}</button>
            <button class="button is-text" v-if="isAddedBtn" @click="removeFromCart(product.id)">{{ removeFromCartLabel }}</button>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'product_detail-id',

  validate ({ params }) {
    return /^\d+$/.test(params.id)
  },
  
  props: {

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
      removeFromCartLabel: 'Remove',
      addToFavouriteLabel: 'Add to favourite',
      removeFromFavouriteLabel: 'Remove from favourite',
      product: {},
      selected: 1,
      quantityArray: [],
      newValue: 0
    };
  },

  mounted () {
    this.product = this.$store.getters.getProductById(this.$route.params.id);
    this.selected = this.product.quantity;

    for (let i = 1; i <= 20; i++) {
      this.quantityArray.push(i);
    }
  },

  computed: {
    isAddedBtn () {
      return this.product.isAddedBtn;
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
    },
    removeFromCart (id) {
      let data = {
        id: id,
        status: false,
        quantity: this.newValue - 1
      }
      this.$store.commit('removeFromCart', id);
      this.$store.commit('setAddedBtn', data);
      if ((this.newValue) > this.min) {
        this.newValue = this.newValue - 1;
        this.$store.commit('quantity', data);
      }
      if((this.newValue) == 0) {
        this.$store.commit('removeFromCart', id);
      }
    },
    onSelectQuantity (id) {
      let data = {
        id: id,
        quantity: this.selected
      }
      this.$store.commit('quantity', data);
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
    }
  }
};
</script>

<style lang="scss" scoped>
  .card-content {
    padding: 15px 10px 15px 0;

    &__text {
      margin: 15px 0;
    }
    &__reviews {
      display: inline-block;
      width: 100%;
      margin-bottom: 10px;
    }
  }
  .card {
    box-shadow :none;
    -webkit-box-shadow: none;
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
  .selector {
   position: absolute;
   right: 15px;
   bottom: 25px;
 }
</style>

