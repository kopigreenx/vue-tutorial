<template>
  <h4>Todo Page</h4>
</template>

<script>
import TodoServices from '../TodoServices';
const ts = new  TodoServices();
export default {
  name:"Todo",
  data(){
    return{
      todos:[],
    }
  },
  created(){
    ts.getAllTodos()
    .then(result => {
      this.todos = result;
      console.log(this.todos);
    });
  }
}
</script>

<style>

</style>