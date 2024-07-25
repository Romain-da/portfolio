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
        :link="project.link"
        @show-details="showProjectDetails(project)"
      />
    </div>
    <Modal :isOpen="isModalOpen" @close="closeModal">
      <div v-if="selectedProject">
        <h2>{{ selectedProject.title }}</h2>
        <img :src="selectedProject.image" alt="Project Image" v-if="selectedProject.image">
        <p>{{ selectedProject.description }}</p>
        <iframe v-if="selectedProject.link" :src="selectedProject.link" width="100%" height="600px"></iframe>
      </div>
    </Modal>
  </div>
</template>

<script>
import PortfolioItem from './PortfolioItem.vue';
import Modal from './Modal.vue';
import cvImage from '@/assets/img/cv.png';
import cdcImage from '@/assets/img/cdc.png';
import commentaireImage from '@/assets/img/commentaire.png';

export default {
  name: 'Portfolio',
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
          description: 'Mon CV',
          link: './src/assets/projets/cv/index.html',
          content: ''  // Contenu HTML du CV
        },
        {
          title: 'Cahier des charges',
          image: cdcImage,
          description: 'Cahier des charges pour le site "La Socketterie"',
          link: './src/assets/projets/devoir-cahier-des-charges/cahier-des-charges-la-socketterie.pdf',
          content: ''
        },
        {
          title: 'Dynamiser un espace commentaire',
          image: commentaireImage,
          description: 'Application script JS pour dynamiser un espace commentaire',
          link: './src/assets/projets/devoir-commentaire/index.html',
          content: '',
        }
      ]
    };
  },
  methods: {
    async showProjectDetails(project) {
      if (project.link.endsWith('.html')) {
        // Charger le contenu du fichier HTML
        const response = await fetch(project.link);
        const html = await response.text();
        project.content = html;

        // Charger et appliquer le fichier CSS
        if (project.css) {
          this.loadCSS(project.css);
        }
      }
      this.selectedProject = project;
      this.isModalOpen = true;
    },
    loadCSS(cssPath) {
      // Vérifier si le style est déjà chargé
      let styleElement = document.querySelector(`link[href="${cssPath}"]`);
      if (!styleElement) {
        styleElement = document.createElement('link');
        styleElement.rel = 'stylesheet';
        styleElement.href = cssPath;
        document.head.appendChild(styleElement);
      }
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
h1{
  display: flex;
  justify-content: center;
}
</style>
