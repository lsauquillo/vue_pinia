<script setup>
import { RouterLink } from "vue-router";
import { useFavoritosStore } from "@/store/favoritos.js";
import { storeToRefs } from "pinia";
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <div class="d-flex bg-primary text-white p-2 m-2">
          <div class="me-auto">Div 1</div>
          <div class="me-4"><i class="bi bi-trash" style="font-size: 1.2rem"></i></div>
          <div class="me-2"><i class="bi bi-info-circle" style="font-size: 1.2rem"></i></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>