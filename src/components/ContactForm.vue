<template>
    <form @submit.prevent="submitForm">
      <div>
        <label for="name">Nom</label>
        <input type="text" id="name" v-model="name" required>
      </div>
      <div>
        <label for="email">Email</label>
        <input type="email" id="email" v-model="email" required>
      </div>
      <div>
        <label for="message">Message</label>
        <textarea id="message" v-model="message" required></textarea>
      </div>
      <button type="submit">Envoyer</button>
    </form>
  </template>
  
  <script>
  export default {
    name: 'ContactForm',
    data() {
      return {
        name: '',
        email: '',
        message: ''
      }
    },
    methods: {
      submitForm() {
        // Logique pour soumettre le formulaire
      }
    }
  }
  </script>
  
  <style scoped>
  form {
    display: flex;
    flex-direction: column;
  }
  form div {
    margin-bottom: 15px;
  }
  </style>
  