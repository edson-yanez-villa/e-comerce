import { defineStore } from "pinia";

export const useCartStore = defineStore("cartStore", {
  state: () => ({
    products: [
      {
        id: 123,
        name: "test1",
        cost: 15.6,
      },
      {
        id: 124,
        name: "test2",
        cost: 1.9,
      },
      {
        id: 125,
        name: "test3",
        cost: 35.8,
      },
    ],
    cart: [],
  }),
  getters: {
    getProducts: (state) => state.products,
    getCart: (state) => state.cart,
  },
  actions: {
    addCart(product) {
      this.cart.push(product);
    },
  },
});
