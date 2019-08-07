<template>
  <div class="page-wrapper">
    <Product :productid="id" />
  </div>
</template>

<script>
import Product from '~/components/Product.vue';

export default {
  components: {
    Product
  },
  props: ['id'],
  data: function(){
    return{
    }
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
