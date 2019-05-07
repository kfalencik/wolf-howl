import Client from 'shopify-buy';

const client = Client.buildClient({
	domain: 'wolf-howl-apparel.myshopify.com',
	storefrontAccessToken: 'c4ab69a561c52e35efcc1d4018ff63d1'
});

let allProducts = [];
let allProductIds = [];

client.product.fetchAll().then((products) => {
	allProducts = products;

	allProducts.forEach(function(productDetails) {
		let newProduct = {
			'id': productDetails.id,
			'slug': productDetails.handle
		};
		allProductIds.push(newProduct);
	});
});

export {client, allProducts, allProductIds};
