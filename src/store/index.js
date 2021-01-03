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
    },
    removeDish(state, dish) {
      console.log('STORE: remove dish', dish)
      // ????
      this.removeFromCart(dish)
    },
    removeFromCart(state, id) {
      // find the dish index
      const index = state.cartItems.findIndex(dish => dish.id === id)

      state.cartItems.splice(index, 1)
    },
    updateCheckboxValue(state, id) {
      // toggle isChecked
      const dish = state.dishes.find(dish => dish.id === id)
      if (dish) dish.isChecked = !dish.isChecked

      console.log(dish?.isChecked)
    },
    updateLocalStorage(state) {
      window.localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
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
      return state.dishes.filter(dish => dish.isChecked === true).length
    }
  },
  actions: {
    updateDish({ commit }, id) {
      commit('updateCheckboxValue', id)
      commit("updateLocalStorage")
    },
    addDishToCart({ commit }, id) {
      commit('addToCart', id)
    },
    removeCartID(state, id) {
      const dish = state.cartItems.find(dish => dish.id === id);
      const index = state.cartItems.indexOf(dish)
      if (index != -1) {
        state.cartItemIDs.slice(index, 1)
      }
    }
  }
});

export default store
