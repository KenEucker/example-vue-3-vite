<script setup lang="ts">
import PiniaLogo from '../components/PiniaLogo.vue'

import { ref } from 'vue'
import { useUserStore } from '../stores/user'
import { useCartStore } from '../stores/cart'
import { IonButton, IonInput, IonItem, IonLabel, IonRow } from '@ionic/vue'
import DefaultLayout from '../layouts/DefaultLayout.vue'

const user = useUserStore()
const cart = useCartStore()

const itemName = ref('')

function addItemToCart() {
  console.log("wwwwwwwww",itemName.value)
  if (!itemName.value) return
  cart.addItem(itemName.value)
  itemName.value = ''
}

function clearCart() {
  if (window.confirm('Are you sure you want to clear the cart?')) {
    cart.rawItems = []
  }
}

async function buy() {
  const n = await cart.purchaseItems()

  console.log(`Bought ${n} items`)

  cart.rawItems = []
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
window.stores = { user, cart }
</script>

<template>
  <default-layout>
    <div class="ion-justify-content-center .ion-nowrap" style="display: flex; flex-direction: column">
        <div style="margin: 1rem 0">
          <PiniaLogo />
        </div>

        <h2>Hello {{ user.name }}</h2>

        <form class="ion-margin-bottom" data-testid="add-items" @submit.prevent="addItemToCart">
          <ion-row>
            <ion-item>
              <ion-label position="floating">Item name</ion-label>
              <ion-input v-model="itemName" type="text" />
            </ion-item>
            <ion-button type="submit" class="ion-margin-top ion-align-self-end">Add</ion-button>
          </ion-row>
        </form>

        <form @submit.prevent="buy">
          <ul data-testid="items">
            <li v-for="item in cart.items" :key="item.name">
              {{ item.name }} ({{ item.amount }})
              <ion-button @click="cart.removeItem(item.name)">X</ion-button>
            </li>
          </ul>

          <ion-button :disabled="!user.name">Buy</ion-button>
          <ion-button :disabled="!cart.items.length" data-testid="clear" @click="clearCart">
            Clear the cart
          </ion-button>
        </form>
    </div>
  </default-layout>
</template>

<style scoped>
img {
  width: 200px;
}

button,
input {
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
}
</style>
