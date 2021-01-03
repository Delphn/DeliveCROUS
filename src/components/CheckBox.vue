<template>
  <input type="checkbox" color="danger" :checked="isInCart(dish)" @change="updateCart">
  <!-- <ion-checkbox type="checkbox" color="danger" :checked="isInCart(dish)" @ionChange="updateCart"></ion-checkbox> -->
</template>

<script>
// import { IonCheckbox } from '@ionic/vue';
import { mapGetters } from 'vuex';

export default {
  props: ['dish'],
  components: {
    // IonCheckbox
  },
  data () {
    return {
      isChecked: null
    }
  },
  computed: {
    ...mapGetters(['cartItems']),
    isInCart() {
      return item => this.cartItems.includes(item)
    }
  },
  methods: {
    updateCart(val) {
      const isChecked = val.target.checked
      if (isChecked) {
        this.$store.commit('addToCart', this.dish)
      } else {
        this.$store.commit('removeFromCart', this.dish.id)
      } 
    }
  },
  mounted() {
    this.isChecked = this.cartItems.includes(this.dish)
  }
}
</script>
