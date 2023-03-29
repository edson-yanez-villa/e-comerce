<script setup>
import { onMounted } from "vue";
import { useCart } from "src/composables/useCart";

const { products, addToCart, fetchProducts } = useCart();
onMounted(() => {
  fetchProducts();
});
</script>

<template>
  <q-page class="flex flex-center">
    <q-card class="product-card">
      <div
        v-for="(product, index) in products"
        :key="product.id"
        class="row q-pr-sm q-pl-sm q-pt-sm"
      >
        <div class="col-1 flex flex-center">
          {{ index + 1 }}
        </div>
        <div class="col-2">
          <q-avatar
            color="primary"
            text-color="white"
            square
            icon="bluetooth"
          />
        </div>
        <div class="col-7">
          <div>{{ product.name.substring(1, 30) }}</div>
          <div caption>{{ product.cost }}</div>
        </div>
        <div class="col-1">
          <q-btn
            dense
            color="blue"
            round
            icon="add"
            class="q-ml-md"
            @click="addToCart(product)"
          >
          </q-btn>
        </div>
      </div>
    </q-card>
  </q-page>
</template>

<style lang="scss" scoped>
.product-card {
  width: 400px;
}
.index {
  width: 50px;
}
</style>
