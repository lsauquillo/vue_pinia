<template>
  <div class="pokemon">
    <h1>This is an pokemon page</h1>
    
    <ul>
      <li v-for="(item, index) in pokemons" :key="index ">
        <RouterLink :to="`/pokemons/${item.name}`">{{item.name}}</RouterLink>        
      </li>
    </ul>
    
    
  </div>
</template>

<script setup>
import axios from "axios";
import { ref } from "vue";
import { RouterLink } from 'vue-router';


const pokemons = ref([])

const getPokemons = async () => {
  try {
    const {data} = await axios.get("https://pokeapi.co/api/v2/pokemon");
    //console.log(data.results);
    pokemons.value = data.results
    console.log(pokemons.value)
  } catch (err) {
    console.log(err);
  }
};
getPokemons()
</script>

<style scoped>
</style>