<template>
  <div>
    <Hero />
    <ProductsGrid />
  </div>
</template>

<script>
import ProductsGrid from '~/components/ProductsGrid.vue';
import Hero from '~/components/Hero.vue';

export default {
  components: {
    ProductsGrid,
    Hero
  },
  mounted: function(){
    this.$store.dispatch('getProducts');
  }
}
</script>
