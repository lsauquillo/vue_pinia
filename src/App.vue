<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <!-- <img -->
      <!-- alt="Vue logo" -->
      <!-- class="logo" -->
      <!-- src="@/assets/logo.svg" -->
      <!-- width="125" -->
      <!-- height="50" -->
    <!-- /> -->

    <div class="container mb-5 d-flex justify-content-center">
      <div class="row ">
        <div class="col sm-12 col-center">
          <nav class="nav nav-pills ">
        <RouterLink class="navbar-brand" to="/">
          <img
            src="@/assets/logo.svg"
            width="30"
            height="30"
            alt=""
          />Pokemons</RouterLink
        >
        <div class="d-flex justify-content-sm--start">
          <RouterLink class="btn btn-outline-info me-2" to="/">Home</RouterLink>
          <RouterLink class="btn btn-outline-info me-2" to="/about" >About</RouterLink>
          <RouterLink class="btn btn-outline-info me-2" to="/pokemons">Pokemons</RouterLink>
          <RouterLink class="btn btn-outline-info me-2" to="/favoritos">Favoritos</RouterLink>
        </div>
      </nav>
        </div>
        
      </div>
      
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
  margin-top: 2rem;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  } 
  .col-center{
    float: none;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
