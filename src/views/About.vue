<script setup lang="ts">
import { ref } from 'vue'
import AboutModal from '../components/AboutModal.vue'
import Layout from '../layouts/DefaultLayout.vue'
import {
  IonModal,
  IonButton,
} from '@ionic/vue'

const modalIsOpen = ref(false)
const showModal = () => {
  modalIsOpen.value = true
}

const closeModal = () => {
  modalIsOpen.value = false
}
</script>

<template>
  <Layout title="About">
    <h3>About</h3>
    <!-- MODAL CODE -->
    <ion-modal :is-open="modalIsOpen" @did-dismiss="closeModal()">
      <about-modal @on-close="closeModal" />
    </ion-modal>
    <ion-button @click="showModal">Open Modal</ion-button>
  </Layout>
</template>
