<template>
  <div class="product-view container">
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
    computed: {
      product () {
        return this.$store.state.product
      },
      selectedProduct () {
        return this.$store.state.selectedProduct
      }
    },
    methods: {
      selectSize(size){
        this.$store.commit('setSize', size);
      }
    }
  }
</script>

<style lang="scss" scoped>
.product-view{
	padding: 50px 0;

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
