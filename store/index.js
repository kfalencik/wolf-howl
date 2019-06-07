export const state = () => ({
  products: null,
  collections: null,
  productFilter: null,
  bagToggle: false,
  bag: [],
  bagCount: 0,
  checkoutId: 0
})

export const mutations = {
  setValue (state, data) {
    state[data[0]] = data[1];
  },
  addToBag (state, data) {
    let products = state.bag;
    let productFound = false;

    products.forEach(product => {
      if(product.id === data[1] && product.variant === data[0]){
        product.quantity++;
        productFound = true;
      }
    });

    if (productFound === false) {
      state.bag.push({
        variantId: data[0],
        id: data[1],
        quantity: data[2],
        size: data[3],
        title: data[4],
        price: data[5]
      });

      this.$shopify.checkout.addLineItems(state.checkoutId, {
        variantId: data[0],
        quantity: data[2]
      }).then(checkout => {
        console.log(checkout);
      });
    }
    state.bagCount++;
    state.bagToggle = true;

    // Store bag in session
    sessionStorage.setItem('bag', JSON.stringify(state.bag));
    sessionStorage.setItem('bagCount', state.bagCount);
  },
  sessionBag (state, data) {
    state.bag = data[0];
    state.bagCount = data[1];
    state.checkoutId = data[2];
  }
}

export const actions = {
  async getProducts ({ commit }) {
    const products = await this.$shopify.product.fetchAll();
    commit('setValue', ['products', products]);
  },
  async getCollections ({ commit }) {
    const collections = await this.$shopify.collection.fetchAllWithProducts().then((collections) => {
      commit('setValue', ['collections', collections]);
    });
  },
  async getBag ({ commit }) {
    if(sessionStorage.getItem('bag')){
      console.log(sessionStorage.getItem('checkoutId'));
      this.$shopify.checkout.create().then(checkout => {
        commit('setValue', ['checkoutId', checkout.id]);
        commit('sessionBag', [JSON.parse(sessionStorage.getItem('bag')), sessionStorage.getItem('bagCount')]);
      });
    } else {
      this.$shopify.checkout.create().then(checkout => {
        commit('setValue', ['checkoutId', checkout.id]);
        sessionStorage.setItem('checkoutId', checkout.id);
      });
    }
  }
}
