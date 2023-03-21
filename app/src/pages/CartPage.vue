<script setup>
import { useCartStore } from "src/stores/cartStore";
import { computed } from "vue";
const storeCart = useCartStore();

const cartList = computed(() => storeCart.getCart);
</script>
<template>
  <q-page class="">
    <q-card>
      <q-list bordered padding>
        <q-item-label header>Carro de Compras</q-item-label>
        <q-item v-for="product in cartList">
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
            <q-btn dense color="blue" round icon="add" class="q-ml-md"> </q-btn>
          </q-item-section>
        </q-item>
      </q-list>
    </q-card>
  </q-page>
</template>

<style lang="scss" scoped></style>
