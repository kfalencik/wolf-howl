const template = `
<section class="site-section">
	<div id="hero" class="hero container">
		<div class="row">
			<div class="col">
				<div class="hero__slider">
					<div v-if="product" class="hero__slider-item">
						<div class="hero__slider-item-image">
							<img :src="product.images[0].src">
						</div>

						<div class="hero__slider-item-details">
							<h2 class="h2">{{product.title}}</h2>
							<div class="hero__slider-item-price">£{{selectedProductPrice}}</div>
							<div class="hero__slider-item-description">{{product.description}}</div>
							<div class="hero__slider-item-sizes">
								<div v-for="(size, sizeIndex) in product.variants" :key="size.id" :class="{'hero__slider-item-sizes-item': true, 'hero__slider-item-sizes-item--selected': selectedProduct && size.id == selectedProduct.id, 'hero__slider-item-sizes-item--disabled': !size.available}"><button @click="selectProduct(sizeIndex)">{{size.title}}</button></div>
							</div>
							<div class="hero__slider-item-add"><button :class="{'btn btn--primary': true, 'btn--disabled': selectedProduct == null }">Add +</button></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
`;

import Vue from '../vendor/vue';
import {client,allProductIds} from '../shopify';

Vue.component('screen-product', {
	template,
	data: function() {
		return {
			productSlug: 0,
			product: false,
			selectedProduct: null,
			selectedProductPrice: 0
		};
	},
	props: ['id'],
	mounted: function() {
		const self = this;
		this.productSlug = this.$route.params.id;


		setTimeout(function() {
			let productID = allProductIds.filter(function(product) {
				if (product.slug === self.productSlug) {
					return product;
				}
			});

			client.product.fetch(productID[0].id).then((product) => {
				self.product = product;
				self.selectedProductPrice = self.product.variants[0].price;
			});
		}, 500);
	},
	methods: {
		selectProduct: function(size) {
			this.selectedProduct = this.product.variants[size];
			this.selectedProductPrice = this.product.variants[size].price;
		}
	}
});
