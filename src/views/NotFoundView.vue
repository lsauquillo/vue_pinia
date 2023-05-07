<template>
<div class="container">
  <h1>404 Page not found</h1> 
  <button class="btn btn-primary col-4 offset-4 mt-4" @click="back">Volver</button> 
</div>
  
</template>

<script setup>
import { useRoute, useRouter, RouterLink } from "vue-router";
const router = useRouter(); //para empujar a otra ruta

 const back = () => {
  router.push("/");
};  
</script>

<style scoped>
    
</style>