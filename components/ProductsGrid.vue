<template>
  <transition-group name="fade">
    <div :key="'products'" class="container products-grid" v-if="products">
      <div class="row">
        <div class="products-grid__item col-lg-4 col-md-6 col-sm-12" v-for="product in products.slice(0, limit)" :key="product.id">
          <div class="products-grid__item-image">
            <nuxt-link :title="product.title" :to="{ name: 'products-id', params: { id: product.handle }}">
              <img :src="product.images[0].src" :alt="product.title" />
            </nuxt-link>
          </div>
          <div class="products-grid__item-title u-text-center">{{ product.title }}</div>
          <div class="products-grid__item-price u-text-center">£{{product.variants[0].price}}</div>
        </div>
      </div>
    </div>

    <Loading key="'loading'" v-else />
  </transition-group>
</template>

<script>
import Loading from '~/components/Loading.vue';

  export default {
    data: function(){
      return{
        products: false,
      }
    },
    components: {
      Loading
    },
    props: ['collection', 'limit'],
    mounted: function(){
      this.$store.dispatch('getProducts');
      this.$store.dispatch('getCollections');
    },
    computed: {
      collections () {
        return this.$store.state.collections
      }
    },
    watch: {
      collections: function(){
        const self = this;
        if(self.collection){
          self.collections.forEach(function(collection) {
            if(collection.handle == self.collection) {
              self.products = collection.products;
            }
          });
        }
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
    padding-top: 25px;

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
      font-weight: bold;
    }
  }
</style>
