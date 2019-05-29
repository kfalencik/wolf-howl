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

<style lang="scss" scoped>
  main{
    background: linear-gradient($secondary-color 0%,  #fff 40%,  #fff 100%);
    min-height: calc(100vh - 145px);
    padding-top: 80px;

    .loading{
      position: fixed;
      background: $secondary-color;
      z-index: 999;
      left: 0;
      top: 80px;
      right: 0;
      bottom: 0;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
</style>
