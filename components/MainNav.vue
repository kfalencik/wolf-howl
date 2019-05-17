<template>
  <header>
    <div class="container">
      <div class="row nav">
        <div class="nav__logo" @click="activateView('index')">
          <h1>Wolf Howl</h1>
        </div>
        <div class="nav__menu">
          <nav class="nav__menu-main">
            <ul>
              <li><span @click="activateView('new')">New</span></li>
              <li><span @click="activateView('man')">Man</span></li>
              <li><span @click="activateView('woman')">Woman</span></li>
              <li><span @click="showBag()"><i class="fas fa-shopping-bag"></i> {{bag.length}}</span></li>
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
    },
    methods: {
      activateView: function(view){
        if(view == 'new' || view == 'man' || view == 'woman'){
          let productFilter = view;
          this.$store.commit('setValue', ['productFilter', productFilter]);
          view = 'grid';
        }
        this.$store.commit('setView', view);
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
    margin-bottom: 50px;
    padding: 0 40px;

	$root: &;

	.row{
		align-items: center;
	}

	span{
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

				span{
					position: relative;
					display: inline-block;
					height: 80px;
					padding: 0 35px;
          line-height: 80px;
          cursor: pointer;
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
