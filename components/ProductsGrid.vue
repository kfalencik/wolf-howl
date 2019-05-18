<template>
  <div class="container products-grid">
    <div class="row">
      <div class="col-sm-12"><h2 class="h2">New Arivals</h2></div>
    </div>
    <div class="row">
      <div class="products-grid__item col-lg-4 col-md-6 col-sm-12" v-for="product in products" :key="product.id">
        <div class="products-grid__item-image" @click="selectProduct(product.id)"><img :src="product.images[0].src" /></div>
        <div class="products-grid__item-title">{{ product.title }} <span class="products-grid__item-price">£{{product.variants[0].price}}</span></div>
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
    padding-top: 50px;
    padding-bottom: 50px;

    &__item{
      cursor: pointer;
      margin-bottom: 50px;
    }

    &__item-image{
      width: 100%;
      overflow: hidden;
      border: 10px solid #000;

      img{
        transition: all .5s ease;
        display: block;
      }

      &:hover{

        img{
          transform: scale(1.2);
        }
      }
    }

    &__item-title{
      margin-top: 10px;
    }

    &__item-price{
      float: right;
    }
  }
</style>
