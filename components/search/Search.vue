<template>
	<div class="control has-icons-left">
		<input
			class="input is-rounded"
			type="text"
			v-model="value"
			:placeholder="placeholder"
			@keyup="search(value)"
		>
		<span class="icon is-small is-left">
			<i class="fa fa-search"></i>
		</span>
	</div>
</template>

<script>
export default {
  name: 'search',
	data () {
		return {
			value: ''
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
		search (value) {
			if (value.length > 0) {
				this.$store.commit('setHasUserSearched', true);
				this.$store.commit('setProductTitleSearched', value);
				console.log('search()');
			} else {
				this.$store.commit('setHasUserSearched', false);
				this.$store.commit('setProductTitleSearched', '');
			}
		}
	}
}
</script>

<style lang="scss" scoped>
  .control {
    width: 80%;
	margin-top: 10px;
  }
  .fa-search{
    width: 16px;
    height: 13px;
    background-size: 16px;
    display: inline-block;
	background: url('/images/search.svg') no-repeat;
	}
  </style>