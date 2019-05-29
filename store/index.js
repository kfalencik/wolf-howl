export const state = () => ({
  products: null,
  collections: null,
  productFilter: null,
  bagToggle: false,
  bag: [
    {
      id: 'fwefwefergu349g834n49g34',
      variant: 'owefn9348gn934g9384f92n',
      quantity: 2,
      size: 'Small',
      title: 'Wolf Howl - Mans T-Shirt',
      price: '59.99'
    },
    {
      id: 'fwefwefergu349g834n49g34',
      variant: 'owefn9348gn934g9384f92n',
      quantity: 4,
      size: 'Extra Large',
      title: 'Panther Hunt - Mans T-Shirt',
      price: '59.99'
    }
  ]
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

