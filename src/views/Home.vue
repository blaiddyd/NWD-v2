<template>
  <div>
    <About />
    <Home />
  </div>
</template>

<script>
  import Home from '../components/Home.vue';
  import About from '../components/About.vue';

  export default {
    components: {
      Home,
      About,
    }
  }
</script>
