<template>
  <base-layout page-default-back-link="/home">
    <ion-grid v-if="!loadedDish">
      <ion-row> 
        <ion-col>
          <p>Could not find a dish for the given id.</p>
        </ion-col>
      </ion-row>
    </ion-grid>

    <ion-grid v-else ion-grid-padding="0">
      <ion-row>
        <ion-col>
          <ion-img :src="loadedDish.img"></ion-img>
        </ion-col>
      </ion-row>
      <ion-row>
        <ion-col size-xs="8">
           <ion-text>
            <h4>{{ loadedDish.Name }}</h4>
          </ion-text> 
        </ion-col>
        <ion-col size-xs="4" class="ion-text-end">
          <ion-text color="burgundy">
            <h5 color="burgundy">{{ loadedDish.Price }}</h5>
          </ion-text> 
        </ion-col>
      </ion-row>
      <ion-row>
        <ion-col size-xs="8">
          {{ loadedDish.Description }}
        </ion-col>
        <ion-col size-xs="4" class="ion-text-end">
          <CheckBox :dish="loadedDish" checkboxId="dish-checkbox" />
        </ion-col>
      </ion-row>
      <ion-row>
        <ion-col size-xs="8">
          
          <h4>Allergenes</h4>

          <ion-text>
            - Lorem ipsum <br>
            - Color sit amet <br>
            - Consectetur adipiscing
          </ion-text>
        </ion-col>
      </ion-row>
    </ion-grid>
  </base-layout>
</template>

<script>
import { IonGrid, IonRow, IonCol, IonImg, IonText } from "@ionic/vue";
import CheckBox from '@/components/CheckBox';

export default {
  props: ['id'],
  components: {
    IonGrid,
    IonRow,
    IonCol,
    IonImg,
    IonText,
    CheckBox
  },
  computed: {
    loadedDish() {
      return this.$store.getters.dish(this.id)
    }
  },
  methods: {
  }
}
</script>
