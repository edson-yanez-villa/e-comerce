<script setup>
import { useCart } from "src/composables/useCart";
const { counter } = useCart();
</script>

<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title> Quasar App </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-footer bordered class="bg-white text-primary">
      <q-tabs
        no-caps
        active-color="primary"
        indicator-color="transparent"
        class="text-grey"
      >
        <q-tab>
          <q-btn dense color="blue" round icon="home" class="q-ml-md" to="/">
          </q-btn>
        </q-tab>
        <q-tab>
          <q-btn
            dense
            color="blue"
            round
            icon="shopping_cart"
            class="q-ml-md"
            to="/cart"
          >
            <q-badge color="red" floating>{{ counter }}</q-badge>
          </q-btn>
        </q-tab>
      </q-tabs>
    </q-footer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
