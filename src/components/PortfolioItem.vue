<template>
  <div class="portfolio-item">
    <h2>{{ title }}</h2>
    <img :src="image" alt="Project Image">
    <p>{{ description }}</p>
    <button @click="showDetails">Voir les détails</button>
  </div>
</template>

<script>
export default {
  name: 'PortfolioItem',
  props: {
    title: String,
    image: String,
    description: String
  },
  methods: {
    showDetails() {
      // Logique pour afficher les détails du projet
    }
  }
}
</script>

<style scoped>
.portfolio-item {
  border: 1px solid #ccc;
  padding: 16px;
  margin: 16px;
}
</style>
