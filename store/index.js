export const state = () => ({
  products: null,
  collections: null,
  productFilter: null,
  bag: []
})

export const mutations = {
  setValue (state, data) {
    state[data[0]] = data[1];
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
  }
}

