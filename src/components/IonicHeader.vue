<script setup lang="ts">
import { defineProps } from 'vue'
import { IonButton, IonHeader, IonTitle, IonToolbar } from '@ionic/vue'

const props = defineProps({
  title: {
    type: String,
    default: null,
  },
})
</script>

<template>
  <ion-header class="header">
    <ion-toolbar class="header__toolbar">
      <ion-title>{{ props.title }}</ion-title>
      <ion-button router-link="/home">Home</ion-button>
      <ion-button router-link="/cart">Cart</ion-button>
      <ion-button router-link="/about">About</ion-button>
    </ion-toolbar>
    <slot />
  </ion-header>
</template>

<style scoped lang="scss">
.header {
  &__toolbar {
    display: inline-flex;

    > * {
      display: inline-flex;
      vertical-align: middle;
    }
  }
}
</style>
