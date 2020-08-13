export const state = () => ({
  products: [
    {
      id: 1,
      title: 'Icelandic plate Loki',
      description: 'Rye bread slices, with mashed fish ( Plokkfiskur) & smoked trout. Flatbread with smoked lamb.Dried fish with butter and taste of fermented shark.',
      price: 2900,
      ratings: 3,
      reviews: 5,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      quantity: 1,
      type: 'plates',
      imgURL: 'https://images.squarespace-cdn.com/content/v1/5c721c5034c4e26716faa829/1551670625772-J0IM4S1QRVE2EP3SMDLV/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/_MG_5727.jpg?format=500w'
    },
    {
      id: 2,
      title: 'Icelandic plate Baldur',
      description: 'Two rye bread slices, one with mashed fish & the other with egg & herring. Loki’s unique Rye bread ice cream.',
      price: 2400,
      ratings: 5,
      reviews: 10,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      quantity: 1,
      type: 'plates',
      imgURL: 'https://images.squarespace-cdn.com/content/v1/5c721c5034c4e26716faa829/1551670712342-W80QUV9RK41P5JB2JGCS/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/_MG_5737.jpg?format=500w'
    },
    {
      id: 3,
      title: 'Icelandic plate Þór',
      description: 'Rye bread slices, with mashed fish ( Plokkfiskur) & smoked trout. Flatbread with sheep-head jelly, mashed turnips and bean salad.',
      price: 2900,
      ratings: 2,
      reviews: 3,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      quantity: 1,
      type: 'plates',
      imgURL: 'https://images.squarespace-cdn.com/content/v1/5c721c5034c4e26716faa829/1551670977993-U4BZ0RJP7B6L6HZ56Z6O/ke17ZwdGBToddI8pDm48kLRAvIOuD_BeOmvIoc2uxngUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcPqTeDH7fKPa2US_s5qbB6FQIWaMIObzCsue3bQUWeZdbZWxuQwynQ0LmYHq0RCqo/IP+l+banner.jpg?format=1500w'
    },
    {
      id: 4,
      title: 'Icelandic plate Freyja',
      description: 'Trout – tarte with salad. Loki’s unique rye bread ice cream.',
      price: 2400,
      ratings: 1,
      reviews: 0,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      quantity: 1,
      type: 'plates',
      imgURL: 'https://images.squarespace-cdn.com/content/v1/5c721c5034c4e26716faa829/1551671692091-ZDDYXYXGFZ19XMW0BTP3/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/_MG_5747.jpg?format=500w'
    },
    {
      id: 5,
      title: 'Gratinated mashed fish',
      description: 'With rye bread and salad.',
      price: 2500,
      ratings: 4,
      reviews: 2,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      quantity: 1,
      type: 'mains',
      imgURL: 'https://images.squarespace-cdn.com/content/v1/5c721c5034c4e26716faa829/1550988829598-T1YPOPI6V3J02IDO0N4E/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/_MG_5761.jpg?format=500w'
    },
    {
      id: 6,
      title: 'Meat soup',
      description: 'Icelandic lamb meat soup',
      price: 2190,
      ratings: 5,
      reviews: 1,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      quantity: 1,
      type:'mains',
      imgURL:'https://images.squarespace-cdn.com/content/v1/5c721c5034c4e26716faa829/1550988952105-CF5VI38AQ2O9TQJEQLLR/ke17ZwdGBToddI8pDm48kPoswlzjSVMM-SxOp7CV59BZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PIeQMKeWYgwh6Mn73n2eZmZLHHpcPIxgL2SArp_rN2M_AKMshLAGzx4R3EDFOm1kBS/Loki_kjotsupa.jpg?format=500w'
    },
    {
      id: 7,
      title: 'Loki’s vegetarian plate',
      description: 'Fresh greens, potatoes, quinoa, chickpeas, house sauce & rye bread ',
      price: 2200,
      ratings: 5,
      reviews: 7,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      quantity: 1,
      type:'mains',
      imgURL:'https://images.squarespace-cdn.com/content/v1/5c721c5034c4e26716faa829/1551672218966-0YTCNE7H9B0HA73BU3MQ/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/Grænmetisréttur.jpg?format=500w'
    },
    {
      id: 8,
      title: 'Icelandic Braveheart',
      description: 'Brennivíns shot, rye bread & flatbread. Dried fish with butter and a bit of fermented shark.',
      price: 2400,
      ratings: 3,
      reviews: 0,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      quantity: 1,
      type:'sides',
      imgURL:'https://images.squarespace-cdn.com/content/v1/5c721c5034c4e26716faa829/1551672107417-6LUG9PBCW6B5FZ3L1UD6/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/_MG_5753.jpg?format=500w'
    },
    {
      id: 9,
      title: 'Loki’s unique Rye bread ice cream',
      description: 'With cream & rhubarb syrup',
      price: 850,
      ratings: 4,
      reviews: 2,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      quantity: 1,
      type:'deserts',
      imgURL:'https://images.squarespace-cdn.com/content/v1/5c721c5034c4e26716faa829/1551673975353-U3RQHAO8YR3E3PCGHOIK/ke17ZwdGBToddI8pDm48kGDpvalPb1SqHoCn1hwN0Y57gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmQPoRzxSr1hzN-vPBHt7YyLLXgctAyUJRqJUUGWVDK_ZzIgvsybGcZEPqUYiXY8im/Rúgbrauðs%C3%ADs%2C+Rye+bread+ice+cream.jpg?format=500w'
    },
    {
      id: 10,
      title: 'Viking beer',
      description: 'Award winning Icelandic brew',
      price: 1150,
      ratings: 4,
      reviews: 2,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      quantity: 1,
      type:'drinks',
      imgURL:'https://www.dutyfree.is/media/1/118-2230-1.jpg?maxwidth=568&maxheight=490'
    }
  ],
  userInfo: {
    isLoggedIn: false,
    isSignedUp: false,
    hasSearched: false,
    hasFiltered: false,
    name: '',
    productTitleSearched: '',
    productTagFiltered: ''
  },
  systemInfo: {
    openLoginModal: false,
    openSignupModal: false,
    openCheckoutModal: false
  }
})

