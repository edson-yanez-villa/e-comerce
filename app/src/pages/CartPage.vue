<script setup>
import { useCart } from "src/composables/useCart";
const { carts, remove, addToCart } = useCart();
</script>
<template>
  <q-page class="">
    <q-card>
      <q-list bordered padding>
        <q-item-label header>Carro de Compras</q-item-label>
        <q-item v-for="product in carts">
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
            <q-item-label caption>{{
              (product.cost * product.amount).toFixed(2)
            }}</q-item-label>
          </q-item-section>
          <q-item-section>
            <q-item-label>{{ product.amount }}</q-item-label>
          </q-item-section>
          <q-item-section side top>
            <q-btn
              dense
              color="blue"
              round
              icon="remove"
              class="q-ml-md"
              @click="remove(product.id)"
            >
            </q-btn>
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

<style lang="scss" scoped></style>
