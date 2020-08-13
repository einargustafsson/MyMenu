<template>
	<div class="tabs is-toggle is-toggle-rounded">
		<ul>
			<li @click="filterByTag('');">All</li>
			<li @click="filterByTag('plates');">Plates</li>
			<li @click="filterByTag('main');">Mains</li>
			<li @click="filterByTag('drinks');">Drinks</li>
			<li @click="filterByTag('deserts');">Deserts</li>
		</ul>
	</div>
</template>

<script>

export default {
  name: 'filterByTag',
	data () {
		return {
			tag: ''
		}
	},

	computed: {
		placeholder () {
			if (this.$route.path === '/wishlist') {
				return 'Search in wishlist...';
			} else {
				return 'Search...';
			}
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
		}
	}
}
</script>

<style lang="scss" scoped>
  .control {
    width: 95%;
  }
  .isActive {
	  background: blue;
	  color: white;
  }
  
  .tabs li {
	  padding: 5px; margin: 5px; border: 1px solid #ccc; cursor: pointer;
  }
  </style>