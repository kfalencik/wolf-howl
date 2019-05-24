<template>
  <div class="page-wrapper">
    <Hero />
    <PageTitle title="New Arrivals" />
    <ProductsGrid collection="new" />
  </div>
</template>

<script>
import ProductsGrid from '~/components/ProductsGrid.vue';
import Hero from '~/components/Hero.vue';
import PageTitle from '~/components/PageTitle.vue';

export default {
  components: {
    ProductsGrid,
    Hero,
    PageTitle
  },
  mounted: function(){
    this.$store.dispatch('getProducts');
  }
}
</script>
