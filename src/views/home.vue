<template>
  <div class="row">
    <h1>Home Page</h1>
    <span>{{this.$store.getters.isLoggedIn}}</span>
  </div>
</template>

<script>
export default {
  mounted() {
    const token = localStorage.getItem('token')
    console.log(token)
  },
}
</script>

<style>

</style>