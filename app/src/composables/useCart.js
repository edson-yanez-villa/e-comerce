import { storeToRefs } from "pinia";
import { useCartStore } from "src/stores/cartStore";
import { computed } from "vue";

export const useCart = () => {
  const storeCart = useCartStore();
  //storeToRefs(storeCart);

  const addToCart = (product) => storeCart.addCart(product);
  const remove = (id) => storeCart.remove(id);
  const fetchProducts = () => storeCart.fetchProducts();
  const fetchCart = () => storeCart.fetchCart();

  return {
    // computed
    products: computed(() => storeCart.getProducts),
    carts: computed(() => storeCart.getCart),
    counter: computed(() => storeCart.counter),
    // methods
    addToCart,
    remove,
    fetchProducts,
    fetchCart,
  };
};
