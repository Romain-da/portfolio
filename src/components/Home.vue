<template>
  <div>
    <h1>Bienvenue sur ma page d'accueil</h1>
    <p>Bienvenue sur ma page d'accueil.
      Je suis actuellement en formation de développeur web avec le CEF.<br>
      Vous allez découvrir les projets réalisés durant cette formation.<br>
      Voici mon portfolio :<br>
    </p>
    <div>
      <h1>Mon Portfolio</h1>
      <div class="portfolio-list">
        <PortfolioItem 
          v-for="(project, index) in projects" 
          :key="index" 
          :title="project.title" 
          :image="project.image"
          :description="project.description"
          :link="project.link"
          :creationDate="project.creactionDate"
          @show-details="showProjectDetails(project)"
        />
      </div>
      <Modal :isOpen="isModalOpen" @close="closeModal">
        <div v-if="selectedProject">
          <h2>{{ selectedProject.title }}</h2>
          <img :src="selectedProject.image" alt="Project Image" v-if="selectedProject.image">
          <p>{{ selectedProject.description }}</p>
          <p> Date de création : {{ selectedProject.creationDate }}</p>
          <div v-if="selectedProject.link">
            <iframe :src="selectedProject.link" width="100%" height="600px"></iframe>
            <br />
            <button><a :href="selectedProject.link" target="_blank" rel="noopener noreferrer">Ouvrir dans un nouvel onglet</a></button>
          </div>
        </div>
      </Modal>
    </div>
  </div>
</template>

<script>
import PortfolioItem from './PortfolioItem.vue';
import Modal from './Modal.vue';
import cvImage from '@/assets/img/cv.png';
import cdcImage from '@/assets/img/cdc.png';
import commentaireImage from '@/assets/img/commentaire.png';

export default {
  name: 'Home',
  components: {
    PortfolioItem,
    Modal
  },
  data() {
    return {
      isModalOpen: false,
      selectedProject: null,
      projects: [
        {
          title: 'Mon CV',
          image: cvImage,
          description: 'Mon CV, réalisé à partir de HTML et CSS avec FLEXBOX',
          creationDate: '23/05/2024',
          a: './src/assets/projets/cv/index.html',
          link: './src/assets/projets/cv/index.html'
        },
        {
          title: 'Cahier des charges',
          image: cdcImage,
          description: 'Cahier des charges pour le site "La Socketterie"',
          creationDate: '03/07/2024',
          link: './src/assets/projets/devoir-cahier-des-charges/cahier-des-charges-la-socketterie.pdf'
        },
        {
          title: 'Dynamiser un espace commentaire',
          image: commentaireImage,
          description: 'Application script JS pour dynamiser un espace commentaire',
          creationDate: '09/07/2024',
          link: './src/assets/projets/devoir-commentaire/index.html'
        }
      ]
    };
  },
  methods: {
    showProjectDetails(project) {
      this.selectedProject = project;
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
      this.selectedProject = null;
    }
  }
}
</script>

<style>
.portfolio-list {
  display: flex;
  flex-wrap: wrap;
  justify-items: center;
  justify-content: center;
}
h1 {
  display: flex;
  justify-content: center;
}
p{
  display: flex;
  justify-content: center;
}
</style>
