<template>
  <div class="page-top">
    <header class="nav">
      <div class="container">
        <div class="row">
          <div class="nav__logo col-sm-12 col-md-4 col-lg-6">
            <nuxt-link to="/">
              <!-- <img height="50" src="~/assets/img/logo.png" alt="Logo" /> -->
              Wolf howl
            </nuxt-link>
          </div>
          <div class="nav__menu col-sm-12 col-md-8 col-lg-6">
            <nav class="nav__menu-main">
              <ul>
                <li><nuxt-link to="/new">New</nuxt-link></li>
                <li><nuxt-link to="/men">Men</nuxt-link></li>
                <li><nuxt-link to="/women">Women</nuxt-link></li>
                <li><a @click.prevent.stop="showBag()"><i class="fas fa-shopping-bag"></i> {{bagCount}}</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>

    <Bag />
  </div>
</template>

<script>
  import Bag from '~/components/Bag.vue';

  export default {
    data: function(){
      return{

      }
    },
    components: {
      Bag
    },
    mounted: function() {
      this.$store.dispatch('getBag');
    },
    computed: {
      bag () {
        return this.$store.state.bag
      },
      bagCount () {
        return this.$store.state.bagCount
      },
      bagToggle () {
        return this.$store.state.bagToggle
      }
    },
    methods: {
      showBag: function(){
        this.$store.commit('setValue', ['bagToggle', !this.bagToggle]);
      }
    }
  }
</script>

<style lang="scss" scoped>
.nav {
  text-transform: uppercase;
  position: fixed;
  overflow: hidden;
  background: #fff;
  top: 0;
  left: 0;
  z-index: 30;
  width: 100%;
  box-shadow: 0 0 10px rgba(0,0,0,0.2);

  $root: &;

  ul{
    padding: 0;

    li{
      margin: 0;
      list-style: none;
    }
  }

	.row{
		align-items: center;
	}

	a{
		text-transform: uppercase;
		color: #000;
		font-weight: bold;
	}

	&__logo {
		font-family: $font-title;
		font-size: 40px;
		height: 80px;
    display: flex;
    align-items: center;

    @media (max-width: $breakpoint-md){
      justify-content: center;
      flex-direction: column;
    }

    img{
      vertical-align: middle;
      margin-right: 10px;
    }
  }

	&__menu-main{
    text-align: right;

		ul{
      @media (max-width: $breakpoint-md){
        text-align: center;
      }

			li{
				display: inline-block;

				a{
					position: relative;
					display: inline-block;
					height: 80px;
					padding: 0 35px;
          line-height: 80px;
          font-size: 14px;

          @media (max-width: $breakpoint-sm){
            padding: 0 20px;
          }

					&:hover{
						color: #fff;
						background: $tertiary-color;
					}
				}
			}
		}
	}
}
</style>
