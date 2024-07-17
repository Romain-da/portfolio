<template>
    <footer>
      <p>&copy; 2024 Mon Portfolio</p>
      <div id="linkedin">
                <a href="https://fr.linkedin.com/" target="_blank"><img src="../assets/img/linkedin.png" alt="Linkedin" width="10%"></a>
                <a href="https://github.com/" target="_blank"><img src="../assets/img/github.png" alt="GitHub" width="10%"></a>
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
  #linkedin{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-basis: 100%;
    margin-top: 10px;
    }

#github{
    display: flex;
    flex-basis: 50%;
    margin-right: auto;
    margin-left: auto;
}
  </style>
  