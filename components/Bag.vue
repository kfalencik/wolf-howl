<template>
  <div :class="{'bag': true, 'active': bagToggle}">
    <div class="bag__wrapper">
      <h3 class="h2">Your bag <span @click="closeBag" class="bag__close u-float-right"><i class="fa fa-times"></i></span></h3>
      <table class="bag__products">
        <tbody>
          <tr class="bag__products-item" :key="'bag-item-' + index" v-for="(product, index) in bag">
            <td><i class="fas fa-tshirt"></i></td><td>{{ product.title }}</td> <td>{{ product.size }}</td> <td> £{{ product.price }} x {{product.quantity}}</td> <td>£{{ productTotal(product.quantity, product.price) }}</td>
          </tr>
        </tbody>
      </table>

      <div class="bag__total">
        Your total is £{{ total }}
      </div>

      <div class="bag__buttons">
        <nuxt-link to="/checkout" class="btn btn--primary">Go to secure checkout</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    bag () {
      return this.$store.state.bag
    },
    bagToggle () {
      return this.$store.state.bagToggle
    },
    total () {
      let bag = this.bag;
      let total = 0;
      bag.forEach(function(product){
        let quantity = product.quantity;
        total += quantity * product.price;
      });

      return total;
    }
  },
  methods: {
    closeBag: function(){
      this.$store.commit('setValue', ['bagToggle', false]);
    },
    productTotal: function(quantity, price){
      return quantity * price;
    }
  }
}
</script>

<style lang="scss" scoped>
  .bag{
    position: fixed;
    right: 0;
    top: 0;
    height: 100vh;
    width: 800px;
    max-width: 100%;
    background: $tertiary-color;
    color: #fff;
    padding: 50px;
    z-index: 200;
    transform: translateX(100%);
    transition: all .5s ease-in;
    overflow: auto;

    @media (max-width: $breakpoint-md){
      padding: 25px;
    }

    &.active{
      transform: translateX(0);
    }

    &__close{
      cursor: pointer;
    }

    &__wrapper{
      position: relative;
      z-index: 999;
    }

    &__products{
      width: 100%;
    }

    &__products-item{
      border-bottom: 2px solid #000;
      background: #fff;
      color: #000;

      &:nth-child(odd){
        background: #000;
        color: #fff;
        border-color: #fff;
      }

      td{
        padding: 15px 10px;
      }
    }

    &__total{
      margin-top: 35px;
      font-size: 20px;
    }

    &__buttons{
      margin-top: 35px;
    }
  }
</style>
