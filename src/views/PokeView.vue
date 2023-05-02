<template>
   <h1>Poke name: {{ $route.params.pokename }}</h1> 
   <button class="boton" @click="back">Volver</button>
</template>

<script setup>
import axios from "axios"
import { useRoute, useRouter } from "vue-router"

const route = useRoute() //para tener acceso a los params
const router = useRouter() //para empujar a otra ruta

  const back = ()=>{
    router.push('/pokemons')
  }

  const getPoke = async ()=>{
    try{
     const {data} = await axios.get(`https://pokeapi.co/api/v2/pokemon/${route.params.pokename}`)
     console.log( data)        
    }
    catch(err){
      console.log(err)
    }
  }

  getPoke()
    
</script>

<style scoped>
  .boton{
    width: 60px;
  }   
</style>