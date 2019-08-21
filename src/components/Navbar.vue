<template>
  <nav>
  <div class="container">
    <div class="nav-wrapper">
      <Router-link to="/" class="brand-logo">Todo Apps</Router-link>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/About">About</router-link></li>
          <li><router-link to="/Todo">Todo</router-link></li>
          <li v-if="!this.$store.getters.isLoggedIn"><router-link to="/Login"> <i class="material-icons prefix">https</i></router-link></li>
          <li v-if="this.$store.getters.isLoggedIn"><a @click="Logout">Logout</a></li>
      </ul>
    </div>
  </div>
  </nav>
</template>

<script>
export default {
  methods: {
    Logout(){
      this.$store.dispatch('logout').then((result) => {
        this.$router.push('/login')
      }).catch((err) => {
        console.log(err)
      });
    }
  },
}
</script>

<style>

</style>