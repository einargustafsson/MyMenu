<template>
	<div class="tabs is-toggle is-toggle-rounded">
		<ul>
			 
			<li><a @click="filterByTag(''); toggleClass()" :class="[isActive ? 'active' : 'notactive']">All</a></li>	
			<li v-for="product in products" :key="product.id">
				<VmTag :product="product"></VmTag>
			</li>
			<!--
			<li @click="filterByTag(''); toggleClass()" :class="[isActive ? 'red' : 'blue']">All</li>
			<li @click="filterByTag('plates'); toggleClass()" :class="[isActive ? 'red' : 'blue']">Plates</li>
			<li @click="filterByTag('main'); toggleClass()" :class="[isActive ? 'red' : 'blue']">Mains</li>
			<li @click="filterByTag('drinks'); toggleClass()" :class="[isActive ? 'red' : 'blue']">Drinks</li>
			<li @click="filterByTag('deserts'); toggleClass()" :class="[isActive ? 'red' : 'blue']">Deserts</li>
			-->
		</ul>
	</div>
</template>

<script>

import VmTag from '../filter/Tag';

export default {
  name: 'filterByTag',
	data () {
		return {
			tag: '',
			isActive: false
		}
	},

	 components: {
      VmTag
    },

	computed: {
		placeholder () {
			if (this.$route.path === '/wishlist') {
				return 'Search in wishlist...';
			} else {
				return 'Search...';
			}
		},
		products () {
			return this.$store.state.products.reduce((seed, current) => {
				return Object.assign(seed, {
					[current.type]: current
				});
			}, {});
		}
	},

	methods: {		
		filterByTag (tag) {
			if (tag.length > 0) {
                this.$store.commit('setHasUserFiltered', true);
				this.$store.commit('setProductTagFiltered', tag);
		    } else {
                this.$store.commit('setHasUserFiltered', false);
                this.$store.commit('setProductTagFiltered', '');
            }
		},
		toggleClass(){
			var actives = document.getElementsByClassName ("active");
			for (var i=0; i<actives.length; i++) {
				actives[i].className = "notactive";
			}
			this.isActive = !this.isActive;
		}
	}
}
</script>

<style lang="scss" scoped>
  .control {
    width: 95%;
  }
  .tabs.is-toggle a:hover,
  .active {
	  background: #209cee;
	  color: white;
  }
  .tabs {margin: 15px 0 0px 0}
  </style>