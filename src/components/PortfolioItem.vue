<template>
  <div class="portfolio-item">
    <h2>{{ title }}</h2>
    <img :src="image" alt="Project Image">
    <p>{{ description }}</p>
    <a :href="url" target="_blank">
      <button>Ouvrir le projet</button>
    </a>
  </div>
</template>

<script>
export default {
  name: 'PortfolioItem',
  props: {
    title: String,
    image: String,
    description: String,
    url: String

  }
};
</script>

<style scoped>
.portfolio-item {
  border: 1px solid #ccc;
  padding: 16px;
  margin: 16px;
}
</style>
