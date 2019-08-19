<template>
  <div>
    <Navbar></Navbar>
    <div class="container">
      <router-view></router-view>
    </div>
    
  </div>
</template>

<script>

import "../node_modules/materialize-css/dist/css/materialize.min.css";
import "../node_modules/materialize-css/dist/css/icon.css";
import "../node_modules/materialize-css/dist/js/materialize.min.js";

import Navbar from './components/Navbar'
export default {
  name: 'app',
  components: {
    Navbar,
  },
  mounted() {
  },
}
</script>

<style>
</style>
