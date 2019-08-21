<template>
  <div class="row" style="margin-top:150px;">
    <form class="col s12" @submit.prevent="loginAct">
      <div class="row">
        <div class="input-field col s4">
          <i class="material-icons prefix">account_circle</i>
          <input id="icon_prefix" type="text" class="validate" v-model="username">
          <label for="icon_prefix">Username</label>
        </div>
        <div class="input-field col s4">
          <i class="material-icons prefix">https</i>
          <input id="icon_telephone" type="password" class="validate" v-model="password">
          <label for="icon_telephone">Password</label>
        </div>
        <div class="input-field col s4">
          <a class="waves-effect waves-light btn" @click="loginAct">Login</a>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name:'Login',
  data:() => ({
    username:'',
    password:''
  }),
  methods: {
    loginAct(){
      const data = {
        username : this.username,
        password : this.password
      };
      this.$store.dispatch('login',data).then(() => {
        this.$router.push('/')
      }).catch((err) => {
        
      });
    }
  },
}
</script>

<style>

</style>