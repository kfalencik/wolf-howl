<template>
  <footer :class="{'u-bg-black': true, 'active': footer}">
    <div class="wolf-howl-tag" @click="toggleFooter">
      <img src="~/assets/img/logo.png" alt="Wolf Howl" />
    </div>
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <h3 class="u-white">HELP & INFORMATION</h3>
          <p><a href="#">Help</a></p>
          <p><a href="#">Track Order</a></p>
          <p><nuxt-link to="/help-and-support/delivery-and-returns">Delivery & Returns</nuxt-link></p>
        </div>
        <div class="col-md-4">
          <h3 class="u-white">ABOUT WOLF HOWL</h3>
          <p><a href="#">About Us</a></p>
          <p><a href="#">Corporate Responsibility</a></p>
          <p><a href="#">Investors Site</a></p>
        </div>

        <div class="col-md-4">
          <h3 class="u-white">OUR SOCIAL MEDIA</h3>
          <p><a href="#"><i class="fab fa-facebook-square"></i> Facebook</a></p>
          <p><a href="#"><i class="fab fa-instagram"></i> Instagram</a></p>
          <p><a href="#"><i class="fab fa-youtube"></i> YouTube</a></p>
        </div>
      </div>

      <div class="row copyright">
        <div class="col-md-6">
          <p class="u-text-small u-white">© Wolfhowl 2019</p>
        </div>
        <div class="col-md-6">
          <div class="payment-methods">
            <div class="payment-methods__item"><img src="~/assets/img/visa-png.png" alt="visa"></div>
            <div class="payment-methods__item"><img src="~/assets/img/mastercard-png.png" alt="mastercard"></div>
            <div class="payment-methods__item"><img src="~/assets/img/paypal-png.png" alt="paypal"></div>
            <div class="payment-methods__item"><img src="~/assets/img/american-express-png.png" alt="americanexpress"></div>
            <div class="payment-methods__item"><img src="~/assets/img/maestro-png.png" alt="maestro"></div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>

  export default {
    data: function(){
      return{
        footer: false
      }
    },
    mounted: function(){
      const self = this;
      document.querySelector('body').addEventListener('click', function(){
        self.footer = false;
      });

      document.querySelector('footer').addEventListener('click', function(e){
        e.stopPropagation();
      });
    },
    methods: {
      toggleFooter: function(){
        this.footer = !this.footer;
      }
    }
  }
</script>

<style <style lang="scss" scoped>
  footer{
    padding: 25px 0;
    position: fixed;
    width: 100%;
    transform: translateY(100%);
    transition: all .5s ease-in-out;
    left: 0;
    bottom: 0;
    z-index: 55;

    @media (max-width: $breakpoint-md){
      position: relative;
      transform: translateY(0);
      z-index: 5;
    }

    &.active{
      transform: translateY(0);
    }

    .wolf-howl-tag{
      position: absolute;
      top: -120px;
      right: 50px;
      background: #000;
      width: 80px;
      text-align: center;
      height: 120px;
      cursor: pointer;

      @media (max-width: $breakpoint-md){
        position: relative;
        top: auto;
        right: auto;
        height: auto;
        width: 100%;
        cursor: initial;
        padding-bottom: 20px;
      }

      img{
        width: 50px;
        margin-top: 15px;
      }
    }

    h3{
      margin-bottom: 15px;
      padding-bottom: 5px;
      border-bottom: 1px solid #fff;
    }

    p{
      margin: 10px 0;
    }

    a:hover{
      border-bottom: 1px solid #fff;
    }

    .payment-methods{
      text-align: right;

      @media (max-width: $breakpoint-md){
        text-align: center;
      }

      &__item{
        width: 100%;
        max-width: 40px;
        display: inline-block;
      }
    }

    .copyright{
      margin-top: 35px;

      @media (max-width: $breakpoint-md){
        text-align: center;
      }
    }
  }
</style>
