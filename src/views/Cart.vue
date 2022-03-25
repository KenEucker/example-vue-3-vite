<script setup lang="ts">
import Layout from '../layouts/DefaultLayout.vue'
import PiniaLogo from '../components/PiniaLogo.vue'

import { ref } from 'vue'
import { useUserStore } from '../stores/user'
import { useCartStore } from '../stores/cart'

const user = useUserStore()
const cart = useCartStore()

const itemName = ref('')

function addItemToCart() {
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

window.stores = { user, cart }
</script>

<template>
  <Layout title="Cart">
    <div class="ion-justify-content-center .ion-nowrap" style="display: flex; flex-direction: column">
      <div style="margin: 1rem 0">
        <PiniaLogo />
      </div>

      <h2>Hello {{ user.name }}</h2>

      <form data-testid="add-items" @submit.prevent="addItemToCart">
        <input v-model="itemName" type="text" />
        <button>Add</button>
      </form>

      <form @submit.prevent="buy">
        <ul data-testid="items">
          <li v-for="item in cart.items" :key="item.name">
            {{ item.name }} ({{ item.amount }})
            <button type="button" @click="cart.removeItem(item.name)">X</button>
          </li>
        </ul>

        <button :disabled="!user.name">Buy</button>
        <button :disabled="!cart.items.length" type="button" data-testid="clear" @click="clearCart">
          Clear the cart
        </button>
      </form>
    </div>
  </Layout>
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
