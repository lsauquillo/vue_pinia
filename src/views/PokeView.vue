<template>
<div class="container">
  <div v-if="pokeImg" class="card col-4 offset-3" style="width: 50%">
    <img
      class="card-img-top"
      :src="pokeImg"
      alt="Card image"/>
    <div class="card-body">
      <p class="card-text text-center">
        Poke name:<span> {{ $route.params.pokename }}</span>
      </p>
    </div>
  </div>
  <h2 class="text-center" v-else>No existe el pokemon</h2>
</div>
  

  <button class="btn btn-primary col-4 offset-4 mt-4" @click="back">Volver</button>
</template>

<script setup>
import axios from "axios";
import { ref } from "vue";
import { useRoute, useRouter, RouterLink } from "vue-router";

const route = useRoute(); //para tener acceso a los params
const router = useRouter(); //para empujar a otra ruta

const pokeImg = ref("");

const back = () => {
  router.push("/pokemons");
};

const getPoke = async () => {
  try {
    const { data } = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${route.params.pokename}`
    );
    pokeImg.value = data.sprites.front_default;
    console.log( data );
    console.log(route.params.pokename);
  } catch (err) {
    pokeImg.value = null;
    console.log('No existe el pokemon');
     
  }
};

getPoke();
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