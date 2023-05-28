<template>
  <div class="container">
    <h1>This is an pokemon page</h1>
    <div v-if="errorData" class="alert alert-danger text-center">{{ errorData}}</div> 
    <p v-if="loading">Cargando...</p>
    <div v-if="data">
      <ul>
      <li v-for="(item, index) in data.results" :key="index">
        <RouterLink :to="`/pokemons/${item.name}`">{{ item.name }}</RouterLink>
      </li>
    </ul>
    </div>
    
  </div>
</template>

<script setup>
//import axios from "axios";
import { ref } from "vue";
import { RouterLink } from "vue-router";
import {useGetData} from '@/composables/getData.js'

//const pokemons = ref([]);

const { loading, getData, data, errorData } = useGetData()

getData("https://pokeapi.co/api/v2/pokemon")
//pokemons.value = data.results

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
</style>