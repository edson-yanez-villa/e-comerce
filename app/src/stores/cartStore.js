import { defineStore } from "pinia";
import { api } from "src/boot/axios";

export const useCartStore = defineStore("cartStore", {
  state: () => ({
    products: [],
    cart: [],
  }),
  getters: {
    getProducts: (state) => state.products,
    getCart: (state) => state.cart,
    counter: (state) =>
      state.cart.reduce((sum, el) => Number(sum + el.amount), 0),
  },
  actions: {
    addCart(product) {
      const finderProduct = this.cart.find((el) => el.id == product.id);

      if (finderProduct == undefined) {
        product.amount = 1;
        this.cart.push(product);
      } else {
        finderProduct.amount += 1;
      }
    },
    remove(id) {
      const index = this.cart.findIndex((el) => el.id == id);
      if (index >= 0) {
        if (this.cart[index].amount > 1) {
          this.cart[index].amount -= 1;
        } else {
          this.cart.splice(index, 1);
        }
      }
    },
    fetchProducts() {
      api.get("products").then((response) => {
        this.products = response.data;
      });
    },
  },
});
