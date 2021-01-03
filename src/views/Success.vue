<template>
  <base-layout>
    <ion-grid>
        
        <ion-card style="box-shadow: none; margin-top:20%">
            <ion-row>
                <ion-img src="assets/success.png"></ion-img>
            </ion-row>

            <br><br><br>

            <div class="ion-text-center">
                <ion-card-title style="font-size:32px" text-wrap>
                        Commande envoyée !
                </ion-card-title> 
            </div>

            <br><br><br>

            <div class="ion-text-center">
                <ion-card-title style="font-size:20px" text-wrap>
                        <p>Elle vous attendra  à la fin de <br>
                        votre cours !</p>
                </ion-card-title>
            </div>

            <br>

            <div class="ion-text-center">
                <ion-text style="font-size:20px">
                        Solde CROUS restant: 19.50 €
                </ion-text>
            </div>   
        </ion-card>
    </ion-grid>
  </base-layout>
</template>

<script>
import {IonGrid, IonCard, IonRow, IonImg, IonCardTitle, IonText} from '@ionic/vue';

export default {
    name: 'Success',
    components: {
        IonGrid,
        IonCard,
        IonRow,
        IonImg,
        IonCardTitle,
        IonText
    }
}
</script>
