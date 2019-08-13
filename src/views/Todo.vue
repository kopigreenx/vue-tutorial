<template>
  <div>
  <div class="row">
    <div class="col s4" v-for="(todo,index) in todos"
    v-bind:item="todo"
    :key="todo._id"
    :index="index">
      <div class="card blue-grey darken-1">
        <div class="card-content white-text">
          <span class="card-title">{{todo.description}}</span>
          <p>this is {{todo.confirmed}}</p>
        </div>
        <div class="card-action">
          <a href="#" id="b_edit">Edit</a>
          <a href="#" id="b_delete">Delete</a>
        </div>
      </div>
    </div>
  </div>
            <a class="waves-effect waves-light btn modal-trigger" data-target="modal1" href="#modal1">Modal</a>

  <!-- Modal Structure -->
  <div id="modal1" class="modal modal-fixed-footer">
    <div class="modal-content">
      <h4>Modal Header</h4>
      <p>A bunch of text</p>
    </div>
    <div class="modal-footer">
      <a href="#!" class="modal-close waves-effect waves-green btn-flat">Agree</a>
    </div>
  </div>
  </div>
</template>

<script>
import TodoServices from '../TodoServices';
const ts = new  TodoServices();
export default {
  name:"Todo",
  data(){
    return{
      todos:[]
    }
  },
  created(){
    ts.getAllTodos()
    .then(result => {
      this.todos = result.data;
      //console.log(this.todos);
    }).catch(err =>{
      console.error(err);
    })
  }
}
</script>

<style scoped>
  #b_edit{color: blue}
</style>>
