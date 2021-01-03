<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="primary">
        <ion-buttons slot="start">
            <ion-back-button color="dark" :default-href="pageDefaultBackLink"></ion-back-button>
        </ion-buttons>
        <ion-title class="ion-text-center" size="large" color="dark">DeliveCrous</ion-title>
        <ion-button fill="clear" id="cart-btn" router-link="/cart" icon-only slot="end">
          <ion-icon class="clear" size="large" color="dark" :icon="cart"></ion-icon> 
          <ion-badge v-if="cartItems.length > 0" color="danger" id="cart-badge" padding="0" size="small">{{ cartItems.length }}</ion-badge>
        </ion-button>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding-start ion-padding-end">
      <slot />
    </ion-content>
  </ion-page>
</template>

<script>
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonButton, IonBackButton, IonIcon, IonBadge } from '@ionic/vue';
import { cart } from 'ionicons/icons';
import { defineComponent } from 'vue';
import { mapGetters } from 'vuex';

export default defineComponent({
  name: 'Home',
  props: ["pageDefaultBackLink"],
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonButtons,
    IonBackButton,
    IonIcon,
    IonBadge,
    IonButton
  },
  data() {
    return {
      cart
    }
  },
  computed: {
    ...mapGetters(['cartItems'])
  }
});
</script>

<style scoped>
#cart-btn {
   position: relative;
}

#cart-badge {
   position: absolute;
   top: 0px;
   right: 0px;
}
</style>