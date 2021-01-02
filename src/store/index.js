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

      console.log('after adding: ', state.cartItems)
    },
    removeDish(state, dish) {
      console.log('STORE: remove dish', dish)
      // ????
      this.removeFromCart(dish)
    },
    removeFromCart(state, id) {
      // find the dish index
      console.log('removing id=', id.id)
      const index = state.cartItems.findIndex(dish => dish.id === id)

      // remove from the cartItems array
      state.cartItems.splice(index, 1)

      console.log('after removal: ', state.cartItems)
    },
    updateCheckboxValue(state, id) {
      // toggle isChecked
      const dish = state.dishes.find(dish => dish.id === id)
      if (dish) dish.isChecked = !dish.isChecked

      console.log(dish?.isChecked)
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
    },
    addCartID(state, id) {
      state.cartItemsID.push(id)
    }
  }
});

export default store
