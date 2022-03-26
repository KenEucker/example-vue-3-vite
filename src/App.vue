<script setup lang="ts">
import { IonApp, IonRouterOutlet } from '@ionic/vue'
import { useRouter } from 'vue-router'
import { computed } from 'vue'

const { currentRoute } = useRouter()
const layout = computed(() => {
  const l = `${currentRoute.value.meta?.layout ?? 'Default'}Layout`
  console.log({ l })
  return l
})
</script>

<template>
  <ion-app>
    <component :is="layout">
      <ion-router-outlet />
    </component>
  </ion-app>
</template>
