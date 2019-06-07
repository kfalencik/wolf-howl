<template>
  <div>
    <transition-group name="fade">
      <div :key="'product'" class="product-view container" v-if="product">
        <div class="product-view__wrapper">
          <div  class="product-view__item " itemscope itemtype="http://schema.org/Product">
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
                <div :class="{'product-view__item-tag': true, 'product-view__item-tag--flip': tagFlipped}">
                  <div class="product-view__item-tag-details product-view__item-tag-details--front">
                    <h2 itemprop="name" class="h2">{{product.title}}</h2>
                    <div class="product-view__item-tag-sizes">
                      <div v-for="(size, sizeIndex) in product.variants" :key="size.id" :class="{'product-view__item-tag-sizes-item': true, 'product-view__item-tag-sizes-item--selected': selectedProduct && size.id == selectedProduct.id, 'product-view__item-tag-sizes-item--disabled': !size.available}"><button @click="selectSize(sizeIndex)">{{convertSize(size.title)}}</button></div>
                    </div>
                    <div class="product-view__item-tag-price">£<span itemprop="price">{{selectedProduct.price}}</span></div>
                    <div class="product-view__item-tag-add"><button @click="addToBag" :class="{'btn btn--primary': true, 'btn--disabled': selectedProduct == null }">Add to bag</button></div>
                    <div class="product-view__item-flip"><i @click="tagFlip" class="fas fa-info-circle"></i></div>
                  </div>

                  <div class="product-view__item-tag-details product-view__item-tag-details--back">
                    <h2 itemprop="name" class="h2">{{product.title}}</h2>
                    <div itemprop="description" class="product-view__item-tag-description">{{product.description}}</div>
                    <div class="product-view__item-flip"><i @click="tagFlip" class="fas fa-undo"></i></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Loading key="'loading'" v-else />
    </transition-group>
  </div>
</template>

<script>
  import Loading from '~/components/Loading.vue';

  export default {
    data: function(){
      return{
        product: false,
        selectedProduct: false,
        tagFlipped: false,
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
      tagFlip: function(){
        this.tagFlipped = !this.tagFlipped;
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
  perspective: 1200px;

  @media (max-width: $breakpoint-lg){
    .col-sm-12:first-child{
      order: 2;
    }
    .col-sm-12:last-child{
      order: 1;
    }
  }

	&__item-images{

    @media (max-width: 360px){
      margin-top: -70px;
    }
	}

  &__item-tag{
    background: url(~assets/img/tag.png) no-repeat;
    background-size: 100%;
    width: 300px;
    max-width: 100%;
    height: 770px;
    text-align: center;
    position: relative;
    margin: 0 auto;
    transition: all .5s ease-in-out;
    transform-style: preserve-3d;
    transform: translateY(100px);
    animation: slidedown 1s 1;

    @media (max-width: 360px){
      width: 280px;
      height: 720px;
    }

    &::before{
      content: '';
      display: block;
      width: 300px;
      height: 237px;
      top: -237px;
      position: absolute;
      background: url(~assets/img/rope.png) no-repeat center top;
      background-size: 100%;

      @media (max-width: 360px){
        width: 280px;
        top: -220px;
      }
    }

    &--flip{
      transform: translateY(100px) rotate3d(0, 1, 0, 180deg);
    }
  }

  &__item-flip{
    cursor: pointer;
    margin-top: 5px;
    font-size: 18px;
  }

  &__item-tag-details{
    width: 300px;
    max-width: 100%;
    height: 500px;
    padding-top: 260px;
    position: absolute;

    @media (max-width: 360px){
      padding-top: 240px;
    }

    &--front{
      transform: rotateY(0deg);
      backface-visibility: hidden;
    }

    &--back{
      transform: rotateY(180deg);
      backface-visibility: hidden;
    }

    h2{
      margin-bottom: 0;
      transition: all 1.7s ease-in-out;
      backface-visibility: visible;
    }
  }

  &__item-tag-sizes{
    overflow: hidden;
    border: 1px solid #000;
    width: 122px;
    margin: 0 auto 5px;
    backface-visibility: hidden;
  }

  &__item-tag-sizes-item{
    float: left;
    backface-visibility: hidden;

    button{
      background: none;
      border: 2px solid #000;
      width: 30px;
      height: 30px;
      cursor: pointer;
      font-weight: bold;
      padding: 0;
      transition: all .3s ease-in-out;
    }

    &--selected{
      button{
        background: rgba(255,255,255,0.75);
      }
    }

    &--disabled{
      position: relative;

      &::after{
        backface-visibility: hidden;
        content: '/';
        font-size: 35px;
        position: absolute;
        top: -15px;
        left: 10px;
      }
    }
  }

  &__item-tag-price{
    backface-visibility: hidden;
    font-size: 25px;
  }

  &__item-tag-add{
    backface-visibility: hidden;
    margin-top: 15px;

    .btn{
      background: none;
      color: #000;
      border: 2px solid #000;
      max-width: 220px;

      &:hover{
        background: rgba(255,255,255,0.75);
      }
    }
  }

  &__item-tag-description{
    padding: 0 25px;
    font-size: 14px;
  }
}

@keyframes slidedown {
  0%{
    transform: translateY(-100%);
  }
  100%{
    transform: translateY(100px);
  }
}

@keyframes slidedownMobile {
  0%{
    transform: translateY(-100%);
  }
  100%{
    transform: translateY(150px);
  }
}
</style>
