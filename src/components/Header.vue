<template>
  <header>
    <div id="picture"></div>
    <h1>Portfolio DAVID Romain</h1>
    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/portfolio">Portfolio</router-link></li> 
        <li><router-link to="/contact">Contact</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>
  
  <style scoped>
  header{
    background-color: #f1f1f1;
  }
  nav ul {
    display: flex;
    list-style: none;
    padding: 0;
    background-color: #f1f1f1;
  }
  nav ul li {
    margin: 0 15px;
  }
  #picture {
    display: flex;
    background-image: url("../assets/img/photo.png");
    background-repeat: no-repeat;
    background-position: center;
    position: center;
    background-size: 100px;
    width: 100px;
    height: 100px;
    border-radius: 100%;
    margin-top: 15px;
    text-align: center;
    flex-basis: 100%;
    justify-content: center;
    text-align: center; 
    grid-column: 1 /3;
    }

  h1{
    display: flex;
    text-align: center;
    flex-basis: 100%;
    justify-content: center;
    text-align: center;  
    grid-column: 1 /3;
  }  
  </style>
  