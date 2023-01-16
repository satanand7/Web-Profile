<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import TheIcon from './components/icons/TheIcon.vue';
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="/1540879221076.jpeg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="Satanand Tiwari (Professional Web Developer)" />

      <nav>
        <RouterLink to="/"> <TheIcon :type="'fa-info-circle'"/> About</RouterLink>
        <RouterLink to="/experience"> <TheIcon :type="'fa-briefcase'"/>  Work Experience</RouterLink>
        <RouterLink to="/education"><TheIcon :type="'fa-graduation-cap'"/> Education</RouterLink>
        <RouterLink to="/skills"><TheIcon :type="'fa-cogs'"/> Skills</RouterLink>
        <RouterLink to="/contact"><TheIcon :type="'fa-envelope'"/> Contact</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  /* max-height: 100vh; */
}

.logo {
  display: block;
  margin: 0 auto 2rem;
  border-radius: 1rem;
  box-shadow: 0px 0px 8px 4px #888;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: #fff;
  background-color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  color: #fff;
  background-color: var(--color-text);
}

nav a {
  text-decoration: none;
  display: inline-block;
  padding: 1rem;
  margin: 0.5rem 1rem;
  background-color: #74b9ff;
  border-radius: 2rem;
  color: #fff;
  font-size: 1.2rem;
  /* border-left: 1px solid var(--color-text); */
}

nav a:hover{
  box-shadow: 1px 1px 10px 1px #888;
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
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem; 
    width: 100%;
    
  }
}
</style>
