<template>
  <div>
  <div class="row">
    <div class="col s6">
      
<div class="fixed-action-btn">
  <a class="btn-floating btn-large red">
    <i class="large material-icons">apps</i>
  </a>
  <ul>
    <li><a class="btn-floating green modal-trigger" data-target="modal1"><i class="material-icons">add_circle_outline</i></a></li>
  </ul>
</div>
      
    </div>
  </div>
  <div class="row">
    <div class="col s4" v-for="(todo,index) in todos"
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
          <a href="#!" class="modal-trigger" data-target="modal1" id="b_edit">Edit</a>
          <a href="#!" class="modal-trigger" data-target="modal1" id="b_delete">Delete</a>
          
        </div>
      </div>
    </div>
  </div>
  <PostForm @todosCreated="addTodo" />
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
      todos:[]
    }),
  methods: {
    addTodo(todo){
      console.log(todo);
      this.todos.unshift(todo);
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
    M.AutoInit();
  }
}
</script>

<style scoped>
  #b_edit{color: blue}
</style>>
