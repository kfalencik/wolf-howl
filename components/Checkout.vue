<template>
  <div class="checkout">
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <div class="checkout__wrapper">
            <table class="checkout__products">
              <tbody>
                <tr class="checkout__products-item" :key="product.id" v-for="(product, index) in bag">
                  <td>{{ product.title }}</td> <td>{{ product.size }}</td> <td> £{{ product.price }} x {{product.quantity}}</td> <td>£{{ productTotal(product.quantity, product.price) }}</td>
                </tr>
              </tbody>
            </table>

            <div class="checkout__total">
              Your total is £{{ total }}
            </div>

            <div class="checkout__buttons">
              <button class="btn btn--primary">Pay securely</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  mounted: function(){
    const self = this;
    self.$store.commit('setValue', ['bagToggle', false]);

    document.querySelector('body').addEventListener('click', function(){
      self.$store.commit('setValue', ['bagToggle', false]);
    });

    document.querySelector('.bag').addEventListener('click', function(e){
      e.stopPropagation();
    });
  },
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
    productTotal: function(quantity, price){
      return quantity * price;
    }
  }
}
</script>

<style lang="scss" scoped>
  .checkout{

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
        padding: 15px 15px;
      }
    }

    &__total{
      margin-top: 35px;
      font-size: 20px;
      text-align: right;
    }

    &__buttons{
      margin-top: 35px;
      text-align: right;
    }
  }
</style>
