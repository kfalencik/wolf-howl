<template>
  <div class="container">
    <div class="row">
      <div class="col products-grid">
        <div class="row">
          <div class="products-grid__item col-lg-3 col-md-6 col" v-for="product in products" :key="product.id">
            <div class="products-grid__item-image" @click="selectProduct(product.id)"><img :src="product.images[0].src" /></div>
            <div class="products-grid__item-title">{{ product.title }}</div>
          </div>
        </div>
      </div>
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

<style lang="scss" scoped>
  .products-grid{

    &__item{
      cursor: pointer;
    }
    &__item-image{
      width: 100%;
      overflow: hidden;

      img{
        transition: all .5s ease;
      }

      &:hover{

        img{
          transform: scale(1.2);
        }
      }
    }
  }
</style>
