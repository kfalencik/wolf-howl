import Vue from './vendor/vue';
import VueRouter from './vendor/vue-router';
import {allProducts} from './shopify';

import './views/product.js';

const routes = [
	{
		path: '/product/:id',
		component: { template: '<transition name="fade"><screen-product></screen-product></transition>' }
	},
];

const router = new VueRouter({
	routes
});

Vue.use(VueRouter);

export default function() {
	new Vue({
		delimiters: ['${', '}'],
		el: '#app',
		router,
		data: {
			products: allProducts,
			selectedProduct: null,
			selectedProductPrice: 0
		},
		methods: {
			selectProduct: function(product, size) {
				this.selectedProduct = this.products[product].variants[size];
				this.selectedProductPrice = this.products[product].variants[size].price;
			}
		}
	});
}




