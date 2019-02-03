<template>
  <v-app :dark="isDark">
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
import { mapState, mapGetters } from 'vuex';

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
  },
  computed: {
    ...mapState([
      'isDark'
    ])
  }
}
</script>

<style>
</style>
