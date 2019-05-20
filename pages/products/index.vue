<template>
  <div>
    <PageTitle title="New Arrivals" />
    <ProductsGrid collection="new" />
  </div>
</template>

<script>
import ProductsGrid from '~/components/ProductsGrid.vue';
import PageTitle from '~/components/PageTitle.vue';

export default {
  components: {
    ProductsGrid,
    PageTitle
  },
  mounted: function(){
    this.$store.dispatch('getProducts');
  }
}
</script>
