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
      <q-list bordered padding>
        <q-item-label header>Productos</q-item-label>
        <q-item v-for="product in products">
          <q-item-section top avatar>
            <q-avatar
              color="primary"
              text-color="white"
              square
              icon="bluetooth"
            />
          </q-item-section>

          <q-item-section>
            <q-item-label>{{ product.name }}</q-item-label>
            <q-item-label caption>{{ product.cost }}</q-item-label>
          </q-item-section>

          <q-item-section side top>
            <q-btn
              dense
              color="blue"
              round
              icon="add"
              class="q-ml-md"
              @click="addToCart(product)"
            >
            </q-btn>
          </q-item-section>
        </q-item>
      </q-list>
    </q-card>
  </q-page>
</template>

<style lang="scss" scoped>
.product-card {
  width: 400px;
}
</style>
