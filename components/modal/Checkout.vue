<template>
	<div :class="[ openModal ? 'is-active' : '', 'modal' ]">
		<div class="modal-background"></div>
		<div class="modal-card">
			<header class="modal-card-head">
				<p class="modal-card-title">{{$t('yourorder')}}</p>
				
				<button class="delete" aria-label="close" @click="closeModal(false)"></button>
			</header>
			<section class="modal-card-body">
				<div v-if="!isCheckoutSection">
					<p v-if="products.length != 0" class="intro">{{ $t('checkout') }}</p>
					<div class="product" v-for="product in products" :key="product.id">
						
						<p>{{product.quantity}} x {{ product.title }}</p>
						<p>kr {{ product.price.toLocaleString() }} </p>
						<button class="button is-info is-inverted" @click="removeFromCart(product.id)">{{ $t('remove') }}</button>
						
					</div>
					<div v-if="products.length === 0">
						<p>{{ $t('cartEmptyLabel') }}</p>
					</div>
				</div>
				<div v-if="isCheckoutSection">
					<p>You bought it :-)</p>
				</div>
			</section>
			
			<footer class="modal-card-foot">
				<h3 v-show="products.length > 0 && !isCheckoutSection" class=" is-success" @click="onNextBtn">{{ $t('totalof') }} {{ buyLabel }}</h3>
				<button v-if="isCheckoutSection" class="button is-success" @click="closeModal(true)">{{ closeLabel }}</button>
			</footer>
			
		</div>
	</div>
</template>

<script>
export default {
	name: 'checkout',
    
	data () {
		return {
			modalTitle: 'Your order',
			removeLabel: 'Remove',
			cartEmptyLabel: 'Your cart is empty',
			closeLabel: 'Close',
			isCheckoutSection: false
		}
	},

	computed: {
			products () {
				return this.$store.getters.productsAdded;
			},
			openModal () {
				if (this.$store.getters.isCheckoutModalOpen) {
					return true;
				} else {
					return false;
				}
			},
			buyLabel () {
				let totalProducts = this.products.length,
						productsAdded = this.$store.getters.productsAdded,
						pricesArray = [],
						productLabel = '',
						finalPrice = '',
						quantity = 1;

				productsAdded.forEach(product => {

					if (product.quantity >= 1) {
						quantity = product.quantity;
					}

					pricesArray.push((product.price * quantity)); // get the price of every product added and multiply quantity
				});

				finalPrice = pricesArray.reduce((a, b) => a + b, 0); // sum the prices
				
				if (totalProducts > 1) { // set plural or singular
					productLabel = 'orders';
				} else {
					productLabel = 'order';
				}
				//return `Buy ${totalProducts} ${productLabel} at ${finalPrice}€`;
				//return `Total of ${totalProducts} ${productLabel} at ISK ${finalPrice}`;
				return `kr ${finalPrice.toLocaleString()}`;
		},
		isUserLoggedIn () {
			return this.$store.getters.isUserLoggedIn;
		}
	},

	methods: {
		closeModal (reloadPage) {
			this.$store.commit('showCheckoutModal', false);

			if (reloadPage) {
				window.location.reload();
			}
		},
		removeFromCart (id) {
			let data = {
					id: id,
					status: false
			}
			this.$store.commit('removeFromCart', id);
			this.$store.commit('setAddedBtn', data);
		},
		onNextBtn () {
			if (this.isUserLoggedIn) {
				this.isCheckoutSection = true;
			} else {
				this.$store.commit('showCheckoutModal', false);
				this.$store.commit('showLoginModal', true);
			}
		},
		onPrevBtn () {
			this.isCheckoutSection = false;
		}
	}
}
</script>

<style lang="scss" scoped>
  .modal-card {
    width: 95%;
  }
  .modal-card-foot {
    justify-content: flex-end;
  }
  .product {
	  position: relative;
  }
  .button.is-info.is-inverted {
	  text-align: right;
	  position: absolute;
	  right: 0;
	  bottom: 0;
	  color: #613916;
  }
  .intro {text-align: center; margin-bottom: 20px;}
  .product {
	  border-top: 1px solid #ccc;
	  border-bottom: 1px solid #ccc;
	  padding: 5px;
  }
  </style>