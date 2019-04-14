<template>
  <v-app :dark="isDark">
    <Toolbar />
    <v-content>
      <router-view></router-view>
    </v-content>
    <Footer />
  </v-app>
</template>

<script>
import Home from './components/Home.vue';
import Toolbar from './components/Toolbar.vue';
import Footer from './components/Footer.vue';
import { mapState, mapGetters } from 'vuex';

export default {
  name: 'App',
  components: {
    Home,
    Toolbar,
    Footer
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
  .v-card, .v-btn {
    border-radius: 15px;
  }
</style>