export const getters = {
  productsAdded: state => {
    return state.products.filter(el => {
      return el.isAddedToCart;
    });
  },
  productsAddedToFavourite: state => {
    return state.products.filter(el => {
      return el.isFavourite;
    });
  },
  getProductById: state => id => {
    return state.products.find(product => product.id == id);
  },
  isUserLoggedIn: state => {
    return state.userInfo.isLoggedIn;
  },
  isUserSignedUp: state => {
    return state.userInfo.isSignedUp;
  },
  getUserName: state => {
    return state.userInfo.name;
  },
  isLoginModalOpen: state => {
    return state.systemInfo.openLoginModal;
  },
  isSignupModalOpen: state => {
    return state.systemInfo.openSignupModal;
  },
  isCheckoutModalOpen: state => {
    return state.systemInfo.openCheckoutModal;
  },
  quantity: state => {
    return state.products.quantity;
  }
}

export const mutations = {
  addToCart: (state, id) => {
    state.products.forEach(el => {
      if (id === el.id) {
        el.isAddedToCart = true;
      }
    });
  },
  setAddedBtn: (state, data) => {
    state.products.forEach(el => {
      if (data.id === el.id) {
        el.isAddedBtn = data.status;
      }
    });
  },
  removeFromCart: (state, id) => {
    state.products.forEach(el => {
      if (id === el.id) {
        el.isAddedToCart = false;
      }
    });
  },
  removeProductsFromFavourite: state => {
    state.products.filter(el => {
      el.isFavourite = false;
    });
  },
  isUserLoggedIn: (state, isUserLoggedIn) => {
    state.userInfo.isLoggedIn = isUserLoggedIn;
  },
  isUserSignedUp: (state, isSignedUp) => {
    state.userInfo.isSignedUp = isSignedUp;
  },
  setHasUserSearched: (state, hasSearched) => {
    state.userInfo.hasSearched = hasSearched;
  },
  setHasUserFiltered: (state, hasFiltered) => {
    state.userInfo.hasFiltered = hasFiltered;
  },
  setUserName: (state, name) => {
    state.userInfo.name = name;
  },
  setProductTitleSearched: (state, titleSearched) => {
    state.userInfo.productTitleSearched = titleSearched;
    console.log('setProductTitleSearch');
  },
  setProductTagFiltered: (state, tagFiltered) => {
    state.userInfo.productTagFiltered = tagFiltered;
    console.log('setProductTagFiltered');
  },
  showLoginModal: (state, show) => {
    state.systemInfo.openLoginModal = show;
  },
  showSignupModal: (state, show) => {
    state.systemInfo.openSignupModal = show;
  },
  showCheckoutModal: (state, show) => {
    state.systemInfo.openCheckoutModal = show;
  },
  addToFavourite: (state, id) => {
    state.products.forEach(el => {
      if (id === el.id) {
        el.isFavourite = true;
      }
    });
  },
  removeFromFavourite: (state, id) => {
    state.products.forEach(el => {
      if (id === el.id) {
        el.isFavourite = false;
      }
    });
  },
  quantity: (state, data) => {
    state.products.forEach(el => {
      if (data.id === el.id) {
        el.quantity = data.quantity;
      }
    });
  },
  SET_USER(state, authUser) {
    state.authUser = authUser
  }
}
/* 
export const actions = {
  async nuxtServerInit({ commit }) {
    const res = await this.$axios.get("/api/current_user")
    commit("SET_USER", res.data)
  },

  async logout({ commit }) {
    const { data } = await this.$axios.get("/api/logout")
    if (data.ok) commit("SET_USER", null)
  },

  async handleToken({ commit }, token) {
    const res = await this.$axios.post("/api/stripe", token)
    commit("SET_USER", res.data)
  }
} */
