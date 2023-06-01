<template>
  <h1>Favoritos</h1>
  <p class="text-center" v-if="favoritos.length === 0">No hay favoritos</p>
  <ul v-else class="list-group">
    <li
      class="list-group-item text-center"
      v-for="poke in favoritos"
      :key="poke.id"
    >
      {{ poke.name }}
    </li>
  </ul>
</template>

<script setup>
import { useFavoritosStore } from "@/store/favoritos.js";
import { storeToRefs } from "pinia";

const useFavorito = useFavoritosStore();
const { favoritos } = storeToRefs(useFavorito);
</script>

<style scoped>
h1 {
  text-align: center;
}
</style>