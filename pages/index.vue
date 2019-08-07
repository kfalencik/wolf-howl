<template>
  <div class="page-wrapper">
    <MarbleHero />
    <PageTitle title="New Arrivals" />
    <ProductsGrid collection="new" limit="6" />
    <div class="u-text-center">
      <nuxt-link to="/new" class="btn btn--secondary">See all new arrivals</nuxt-link>
    </div>
  </div>
</template>

<script>
import ProductsGrid from '~/components/ProductsGrid.vue';
import Hero from '~/components/Hero.vue';
import MarbleHero from '~/components/MarbleHero.vue';
import PageTitle from '~/components/PageTitle.vue';

export default {
  components: {
    ProductsGrid,
    Hero,
    PageTitle,
    MarbleHero
  },
  mounted: function(){
    this.$store.dispatch('getProducts');
  }
}
</script>
