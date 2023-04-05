import { defineStore } from "pinia";
import { api } from "src/boot/axios";

export const useCartStore = defineStore("cartStore", {
  state: () => ({
    products: [],
    cart: null,
  }),
  getters: {
    getProducts: (state) => state.products,
    getCart: (state) => state.cart,
    counter: (state) => {
      if (state.cart == null) {
        return 0;
      }
      return state.cart.reduce((sum, el) => Number(sum + el.quantity), 0);
    },
  },
  actions: {
    addCart(product) {
      const finderProduct = this.cart.find((el) => el.product_id == product.id);
      let amount = 0;
      if (finderProduct == undefined) {
        amount = 1;
      } else {
        amount = finderProduct.quantity;
      }

      api
        .post("carts", {
          id: product.id,
          quantity: amount,
          userId: 1,
        })
        .then((response) => {
          if (amount == 1) {
            this.cart.push({
              id: response.data,
              quantity: amount,
              product_id: product.id,
              product: product,
            });
          } else {
            finderProduct.quantity += 1;
          }
        });
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
        this.cart = response.data.cart;
        this.products = response.data.products;
      });
    },
    fetchCart() {
      api.get("carts").then((response) => {
        this.cart = response.data;
      });
    },
  },
});
