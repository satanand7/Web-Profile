<script setup lang="ts">
import TheIcon from './icons/TheIcon.vue';

defineProps<{
  msg: string
}>()
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      Expertise in <a href="#" target="_blank">Angular</a>, 
      <a href="#" target="_blank">React</a>, <a href="#" target="_blank">NodeJS</a>, and <a href="#" target="_blank">PHP</a>. 7+ years of experience in web development. 
      Your partner in web development solutions.
      <a title="Click to download resume" href="/Satanand Tiwari CV.pdf" download target="_blank" rel="noopener noreferrer">
        <TheIcon :type="'fa-file-pdf-o'"/>
      </a>
      
    </h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
