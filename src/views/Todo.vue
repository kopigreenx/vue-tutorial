<template>
  <div>
  <div class="row">
    <div class="col s6">
      
<div class="fixed-action-btn">
  <a id="menu" class="btn-floating btn-large red">
    <i class="large material-icons">apps</i>
  </a>
  <ul>
    <li><a class="btn-floating green modal-trigger" data-target="modal1"><i class="material-icons">add_circle_outline</i></a></li>
  </ul>
</div>
      
    </div>
  </div>
  <div class="row">
    <div class="col s6" v-for="(todo,index) in todos"
    v-bind:item="todo"
    :key="todo._id"
    :index="index">
      <div class="card blue-grey darken-1 z-depth-5">
        <div class="card-content white-text">
          <span class="card-title">{{todo.description}}</span>
          <p>
            <label>
              <input type="checkbox" :key="todo._id" :value="todo._id" />
            </label>
          </p>
          <p><span>{{todo.confirmed}}</span></p>
        </div>
        <div class="card-action">
          <a href="#!" class="modal-trigger" data-target="modal1" @click="editTodo(todo)">Edit</a>
          <a href="#!" class="modal-trigger" @click="deleteTodo(todo._id)">Delete</a>
          
        </div>
      </div>
    </div>
  </div>
  <PostForm @todosCreated="addTodo" :editingTodo="editingTodo"/>
  <div class="tap-target" data-target="menu">
    <div class="tap-target-content">
      <h5>Menu</h5>
      <p>Hover This Button to reveal Add button</p>
    </div>
  </div>
  </div>
</template>

<script>
import TodoServices from '../TodoServices';
import PostForm from '../components/PostForm';

const ts = new  TodoServices();
export default {
  name:"Todo",
  components:{
    PostForm
  },
  data:() => ({
      todos:[],
      editingTodo:null
    }),
  methods: {
    addTodo(todo){
      console.log(todo);
      this.todos.unshift(todo);
    },
    editTodo(todo){
      this.editingTodo=todo;
    },
    deleteTodo(id){
      ts.deleteTodos(id).then(() => {
        this.todos = this.todos.filter(p => p._id!==id);
      }).catch((err) => {
        console.log(err);
      });
    }
  },
  created(){
    ts.getAllTodos()
    .then(result => {
      this.todos = result.data;
    }).catch(err =>{
      console.error(err);
    })
    
  },
  mounted() {
    
    M.TapTarget.getInstance(document.querySelector('.tap-target')).open();
  }
}
</script>

<style scoped>
  #b_edit{color: blue}
</style>>
