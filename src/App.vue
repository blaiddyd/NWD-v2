<template>
  <v-app>
    <Toolbar />

    

    <v-content>
      <About />
      <Home />
    </v-content>
  </v-app>
</template>

<script>
import Home from './components/Home.vue';
import Toolbar from './components/Toolbar.vue';
import About from './components/About.vue';

export default {
  name: 'App',
  components: {
    Home,
    Toolbar,
    About
  },
  data () {
    return {
      //
    }
  }
}
</script>

<style>
</style>
