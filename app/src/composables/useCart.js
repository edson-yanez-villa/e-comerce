import { storeToRefs } from "pinia";
import { useCartStore } from "src/stores/cartStore";
import { computed } from "vue";

export const useCart = () => {
  const storeCart = useCartStore();
  //storeToRefs(storeCart);

  const addToCart = (product) => storeCart.addCart(product);

  return {
    // computed
    products: computed(() => storeCart.getProducts),
    // methods
    addToCart,
  };
};
