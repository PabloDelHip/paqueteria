const app = Vue.createApp({
  data() {
    return {
      mensaje: '¡Hola, Vue 3 desde un archivo JS externo!'
    };
  }
});

// Monta la aplicación en el div con id "app"
app.mount('#app');