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
      <button @click="remove(poke.id)" class="ms-4"><i class="bi bi-trash" style="font-size: 1.0rem"></i></button>
      <router-link class="ms-2" :to="`/pokemons/${poke.name}`">
        <i class="bi bi-info-circle" style="font-size: 1.0rem"></i>
      </router-link>
    </li>
  </ul>
</template>

<script setup>
import { useFavoritosStore } from "@/store/favoritos.js";
import { storeToRefs } from "pinia";
import { RouterLink } from "vue-router";

const useFavorito = useFavoritosStore();
const { favoritos } = storeToRefs(useFavorito);
const { remove } = useFavorito
</script>

<style scoped>
h1 {
  text-align: center;
}
</style>