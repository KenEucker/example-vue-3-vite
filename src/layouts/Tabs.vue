<script setup lang="ts">
import { IonPage, IonTabButton, IonIcon, IonLabel, IonTabs, IonTabBar, IonRouterOutlet } from '@ionic/vue'
import { home, help, cart } from 'ionicons/icons';
</script>
<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar>
        <ion-tab-button tab="home" href="/tabs/home">
        <ion-icon :icon="home" />
        <ion-label>Home</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="cart" href="/tabs/cart">
        <ion-icon :icon="cart" />
        <ion-label>Cart</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="about" href="/tabs/about">
        <ion-icon :icon="help" />
        <ion-label>About</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>