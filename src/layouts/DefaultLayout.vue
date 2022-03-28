<script setup lang="ts">
import iHeader from '../components/DefaultHeader.vue'
import iFooter from '../components/DefaultFooter.vue'
import { IonContent, IonPage } from '@ionic/vue'
import { defineProps } from 'vue'

const props = defineProps({
  title: {
    type: String,
    default: 'Pinita',
  },
})
</script>

<template>
  <ion-page>
    <i-header :title="props.title" />
    <ion-content fullscreen class="ion-padding">
      <slot />

      <hr />

      <i-footer> - by <a href="https://github.com/keneucker">@keneucker</a> and <a href="https://github.com/ehoraizon">@ehoraizon</a> 2022 </i-footer>
    </ion-content>
  </ion-page>
</template>
