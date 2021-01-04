<template>
  <base-layout>
    <ion-grid class="ion-no-padding">
      <ion-row>
        <ion-col class="ion-margin-top">
           <ion-title>Decouvrez notre carte</ion-title>
        </ion-col>
      </ion-row>
      <ion-row>
        <ion-col v-for="dish in dishes" :key="dish.id"  size-xs="12" size-sm="6" size-md="4" class="ion-padding-bottom">
          <ion-card style="height:100%">
            <ion-img @click="$router.push({ name: 'DishDetails', params: { id: dish.id }})" :src="dish.img"></ion-img>
            <ion-card-header>
              <ion-row>
                <ion-col no-padding size-xs="8" class="ion-text-start">
                  <ion-card-title>{{ dish.Name }}</ion-card-title>
                </ion-col>
                <ion-col size-xs="4" class="ion-text-end">
                   <ion-card-title color="secondary">{{ dish.Price }}</ion-card-title>
                </ion-col>
              </ion-row>
            </ion-card-header>
            <ion-card-content>
              <ion-row>
                <ion-col >
                  {{ dish.Description }}
                </ion-col>
                <ion-col size-xs="4" class="ion-text-end">
                  <CheckBox :dish="dish" />
                </ion-col>
              </ion-row>
            </ion-card-content>
          </ion-card>
        </ion-col>
      </ion-row>
    </ion-grid>
  </base-layout>
</template>

<script>
import { IonCard, IonCardTitle, IonCardContent, IonImg, IonGrid, IonCardHeader, IonRow, IonCol, IonTitle } from '@ionic/vue';
import { defineComponent } from 'vue';
import { mapGetters } from 'vuex';
import CheckBox from '@/components/CheckBox';

export default defineComponent({
  name: 'Home',
  components: {
    IonCard,
    IonCardTitle,
    IonCardContent,
    IonImg,
    IonGrid,
    IonCardHeader,
    IonRow,
    IonCol,
    IonTitle,
    CheckBox
  },
  data () {
    return {
     
    }
  },

  computed: {
    ...mapGetters(['dishes']),
  }
});
</script>
