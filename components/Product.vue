<template>
  <div class="product-view container">
    <div class="product-view__wrapper">
      <transition-group name="fade">
        <div :key="'product'" v-if="product" class="product-view__item " itemscope itemtype="http://schema.org/Product">
          <div class="row">
            <div class="col-sm-12 col-lg-6">
              <div class="product-view__item-images">
                <div class="product-view__item-images-item">
                  <img item-prop="image" :src="product.images[0].src" :alt="product.title">
                </div>
                <div class="product-view__item-images-item">
                  <img item-prop="image" :src="product.images[1].src" :alt="product.title">
                </div>
              </div>
            </div>

            <div class="col-sm-12 col-lg-6">
              <div class="product-view__item-tag">
                <div class="product-view__item-tag-details">
                  <h2 itemprop="name" class="h2">{{product.title}}</h2>
                  <div class="product-view__item-tag-sizes">
                    <div v-for="(size, sizeIndex) in product.variants" :key="size.id" :class="{'product-view__item-tag-sizes-item': true, 'product-view__item-tag-sizes-item--selected': selectedProduct && size.id == selectedProduct.id, 'product-view__item-tag-sizes-item--disabled': !size.available}"><button @click="selectSize(sizeIndex)">{{convertSize(size.title)}}</button></div>
                  </div>
                  <div class="product-view__item-tag-price">£<span itemprop="price">{{selectedProduct.price}}</span></div>
                  <div class="product-view__item-tag-add"><button @click="addToBag" :class="{'btn btn--primary': true, 'btn--disabled': selectedProduct == null }">Add to bag</button></div>
                </div>
              </div>

              <!-- <div class="product-view__item-details">
                <h2 itemprop="name" class="h2">{{product.title}}</h2>
                <div itemprop="description" class="product-view__item-description">{{product.description}}</div>
                <meta itemprop="priceCurrency" content="GBP" />
                <div class="product-view__item-price">£<span itemprop="price">{{selectedProduct.price}}</span></div>
                <div class="product-view__item-sizes">
                  <div v-for="(size, sizeIndex) in product.variants" :key="size.id" :class="{'product-view__item-sizes-item': true, 'product-view__item-sizes-item--selected': selectedProduct && size.id == selectedProduct.id, 'product-view__item-sizes-item--disabled': !size.available}"><button @click="selectSize(sizeIndex)">{{size.title}}</button></div>
                </div>
                <div class="product-view__item-add"><button @click="addToBag" :class="{'btn btn--primary': true, 'btn--disabled': selectedProduct == null }">Add +</button></div>
              </div> -->
            </div>
          </div>
        </div>

        <Loading key="'loading'" v-else />
      </transition-group>
    </div>
  </div>
</template>

<script>
  import Loading from '~/components/Loading.vue';

  export default {
    data: function(){
      return{
        product: false,
        selectedProduct: false,
        structuredData: {
          "@context": "http://schema.org/",
          "@type": "Product"
        }
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
        if (this.product.variants[size].available) {
          console.log(this.product.variants[size]);
          this.selectedProduct = this.product.variants[size];
        }
      },
      addToBag(){
        this.$store.commit('addToBag', [this.selectedProduct.id, this.product.id, 1, this.selectedProduct.title, this.product.title, this.selectedProduct.price]);
      },
      convertSize: function(size){
        switch(size){
          case 'Extra Small':
            return 'XS';
          case 'Small':
            return 'S';
          case 'Medium':
            return 'M';
          case 'Large':
            return 'L';
          case 'Extra Large':
            return 'XL';
          case 'Extra Extra Large':
            return 'XXL';
        }
      }
    },
    head () {
      return {
        script: [
          { type: 'application/ld+json', src: JSON.stringify(this.structuredData) }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
.product-view{
  padding-top: 50px;
  padding-bottom: 50px;

  @media (max-width: $breakpoint-lg){
    .col-sm-12:first-child{
      order: 2;
    }
    .col-sm-12:last-child{
      order: 1;
    }
  }

	&__item-image{
		position: relative;
		text-align: center;
    overflow: hidden;
    border: 5px solid #000;

		img{
      width: 100%;
      height: 400px;
      object-fit: cover;
			position: relative;
			margin: 0 auto;
      display: block;
      transition: all .5s ease-in-out;

      &:first-child{
        z-index: 5;
        border-bottom: 5px solid #000;
      }

      &:hover{
        transform: scale(1.5);
      }
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
		overflow: hidden;
		position: relative;
    padding: 35px 50px;
    background: #fff;

    @media (max-width: $breakpoint-md){
      padding: 35px 20px;
    }
	}

	&__item-price{
		color: $primary-color;
		font-size: 28px;
		margin: 20px 0 0;
	}

	&__item-sizes{
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

    &:last-child{
      margin-right: 0;
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

  &__item-tag{
    background: url(~assets/img/tag.png) no-repeat;
    background-size: 100%;
    width: 300px;
    max-width: 100%;
    height: 770px;
    text-align: center;
    margin: 0 auto;
    transform: translateY(100%);
    animation: slidedown 1s 1 forwards;

    @media (max-width: $breakpoint-md){
      animation: slidedownMobile 1s 1 forwards;
    }
  }

  &__item-tag-details{
    width: 300px;
    max-width: 100%;
    height: 500px;
    padding-top: 500px;

    h2{
      margin-bottom: 0;
    }
  }

  &__item-tag-sizes{
    overflow: hidden;
    border: 1px solid #000;
    width: 122px;
    margin: 0 auto 20px;
  }

  &__item-tag-sizes-item{
    float: left;

    button{
      background: none;
      border: 2px solid #000;
      width: 30px;
      height: 30px;
      cursor: pointer;
      font-weight: bold;
      padding: 0;
    }

    &--selected{
      button{
        background: rgba(255,255,255,0.75);
      }
    }

    &--disabled{
      position: relative;

      &::after{
        content: '/';
        font-size: 35px;
        position: absolute;
        top: -15px;
        left: 10px;
      }
    }
  }

  &__item-tag-price{
    font-size: 25px;
  }

  &__item-tag-add{
    margin-top: 15px;

    .btn{
      background: none;
      color: #000;
      border: 2px solid #000;
      max-width: 220px;
    }
  }
}

@keyframes slidedown {
  0%{
    transform: translateY(-100%);
  }
  100%{
    transform: translateY(-100px);
  }
}

@keyframes slidedownMobile {
  0%{
    transform: translateY(-100%);
  }
  100%{
    transform: translateY(-150px);
  }
}
</style>
