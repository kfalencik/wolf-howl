export const state = () => ({
  currentView: 'index',
  viewLoading: true,
  products: null,
  product: null,
  productFilter: null,
  selectedProduct: null,
  bag: []
})

export const mutations = {
  setValue (state, data) {
    state[data[0]] = data[1];
  },
  setProduct (state, data) {
    state.product = state.products.filter((product) => {
      if(product.id == data){
        return product;
      }
    });

    state.product = state.product[0];
    state.selectedProduct = state.product.variants[0];
  },
  setSize (state, data) {
    state.selectedProduct = state.product.variants[data];
  },
  setView (state, data) {
    state.currentView = data;
    state.viewLoading = true;
  }
}

export const actions = {
  async getProducts ({ commit }) {
    const products = await this.$shopify.product.fetchAll();
    commit('setValue', ['products', products]);

    setTimeout(function(){
      commit('setValue', ['viewLoading', false]);
    }, 500);
  }
}

