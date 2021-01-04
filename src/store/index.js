import { createStore } from 'vuex';


const store = createStore({
  state: {
    dishes: [
      {
        id: 'dish1',
        Name: 'Neapolitan Pizza', 
        Description: 'Very delicious Pizza', 
        Price: '19,20 €', 
        img: require('../../public/assets/neopolitan.jpeg')
      },
      {
        id: 'dish2',
        Name: 'Pizza indienne', 
        Description: 'Sauce tomate, poulet rôti, olives ', 
        Price: '9,90 €', 
        img: require('../../public/assets/indienne.jpg')
      },
      {
        id: 'dish3',
        Name: 'Neapolitan Pizza', 
        Description: 'Very delicious Pizza', 
        Price: '19,20 €', 
        img: require('../../public/assets/neopolitan.jpeg')
      },
      {
        id: 'dish4',
        Name: 'Pizza calzone', 
        Description: 'Sauce tomate, viande au choix', 
        Price: '14,50 €', 
        img: require('../../public/assets/calzone.jpg')
      },
      {
        id: 'dish5',
        Name: 'Pizza Margherita', 
        Description: 'Pizza Margherita', 
        Price: '14,20 €', 
        img: require('../../public/assets/margherita.jpeg')
      },
      {
        id: 'dish6',
        Name: 'Pizza indienne', 
        Description: 'Sauce tomate, poulet rôti', 
        Price: '9,90 €', 
        img: require('../../public/assets/indienne.jpg')
      },
      {
        id: 'dish7',
        Name: 'Pizza calzone', 
        Description: 'Sauce tomate, viande au choix', 
        Price: '14,50 €', 
        img: require('../../public/assets/calzone.jpg')
      },
      {
        id: 'dish8',
        Name: 'Neapolitan Pizza', 
        Description: 'Very delicious Pizza', 
        Price: '19,20 €', 
        img: require('../../public/assets/neopolitan.jpeg')
      }
    ],
    cartItems: []
  },
  mutations: {
    addToCart(state, dish) {
      state.cartItems.push(dish)
      window.localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
    },
    removeFromCart(state, id) {
      // find the dish index
      const index = state.cartItems.findIndex(dish => dish.id === id)
      // remove the dist from cart
      state.cartItems.splice(index, 1)
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
    },
    setCartItems(state, cartItems) {
      state.cartItems = cartItems
    }
  },
  getters: {
    cartItems(state) {
      return state.cartItems;
    },
    dishes(state) {
      return state.dishes;
    },
    dish: state => (id) => {
      return state.dishes.find(dish => dish.id === id);
    },
    nbInCart(state) {
      return state.cartItems.length
    }
  },
  actions: {}
});

export default store
