export const state = () => ({
  products: null,
  collections: null,
  productFilter: null,
  bagToggle: false,
  bag: [],
  bagCount: 0
})

export const mutations = {
  setValue (state, data) {
    state[data[0]] = data[1];
  },
  addToBag (state, data) {
    let products = state.bag;
    let productFound = false;

    products.forEach(product => {
      if(product.id === data[0] && product.variant === data[1]){
        product.quantity++;
        productFound = true;
      }
    });

    if (productFound === false) {
      state.bag.push({
        id: data[0],
        variant: data[1],
        quantity: data[2],
        size: data[3],
        title: data[4],
        price: data[5]
      });
    }
    state.bagCount++;

    // Store bag in session
    sessionStorage.setItem('bag', JSON.stringify(state.bag));
    sessionStorage.setItem('bagCount', state.bagCount);
  },
  sessionBag (state, data) {
    state.bag = data[0];
    state.bagCount = data[1];
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
      commit('sessionBag', [JSON.parse(sessionStorage.getItem('bag')), sessionStorage.getItem('bagCount')]);
    }
  }
}

