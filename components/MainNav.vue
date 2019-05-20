<template>
  <header class="nav">
    <div class="container">
      <div class="row nav">
        <div class="nav__logo">
          <nuxt-link to="/"><h1>Wolf Howl</h1></nuxt-link>
        </div>
        <div class="nav__menu">
          <nav class="nav__menu-main">
            <ul>
              <li><nuxt-link to="/new">New</nuxt-link></li>
              <li><nuxt-link to="/men">Men</nuxt-link></li>
              <li><nuxt-link to="/women">Women</nuxt-link></li>
              <li><a @click.prevent="showBag()"><i class="fas fa-shopping-bag"></i> {{bag.length}}</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
  export default {
    data: function(){
      return{

      }
    },
    computed: {
      bag () {
        return this.$store.state.bag
      }
    }
  }
</script>

<style lang="scss" scoped>
  .nav {
    text-transform: uppercase;
    position: relative;
    overflow: hidden;
    background: #fff;
    padding: 0 40px;

	$root: &;

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
    justify-content: center;
    margin-right: 100px;
	}

	&__menu-main{

		ul{
			overflow: hidden;

			li{
				float: left;

				a{
					position: relative;
					display: inline-block;
					height: 80px;
					padding: 0 35px;
          line-height: 80px;
          font-size: 14px;

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
