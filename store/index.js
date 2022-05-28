export const state = () => ({
  locales: ['en', 'is'],
  locale: 'en',
  products: [
    {
      id: 1,
      title: 'Hot dog / Vegan hot dog',
      description: 'Icelandic hot dog with all of the amazing condiments. Available as Vegan Bulsa',
      price: 600,
      ratings: 3,
      reviews: 5,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      quantity: 1,
      type: 'Food and Drink',
      imgURL: '/images/pulsa.jpg'
    },
    {
      id: 2,
      title: 'Soda',
      description: 'Coke, Coke Zero, Appelsín, Sparkling water',
      price: 300,
      ratings: 5,
      reviews: 10,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      quantity: 1,
      type: 'Food and Drink',
      imgURL: '/images/gos.jpg'
    },
    {
      id: 3,
      title: 'Capri Sun',
      description: 'Fruit or Orange',
      price: 200,
      ratings: 2,
      reviews: 3,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      quantity: 1,
      type: 'Food and Drink',
      imgURL: '/images/caprisun.jpg'
    },
    {
      id: 4,
      title: 'Bríó 0%',
      description: 'Alchohol Free Craft Beer',
      price: 500,
      ratings: 1,
      reviews: 0,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      quantity: 1,
      type: 'Food and Drink',
      imgURL: '/images/brio.png'
    }
  ],
  products_is: [
    {
      id: 1,
      title: 'Pylsa/Bulsa',
      description: 'Íslensk pylsa frá SS eða Bulsa',
      price: 600,
      ratings: 3,
      reviews: 5,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      quantity: 1,
      type: 'Matur og drykkur',
      imgURL: '/images/pulsa.jpg'
    },
    {
      id: 2,
      title: 'Gos',
      description: 'Coke, Coke Zero, Appelsín, Sódavatn',
      price: 300,
      ratings: 5,
      reviews: 10,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      quantity: 1,
      type: 'Matur og drykkur',
      imgURL: '/images/gos.jpg'
    },
    {
      id: 3,
      title: 'Capri Sun',
      description: 'Ávaxta eða appelsínu',
      price: 200,
      ratings: 2,
      reviews: 3,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      quantity: 1,
      type: 'Food and Drink',
      imgURL: '/images/caprisun.jpg'
    },
    {
      id: 4,
      title: 'Bríó 0%',
      description: 'Áfengislaus bjór',
      price: 500,
      ratings: 1,
      reviews: 0,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      quantity: 1,
      type: 'Food and Drink',
      imgURL: '/images/brio.png'
    }
  ],
  
  userInfo: {
    isLoggedIn: false,
    isSignedUp: false,
    hasSearched: false,
    hasFiltered: false,
    name: '',
    productTitleSearched: '',
    productTagFiltered: '',
    lang: 'en'
  },
  systemInfo: {
    openLoginModal: false,
    openSignupModal: false,
    openCheckoutModal: false
  }
})

export const getters = {
  productsAdded: state => {
    if(state.locale == "is")
      {
        return state.products_is.filter(el => {
          return el.isAddedToCart;
        });
      }
    else {
      return state.products.filter(el => {
        return el.isAddedToCart;
      });
    }
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
    if(state.locale == "is")
    {
      state.products_is.forEach(el => {
        if (id === el.id) {
          el.isAddedToCart = true;
        }
      });
    }
    else 
    {
      state.products.forEach(el => {
        if (id === el.id) {
          el.isAddedToCart = true;
        }
      });
    }
  },
  setAddedBtn: (state, data) => {
    state.products.forEach(el => {
      if (data.id === el.id) {
        el.isAddedBtn = data.status;
      }
    });
  },
  removeFromCart: (state, id) => {
    if(state.locale == "is")
    {
      state.products_is.forEach(el => {
        if (id === el.id) {
          el.isAddedToCart = false;
        }
      });
    }
    else 
    {
      state.products.forEach(el => {
        if (id === el.id) {
          el.isAddedToCart = false;
        }
      });
    }
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
    //console.log('setProductTitleSearch');
  },
  setProductTagFiltered: (state, tagFiltered) => {
    state.userInfo.productTagFiltered = tagFiltered;
    //console.log('setProductTagFiltered');
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
  },
  SET_LANG(state, locale) {
    if (state.locales.indexOf(locale) !== -1) {
      state.locale = locale
    }
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
