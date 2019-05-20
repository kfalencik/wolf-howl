<template>
  <div>
    <PageTitle title="Men" />
    <ProductsGrid collection="t-shirts-men" />
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
