<template>
  <div class="container">
    <h1 class="text-center">Lista de Pokemons</h1>
    <div v-if="errorData" class="alert alert-danger text-center">
      {{ errorData }}
    </div>
    <p v-if="loading">Cargando...</p>
    <div v-if="data">
      <!--aqui se puede manejar data
      {{ data }}
      -->
      <ul class="list-group list-group-flush">
        <li
          class="list-group-item text-center"
          v-for="(item, index) in data.results"
          :key="index"
        >
          <RouterLink :to="`/pokemons/${item.name}`">{{
            item.name
          }}</RouterLink>
        </li>
      </ul>
      
      <div class="d-flex justify-content-center align-items-center" >
        <button :disabled="data.previous === null" @click="getData(data.previous)" class="btn btn-primary me-2">Prev</button>
        <button :disabled="data.next === null" @click="getData(data.next)" class="btn btn-primary">Next</button>
      </div>
    </div>
  </div>
</template>

<script setup>
//import axios from "axios";
import { ref } from "vue";
import { RouterLink } from "vue-router";
import { useGetData } from "@/composables/getData.js";

//const pokemons = ref([]);

const { loading, getData, data, errorData } = useGetData();

getData("https://pokeapi.co/api/v2/pokemon");
//pokemons.value = data.results
//console.log(data) --> aqui data es una RefImpl?

/* sin composable
const getPokemons = async () => {
  try {
    const response = await axios.get("https://pokeapi.co/api/v2/pokemon");
    //console.log(response.data);
    pokemons.value = response.data.results;
    //onsole.log(pokemons.value);
  } catch (err) {
    console.log(err);
  }
};
getPokemons();
*/
</script>

<style scoped>
ul {
  list-style: none;
}
</style>