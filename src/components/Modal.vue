<template>
    <div v-if="isOpen" class="modal-overlay" @click.self="close">
      <div class="modal">
        <button class="close-btn" @click="close">X</button>
        <slot></slot>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Modal',
    props: {
      isOpen: Boolean
    },
    methods: {
      close() {
        this.$emit('close');
      }
    }
  }
  </script>
  
  <style>
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }
  .modal {
    background: white;
    padding: 20px;
    border-radius: 5px;
    width: 80%;
    max-width: 800px;
    max-height: 80%;
    overflow-y: auto;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }
  .close-btn {
    background: none;
    border: none;
    font-size: 1.5em;
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
  }
  </style>
  