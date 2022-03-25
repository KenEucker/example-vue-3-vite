<script setup lang="ts">
import iHeader from '../components/IonicHeader.vue'
import iFooter from '../components/IonicFooter.vue'
import { IonContent, IonPage } from '@ionic/vue'
</script>

<template>
  <ion-page>
    <i-header title="Pinia">
      <h1>The intuitive store for Vue</h1>
    </i-header>

    <ion-content class="ion-padding">
      <slot />

      <hr />

      <i-footer> - by <a href="https://github.com/keneucker">@keneucker</a> 2022 </i-footer>
    </ion-content>
  </ion-page>
</template>
