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
        :url="project.url"
      />
    </div>
  </div>
</template>

<script>
import PortfolioItem from './PortfolioItem.vue';
import cvImage from '@/assets/img/cv.png';
import cdcImage from '@/assets/img/cdc.png';
import commentaireImage from '@/assets/img/commentaire.png';

export default {
  name: 'Portfolio',
  components: {
    PortfolioItem
  },
  data() {
    return {
      projects: [
        {
          title: 'Mon CV',
          image: cvImage,
          description: 'Mon CV',
          url:'./src/assets/projets/cv/index.html'
        },
        {
          title: 'Cahier des charges',
          image: cdcImage,
          description: 'Cahier des charges pour le site "La Socketterie"',
          url:'./src/assets/projets/devoir-cahier-des-charges/cahier-des-charges-la-socketterie.pdf'
        },
        {
          title: 'Dynamiser un espace commentaire',
          image: commentaireImage,
          description: 'Application script JS pour dynamiser un espace commentaire',
          url:'./src/assets/projets/devoir-commentaire/index.html'
        }
      ]
    };
  }
}
</script>

<style scoped>
.portfolio-list {
  display: flex;
  flex-wrap: wrap;
  justify-items: center;
  justify-content: center;
}
h1{
  display: flex;
  justify-content: center;
}
</style>
