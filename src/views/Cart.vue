<template>
  <base-layout>
    <ion-grid>
      <ion-row>
        <ion-col v-for="(dish,index) in cartItems" :key="index" size-xs="12">
          <ion-card>
            <ion-row>
              <!-- image -->
              <ion-col>
                <ion-img :src="dish.img" style="height:100%" ></ion-img>
              </ion-col>
              <ion-col>
                <!-- name-price -->
                <ion-row>
                  <ion-col>
                    <ion-card-title style="font-size: 0.8rem">
                      {{dish.Name}}
                      index - {{index}}
                    </ion-card-title>
                  </ion-col>
                  <ion-col>
                    <ion-card-title style="font-size: 0.8rem" class="ion-text-end">
                      {{dish.Price}}
                    </ion-card-title>
                  </ion-col>
                </ion-row>
                <!-- descroption - checkbox -->
                <ion-row style="margin-top:20%">
                  <ion-col>
                    <ion-card-title style="font-size: 0.6rem" class="ion-text-left">
                      {{dish.Description}}
                    </ion-card-title>
                  </ion-col>
                  <!-- checkbox -->
                  <ion-col class="ion-text-end">
                      <!-- checkbox -->
                  </ion-col>
                </ion-row>
              </ion-col>
            </ion-row>
          </ion-card>
        </ion-col>
      </ion-row>
    </ion-grid>

    <!-- after list -->
    <ion-grid>
      <!-- text -->
      <ion-row class="ion-align-items-center">
        <ion-col>
          <ion-title>
            Où veux-tu te faire livrer ? <br>
            En salle de TD ? 
          </ion-title>
        </ion-col>
      </ion-row>
      <!-- adress form -->
      <ion-row>
        <ion-col>
          <ion-item>
            <ion-input placeholder="Rue"></ion-input>
          </ion-item>
        </ion-col>
      </ion-row>
      <ion-row>
        <ion-col>
          <ion-item>
            <ion-input placeholder="Ville"></ion-input>
          </ion-item>
        </ion-col>
        <ion-col>
          <ion-item>
            <ion-input placeholder="Code Postal"></ion-input>
          </ion-item>
        </ion-col>
      </ion-row>
      <!-- button -->
      <ion-row class="ion-margin-top">
        <ion-col>
          <ion-button color="secondary" router-link="/success">Passer Commande</ion-button>
        </ion-col>
      </ion-row>
    </ion-grid>

  </base-layout>
</template>

<script>
import { IonGrid, IonRow, IonCol, IonImg, IonItem, IonCard, IonCardTitle, IonTitle, IonButton, IonInput} from '@ionic/vue';
import { mapGetters } from 'vuex';

export default {
    name: 'Cart',
    components: {
      // CheckBox,
      IonGrid,
      IonRow,
      IonCol,
      IonImg,
      IonItem,
      IonCard,
      IonCardTitle,
      IonTitle,
      IonButton,
      IonInput
    },
    data() {
        return {
            test: null
        }
    },
    computed: {
        ...mapGetters(['cartItems']),
    },
    methods: {
        removeFromCart () {
            // state function
        }
    }
}
</script>