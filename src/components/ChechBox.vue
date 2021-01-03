<template>
    <input type="checkbox" v-model="isChecked" @change="updateCart">
</template>

<script>
import {mapGetters } from 'vuex';

export default {
    props: ['dish'],
    data () {
        return {
            isChecked: null
        }
    },
    computed: {
        ...mapGetters['cartItems']
    },
    methods: {
        updateCart() {
            if (this.isChecked) {
                this.$store.commit('addToCart', this.dish)
            }
            else{
                this.$store.commit('removeFromCart0, this.dish')
            }
        },
        isInCart(item) {
            const isDishInCart = this.cartItems.includes(item)
            this.isChecked = isDishInCart
            console.log('is this in cart: ', isDishInCart)

            return isDishInCart
        }
    },
    watch: {
        cartItems(val) {
            console.log('current state: ', val)
        }
    },
    mounted() {
        this.isChecked = this.cartItems.includes(this.dish)
    }
}
</script>