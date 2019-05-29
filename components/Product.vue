<template>
  <section class="product-view">
		<div class="container">
			<div class="row">
				<div class="col-sm-12">
					<button class="btn btn--secondary" @click.prevent="changeView('index')"><i class="fas fa-undo-alt"></i> Go back</button>
				</div>
    	</div>
			<div class="row">
				<div class="col">
					<div class="product-view__wrapper">
						<div v-if="product" class="product-view__item">
							<div class="product-view__item-image">
								<img :src="product.images[0].src">
							</div>

							<div class="product-view__item-details">
								<h2 class="h2">{{product.title}}</h2>
								<div class="product-view__item-description">{{product.description}}</div>
								<div class="product-view__item-price">£{{selectedProduct.price}}</div>
								<div class="product-view__item-sizes">
									<div v-for="(size, sizeIndex) in product.variants" :key="size.id" :class="{'product-view__item-sizes-item': true, 'product-view__item-sizes-item--selected': selectedProduct && size.id == selectedProduct.id, 'product-view__item-sizes-item--disabled': !size.available}"><button @click="selectSize(sizeIndex)">{{size.title}}</button></div>
								</div>
								<div class="product-view__item-add"><button :class="{'btn btn--primary': true, 'btn--disabled': selectedProduct == null }">Add +</button></div>
							</div>
						</div>
					</div>
  <div class="product-view container">
    <div class="row">
			<div class="col">
				<div class="product-view__wrapper">

          <transition-group name="fade">
            <div :key="'product'" v-if="product" class="product-view__item" itemscope itemtype="http://schema.org/Product">
              <div class="product-view__item-image">
                <img item-prop="image" :src="product.images[0].src" :alt="product.title">
              </div>

              <div class="product-view__item-details">
                <h2 itemprop="name" class="h2">{{product.title}}</h2>
                <div itemprop="description" class="product-view__item-description">{{product.description}}</div>
								<meta itemprop="priceCurrency" content="GBP" />
                <div class="product-view__item-price">£<span itemprop="price">{{selectedProduct.price}}</span></div>
                <div class="product-view__item-sizes">
                  <div v-for="(size, sizeIndex) in product.variants" :key="size.id" :class="{'product-view__item-sizes-item': true, 'product-view__item-sizes-item--selected': selectedProduct && size.id == selectedProduct.id, 'product-view__item-sizes-item--disabled': !size.available}"><button @click="selectSize(sizeIndex)">{{size.title}}</button></div>
                </div>
                <div class="product-view__item-add"><button :class="{'btn btn--primary': true, 'btn--disabled': selectedProduct == null }">Add +</button></div>
              </div>
            </div>

            <Loading key="'loading'" v-else />
          </transition-group>

				</div>
			</div>
		</div>
  </section>
</template>

<script>
  import Loading from '~/components/Loading.vue';

  export default {
    data: function(){
      return{
        product: false,
        selectedProduct: false
      }
    },
    components: {
      Loading
    },
		props: ['productid'],
    computed: {
      products: function() {
        return this.$store.state.products;
      }
    },
    watch: {
      products: function(){
        const self = this;

        self.products.forEach(function(product) {
          if(product.handle == self.productid) {
            self.product = product;
            self.selectedProduct = product.variants[0];
          }
        });
      }
    },
    methods: {
      selectSize(size){
        this.selectedProduct = this.product.variants[size];
      }
    }
  }
</script>

<style lang="scss" scoped>
.product-view{
<<<<<<< HEAD
=======
  padding-top: 50px;
  padding-bottom: 50px;
>>>>>>> aebdca83f8e75d76aae51fc07e955d86edef1043

	&__item{
		overflow: hidden;
		max-width: 1400px;
		margin: 0 auto;
	}

	&__item-image{
		width: calc(100% - 580px);
		max-width: 680px;
		position: relative;
		text-align: center;
		float: left;

		&::before{
			content: '';
			width: 540px;
			height: 540px;
			border-radius: 100%;
			position: absolute;
			background: $primary-color;
			z-index: 0;
			left: 50%;
			top: 20px;
			transform: translateX(-50%);
			top: 20px;
		}

		img{
			max-width: 680px;
			position: relative;
			margin: 0 auto;
			display: block;
		}

		&::after{
			content: '';
			position: absolute;
			width: 35px;
			height: 35px;
			background: $primary-color;
			z-index: 20;
			display: block;
			top: 15px;
			border-radius: 100%;
			right: 50px;
		}
	}

	&__item-details{
		width: 500px;
		float: right;
		overflow: hidden;
		margin-top: 5%;
		position: relative;
		margin-right: 80px;
	}

	&__item-price{
		color: $primary-color;
		font-size: 28px;
		margin: 20px 0 0;
	}

	&__item-sizes{
		float: left;
		width: calc(100% - 120px);
		margin: 35px 0;
		overflow: hidden;
	}

	&__item-sizes-item{
		position: relative;
		float: left;
		margin-right: 25px;

		&::before{
			content: '';
			display: block;
			width: 20px;
			height: 20px;
			position: absolute;
			z-index: 0;
			background: $primary-color;
			left: 50%;
			border-radius: 100%;
			transition: all .5s ease;
			transform: translateX(-50%);
			opacity: 0;
			top: 2px;
		}

		&:hover, &--selected{

			&::before{
				opacity: 0.75;
			}
		}

		button{
			background: none;
			border: none;
			text-transform: uppercase;
			font-weight: bold;
			padding: 0;
			outline: none;
			margin: 0;
			font-size: 16px;
			font-family: $font-body;
			cursor: pointer;
			position: relative;
			z-index: 2;
		}

		&--disabled{

			&:hover{

				&::before{
					opacity: 0;
				}
			}

			button{
				color: #aaa;
			}
		}
	}

	&__item-description{
		clear: both;
	}
}
</style>
