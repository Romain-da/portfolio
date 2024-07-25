<template>
  <header>
    <div id="picture"></div>
    <h1>Portfolio DAVID Romain</h1>
    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <!-- <li><router-link to="/portfolio">Portfolio</router-link></li>-->
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
  
<style>
header {
  background-color: #f1f1f1;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  justify-content: center;
  align-items: center;
  background-image: url("../assets/img/photo.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-top: 15px;
}

h1 {
  text-align: center;
  margin: 20px 0;
}
</style>
