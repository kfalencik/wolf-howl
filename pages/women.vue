<template>
  <div class="page-wrapper">
    <PageTitle title="Women" />
    <ProductsGrid collection="women" />
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
