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
					<div class="payment-option" id="payment-option">
						<ul>
							<li class="aur" href="#" @click="copyAur"><img src="/images/aur.png" alt="Aur"><img src="/images/kass.png" alt="Kass"><input v-on:focus="$event.target.select()" ref="aur" readonly :value="aurNum"/><button>copy</button></li>
							<li class="bank" href="#" @click="copyISB"><img src="/images/isb.png" alt="ISB"><input v-on:focus="$event.target.select()" ref="isb" readonly :value="isbNum"/><button>copy</button></li>
							<li class="bnb" href="#" @click="copyBNB"><img src="/images/bnb.png" alt="BNB"><input v-on:focus="$event.target.select()" ref="bnb" readonly :value="bnbNum"/><button>copy</button></li>
							<li class="eth" href="#" @click="copyETH"><img src="/images/ethereum.png" alt="ETH"><input v-on:focus="$event.target.select()" ref="eth" readonly :value="ethNum"/><button>copy</button></li>
							<!--<li class="kass"><a href="#" v-on:click="paymentInfo = 'Kass to : 858 1884'"><img src="/images/kass.png" alt="Kass">858 1884</a></li>
							<li class="bank"><a href="#" v-on:click="paymentInfo = 'Transfer to : 515-26-1108 / 110879-3269'"><img src="/images/isb.png" alt="Millifæra">515-26-1108 / 110879-3269</a></li>
							<li class="ethereum"><a href="#" v-on:click="paymentInfo = 'Aur amount to : 858 1884'"><img src="/images/ethereum.png" alt="Ethereum"></a></li>
							<li class="bnb"><a href="#" v-on:click="paymentInfo = 'Aur amount to : 858 1884'"><img src="/images/bnb.png" alt="BNB"></a></li>
							<li class="bitcoin"><a href="#" v-on:click="paymentInfo = 'Aur amount to : 858 1884'"><img src="/images/bitcoin.png" alt="Bitcoin"></a></li>
							-->
						</ul>
						 
					</div>
					
					<p class="payment-info">{{paymentInfo}}</p>
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
				<h3 v-show="products.length > 0 && !isCheckoutSection" class=" is-success">{{ $t('totalof') }} {{ buyLabel }}</h3>
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
			isCheckoutSection: false,
			paymentInfo: '...',
			aurNum: '8581884',
			kassNum: '8581884',
			isbNum: '515-26-1108 / 110879-3269',
			bnbNum: '0x764Aa76E34F6636810f8B83a6D204007DC4c2a52',
			ethNum: '0x764Aa76E34F6636810f8B83a6D204007DC4c2a52'
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
		},
		copyAur() {
			this.$refs.aur.focus();
			document.execCommand('copy');
		},
		copyKass() {
			this.$refs.kass.focus();
			document.execCommand('copy');
		},
		copyISB() {
			this.$refs.isb.focus();
			document.execCommand('copy');
		},
		copyETH() {
			this.$refs.eth.focus();
			document.execCommand('copy');
		},
		copyBNB() {
			this.$refs.bnb.focus();
			document.execCommand('copy');
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
  .payment-option img {
    width: 40px;
	}
	

	.payment-option img {
		margin: 5px 10px 5px 0;
	}
	.payment-info {
		text-align: center;
		margin-bottom: 10px;
		font-weight: 600;

	}
	.payment-option input {
		width: 80%;
    	font-size:18px;
	}
	.payment-option button{
		font-size: 18px;
	}

.payment-option ul {
		display: flex;
    flex-direction: column;
    
	}
.payment-option ul li{
		display: flex;
    align-items: center;
	justify-content: space-evenly;
	}


  </style>