<template>
  <div>
    <h1>Mon Portfolio</h1>
    <div class="portfolio-list">
      <PortfolioItem 
        v-for="(project, index) in projects" 
        :key="index" 
        :title="project.title" 
        :image="project.image"
        :description="project.description"
      />
    </div>
  </div>
</template>

<script>
import PortfolioItem from './PortfolioItem.vue' 

export default {
  name: 'Portfolio',
  components: {
    PortfolioItem
  },
  data() {
    return {
      projects: [
        {
          title: 'Projet 1',
          image: 'path/to/image1.jpg',
          description: 'Description du projet 1'
        },
        {
          title: 'Projet 2',
          image: 'path/to/image2.jpg',
          description: 'Description du projet 2'
        },
        // Ajoutez plus de projets ici
      ]
    }
  }
}
</script>

<style scoped>
.portfolio-list {
  display: flex;
  flex-wrap: wrap;
}
</style>
