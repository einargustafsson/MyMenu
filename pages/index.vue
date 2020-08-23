<template>
  <div>
    
    <VmProductsList></VmProductsList>
  </div>
</template>

<script>
import VmProductsList from '@/components/products_list/ProductsListContainer';


export default {
  head() {
    return {
      script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }],
    };
  },
  name: 'index',
  components: {
    VmProductsList
  }
};
</script>
