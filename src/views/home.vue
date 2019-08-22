<template>
  <div>
    <div class="row">
     <ul class="collection with-header">
        <li class="collection-header"><h4>Todo Display</h4></li>
        <li class="collection-item avatar" v-for="(todo, index) in todos" :key="index">
          <i class="material-icons circle">folder</i>
          <span class="title">{{todo._id}}</span>
          <p>{{todo.description}}</p>
          <a href="#!" class="secondary-content"><i class="material-icons" v-if="todo.confirmed">check</i></a>
        </li>
        
  </ul>
    </div>
  </div>
</template>

<script>
import TodoServices from '../TodoServices';
const ts = new TodoServices();
export default {
  data() {
    return {
      todos:[]
    }
  },
  created() {
    ts.getAllTodos().then((result) => {
      this.todos = result.data
      console.log(this.todos)
    }).catch((err) => {
      console.log(err)
    });
  },
  mounted() {

  },
}
</script>

<style>

</style>