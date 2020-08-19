<template>
    <a @click="filterByTag(product.type); toggleClass()" :class="[isActive ? 'active' : 'notactive']">{{product.type}}</a>
</template>

<script>


export default {
  name: 'tag',
  props: ['product'],
  

  data () {
    return {
      tag: '',
      isActive: false
    }
  },

computed: {
		
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
    toggleClass: function() {

         var actives = document.getElementsByClassName ("active");
        for (var i=0; i<actives.length; i++) {
            actives[i].className = "notactive";
            
        }
        this.isActive = !this.isActive;
        /*
        if(!this.isActive){
            console.log('this button was not active');
            var actives = document.getElementsByClassName ("active");
            for (var i=0; i<actives.length; i++) {
                actives[i].className = "notactive";
                
            }
            this.isActive = !this.isActive;
        } else {
            console.log('this button was active');
            this.$store.commit('setHasUserFiltered', false);
            this.$store.commit('setProductTagFiltered', '');
            this.isActive = !this.isActive;
        }
        console.log("this status is now: " + this.isActive);
        */
            
    }
  }
}
</script>