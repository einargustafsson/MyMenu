export const state = () => ({
  products: [
    {
      id: 1,
      title: 'ICELANDIC “PLOKKFISKUR” WITH BÉARNAISE SAUCE',
      description: 'Potatoes, onion, garlic, celery, lime, white wine, cream, butter and ryebread',
      price: 2900,
      ratings: 3,
      reviews: 5,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      quantity: 1,
      type: 'Fish Pans',
      imgURL: 'https://media-cdn.tripadvisor.com/media/photo-p/0d/6c/17/79/messinn.jpg'
    },
    {
      id: 2,
      title: 'PLAICE',
      description: 'Tomatoes, capers, parsley, lemon and butter',
      price: 3480,
      ratings: 5,
      reviews: 10,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      quantity: 1,
      type: 'Fish Pans',
      imgURL: 'https://media-cdn.tripadvisor.com/media/photo-s/0e/33/43/6f/arctic-char-in-honey.jpg'
    },
    {
      id: 3,
      title: 'CREAMY LOBSTER SOUP',
      description: 'With cognac and langustine tails',
      price: 2300,
      ratings: 2,
      reviews: 3,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      quantity: 1,
      type: 'Appetizers',
      imgURL: 'https://i0.wp.com/grgs.is/wp-content/uploads/2017/07/IMG_2883.jpg?fit=768%2C1024&ssl=1'
    },
    {
      id: 4,
      title: 'SALAD A LA MESSINN',
      description: 'Rucola, spinach, cherry tomatoes, bell pepper, grapes and celery — served with citrus mayo, parmesan and garlic bread',
      price: 2700,
      ratings: 1,
      reviews: 0,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      quantity: 1,
      type: 'Main Courses',
      imgURL: 'https://i0.wp.com/hiddeniceland.is/wp-content/uploads/2018/06/Messinn-restaurant.png?fit=674%2C800&ssl=1'
    },
    {
      id: 46,
      title: 'Glass of wine ',
      description: 'Faustino VII - Red or White 18,7 cl glass',
      price: 1200,
      ratings: 4,
      reviews: 2,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      quantity: 1,
      type:'Drinks',
      imgURL:'/images/faustino-glass.jpg'
    },
    {
      id: 47,
      title: 'Bottle of wine',
      description: 'Faustino VII Red or White 70 cl bottle',
      price: 4500,
      ratings: 4,
      reviews: 2,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      quantity: 1,
      type:'Drinks',
      imgURL:'/images/faustino-bottle.jpg'
    },
    {
      id: 57,
      title: 'Regular coffee'	,
      description: 'Comes with a refill',
      price: 450,
      ratings: 4,
      reviews: 2,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      quantity: 1,
      type:'Drinks',
      imgURL:'/images/coffee.jpg'
    },
    {
      id: 58,
      title: 'Espresso'	,
      description: '',
      price: 450,
      ratings: 4,
      reviews: 2,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      quantity: 1,
      type:'Drinks',
      imgURL:'/images/espresso.jpg'
    },
    {
      id: 59,
      title: 'Americano'	,
      description: '',
      price: 550,
      ratings: 4,
      reviews: 2,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      quantity: 1,
      type:'Drinks',
      imgURL:''
    },
    {
      id: 65,
      title: 'Soda / Soft drink'	,
      description: 'Cola, Cola Zero, Sprite, Appelsín - 33 cl',
      price: 450,
      ratings: 4,
      reviews: 2,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      quantity: 1,
      type:'Drinks',
      imgURL:'/images/appelsin.jpg'
    },
    {
      id: 66,
      title: 'Sparkling water '	,
      description: 'Icelandic Water - 33 cl',
      price: 350,
      ratings: 4,
      reviews: 2,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      quantity: 1,
      type:'Drinks',
      imgURL:''
    },
    {
      id: 67,
      title: 'Pilsner (light beer)'	,
      description: '2,2% 33 cl',
      price: 550,
      ratings: 4,
      reviews: 2,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      quantity: 1,
      type:'Drinks',
      imgURL:''
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
