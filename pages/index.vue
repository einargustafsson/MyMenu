<template>
  <div>
    <VueAirtable :columns="['Name', 'Description', 'Type', 'Price']"></VueAirtable>
    <VmProductsList></VmProductsList>
  </div>
</template>

<script>
import VmProductsList from '@/components/products_list/ProductsListContainer';
import VueAirtable from '@/components/airtable/AirTable';

export default {
  name: 'index',
  components: {
    VmProductsList,
    VueAirtable
  }
};
</script>
