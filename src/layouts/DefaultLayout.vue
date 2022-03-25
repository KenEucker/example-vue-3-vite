<script setup lang="ts">
import iHeader from '../components/IonicHeader.vue'
import iFooter from '../components/IonicFooter.vue'
import { IonContent, IonPage } from '@ionic/vue'

const props = defineProps({
  title: {
    type: String,
    default: "Pinita"
  }
})
</script>

<template>
  <ion-page>
    <i-header :title="title"/>
    <ion-content fullscreen class="ion-padding">
      <slot />

      <hr />

      <i-footer> - by <a href="https://github.com/keneucker">@keneucker</a> 2022 </i-footer>
    </ion-content>
  </ion-page>
</template>
