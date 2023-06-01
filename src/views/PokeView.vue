<template>
  <p v-if="loading">Cargando...</p>
   <div v-if="errorData" class="alert alert-danger text-center">{{ errorData}}</div> 
  <div v-if="data" class="container">
    <div class="card col-4 offset-3" style="width: 50%">
      <!--
        aqui si lo puede usar
      <p>{{data.sprites}}</p>
      -->
      <img
        class="card-img-top"
        :src="data.sprites.back_default"
        alt="Card image"
      />
      <div class="card-body">
        <p class="card-text text-center">
          Poke name:<span> {{ $route.params.pokename }}</span>
        </p>
      </div>
      
      <button class="btn btn-primary" @click="add(data)">Añadir a Favoritos</button>
    </div>
  </div>
    

  <button class="btn btn-primary col-4 offset-4 mt-4" @click="back">
    Volver
  </button>
</template>

<script setup>
//import axios from "axios";
import { ref } from "vue";
import { useRoute, useRouter, RouterLink } from "vue-router";
import { useGetData } from "@/composables/getData.js";
import { useFavoritosStore } from '@/store/favoritos.js'

const route = useRoute(); //para tener acceso a los params
const router = useRouter(); //para empujar a otra ruta
const useFavorito = useFavoritosStore()
const { add } = useFavorito


const pokeImg = ref("");

const back = () => {
  router.push("/pokemons");
};

const { getData, data, loading, errorData } = useGetData();
getData(`https://pokeapi.co/api/v2/pokemon/${route.params.pokename}`);
//console.log(data) --> aqui data es una RefImpl ?


/* sin composable
const getPoke = async () => {
  try {
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${route.params.pokename}`
    );
    console.log(response.data.sprites)
    pokeImg.value = response.data.sprites.front_shiny;
    //console.log(data);
    //console.log(route.params.pokename);
  } catch (err) {
    pokeImg.value = null;
    console.log("No existe el pokemon");
  }
};
getPoke();
*/
</script>

<style scoped>
.boton {
  width: 100%;
}
span {
  font-weight: 800;
  font-size: 1.5rem;
}
</style>