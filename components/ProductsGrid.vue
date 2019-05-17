<template>
  <div class="products-grid">
      <div class="products-grid__item" v-for="product in products" :key="product.id">
        <div class="products-grid__item-image" @click="selectProduct(product.id)"><img width="100" :src="product.images[0].src" /></div>
        <div class="products-grid__item-title">{{ product.title }}</div>
      </div>
  </div>
</template>

<script>
  export default {
    data: function(){
      return{
      }
    },
    mounted: function(){
      this.$store.dispatch('getProducts');
    },
    computed: {
      products () {
        return this.$store.state.products
      }
    },
    methods: {
      selectProduct: function(product) {
        this.$store.commit('setProduct', product);
        this.$store.commit('setView', 'product');
      }
    }
  }
</script>
