// @ts-check
import { defineStore, acceptHMRUpdate } from 'pinia'
import { useUserStore } from './user'

interface CartData {
  name: string
  amount: number
}
interface CartState {
  rawItems: string[]
}

export const useCartStore = defineStore({
  id: 'cart',
  state: (): CartState => ({
    rawItems: [],
  }),
  getters: {
    items: (state: CartState): Array<CartData> =>
      state.rawItems.reduce((items: CartData[], item) => {
        const existingItem = items.find((it: CartData) => it.name === item)

        if (!existingItem) {
          items.push({ name: item, amount: 1 })
        } else {
          existingItem.amount++
        }

        return items
      }, []),
  },
  actions: {
    addItem(name: string) {
      this.rawItems.push(name)
    },

    removeItem(name: string) {
      const i = this.rawItems.lastIndexOf(name)
      if (i > -1) this.rawItems.splice(i, 1)
    },

    async purchaseItems() {
      const user = useUserStore()
      if (!user.name) return

      console.log('Purchasing', this.items)
      const n = this.items.length
      this.rawItems = []

      return n
    },
  },
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCartStore, import.meta.hot))
}
