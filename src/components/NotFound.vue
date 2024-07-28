<template>
  <div class="not-found">
    <h1>404</h1>
    <img src="/src/assets/img/404.jpg" alt="Page not found" />
    <p>Page not found</p>
  </div>
</template>

<script>
export default {
  name: 'NotFound'
}
</script>

<style>
.not-found {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
}

.not-found h1 {
  font-size: 6rem;
  margin-bottom: 20px;
}

.not-found img {
  max-width: 100%;
  height: auto;
}

.not-found p {
  font-size: 1.5rem;
  margin-top: 20px;
}
</style>