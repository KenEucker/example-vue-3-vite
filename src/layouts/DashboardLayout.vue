<script setup lang="ts">
import Sidebar from '../components/Sidebar.vue'
import Header from '../components/DashboardHeader.vue'
import Footer from '../components/DashboardFooter.vue'
import { IonPage, IonContent } from '@ionic/vue'
</script>

<template>
  <ion-page>
    <div class="flex h-screen bg-gray-200 font-roboto">
      <Sidebar />

      <div class="flex flex-col flex-1 overflow-hidden">
        <Header />

        <main class="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
          <ion-content class="container px-6 py-8 mx-auto">
            <slot />
          </ion-content>
        </main>
        <Footer />
      </div>
    </div>
  </ion-page>
</template>
