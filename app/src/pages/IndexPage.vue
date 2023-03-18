<script setup></script>

<template>
  <q-page class="flex flex-center">
    <q-list bordered padding>
      <q-item-label header>List Header</q-item-label>

      <q-item>
        <q-item-section top avatar>
          <q-avatar
            color="primary"
            text-color="white"
            square
            icon="bluetooth"
          />
        </q-item-section>

        <q-item-section>
          <q-item-label>Single line item</q-item-label>
          <q-item-label caption
            >Secondary line text. Lorem ipsum dolor sit amet, consectetur
            adipiscit elit.</q-item-label
          >
        </q-item-section>

        <q-item-section side top>
          <q-btn
            dense
            color="blue"
            round
            icon="add_shopping_cart"
            class="q-ml-md"
          >
          </q-btn>
          <q-item-label caption>Add Cart</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>
