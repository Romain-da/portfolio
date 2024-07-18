<template>
    <footer>
      <p>&copy; 2024 Mon Portfolio</p>
      <div id="social">
                <a href="https://fr.linkedin.com/" target="_blank"><img src="../assets/img/linkedin.png" alt="Linkedin" ></a>
                <a href="https://github.com/" target="_blank"><img src="../assets/img/github.png" alt="GitHub" ></a>
            </div>
      <small>Dernière mise à jour : {{ lastUpdate }}</small>
      
    </footer>
  </template>
  
  <script>
  export default {
    name: 'Footer',
    data() {
      return {
        lastUpdate: new Date().toLocaleDateString()
      }
    }
  }
  </script>
  
  <style scoped>
  footer {
    text-align: center;
    padding: 10px 0;
    background: #f1f1f1;
    position: fixed;
    width: 100%;
    bottom: 0;
  }
  #social{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-basis: 100%;
    margin-top: 10px;
    
    }
    img{
      width: 50px;
    }
  </style>
  