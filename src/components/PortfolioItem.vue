<template>
  <div class="portfolio-item">
    <h2>{{ title }}</h2>
    <img :src="image" alt="Project Image">
    <p>{{ description }}</p>
    <button @click="$emit('show-details')">Voir les détails</button>
  </div>
</template>

<script>
export default {
  name: 'PortfolioItem',
  props: {
    title: String,
    image: String,
    description: String,
    link: String,
    creationDate: String
  }
}
</script>

<style>
.portfolio-item {
  border: 1px solid #ccc;
  padding: 16px;
  margin: 16px;
  border-radius: 10px;
  transition: box-shadow 0.3s ease-in-out;
}
.portfolio-item:hover{
  box-shadow: 0 4px 8px black;
}
</style>

