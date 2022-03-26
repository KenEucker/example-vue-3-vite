<script setup lang="ts">
import { defineProps } from 'vue'
import { IonHeader, IonTitle, IonToolbar } from '@ionic/vue'

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
      <ion-title class="ion-padding-start">{{ props.title }}</ion-title>
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
