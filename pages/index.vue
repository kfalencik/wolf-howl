<template>
  <main>
    <mainNav />

    <transition-group name="fade">
      <div :key="1" v-if="viewLoading">
          <div class="loading"><img src="~/assets/img/loading.svg" /></div>
      </div>

      <div :key="2" v-else>
            <template v-if="currentView == 'index'">
              <ProductsGrid />
            </template>

            <template v-if="currentView == 'grid'">
                <ProductsGrid />
            </template>

            <template v-if="currentView == 'product'">
                <Product />
            </template>
      </div>
    </transition-group>
  </main>
</template>

<script>
import MainNav from '~/components/MainNav.vue';
import ProductsGrid from '~/components/ProductsGrid.vue';
import Product from '~/components/Product.vue';


export default {
  components: {
    MainNav,
    ProductsGrid,
    Product
  },
  mounted: function(){
    this.$store.dispatch('getProducts');
  },
  computed: {
    currentView () {
      return this.$store.state.currentView
    },
    viewLoading () {
      return this.$store.state.viewLoading
    },
  },
  watch: {
    currentView () {
      return this.$store.dispatch('getProducts');
    }
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
