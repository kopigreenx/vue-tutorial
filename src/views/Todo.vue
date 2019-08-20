<template>
  <div>
  <div class="row">
    <div class="col s6" v-for="(todo,index) in todos"
    v-bind:editingTodo="todo"
    :key="index"
    :index="index">
      <div class="card blue-grey darken-1 z-depth-5">
        <div class="card-content white-text">
          <span class="card-title">{{todo.description}}</span>
          <p>
            <label>
              <input type="checkbox" :key="index" :value="todo._id" />
            </label>
          </p>
          <p><span>{{todo.confirmed}}</span></p>
          <p><span>{{index}}</span></p>
        </div>
        <div class="card-action">
          <a href="#!" class="modal-trigger" data-target="modal1" @click="editTodo(todo,index)">Edit</a>
          <a href="#!" class="modal-trigger" @click="deleteTodo(todo._id)">Delete</a>
          
        </div>
      </div>
    </div>
  </div>
  <PostForm @todosCreated="addTodo" :editingTodo="editingTodo"/>
       
  <div class="fixed-action-btn">
    <a id="menu" class="btn-floating btn-large red">
      <i class="large material-icons">apps</i>
    </a>
    <ul>
      <li><a class="btn-floating green modal-trigger" @click="openModalAdd" ><i class="material-icons">add_circle_outline</i></a></li>
    </ul>
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
  data:function () {
    return{
      todos:[],
      editingTodo:null,
      modalInstance:null,
      lastEdit:''
    }},
  methods: {
    addTodo(todo){
      console.log('lastEdit='+this.lastEdit)
      if (this.lastEdit !=='') {
        console.log('indexOfedit = '+this.todos.length)
        this.todos.splice(this.lastEdit,1,todo)
      }else{
        this.todos.unshift(todo);
      }
     
    },
    editTodo(todo,index){
      this.editingTodo=todo;
      console.log('indexOf = '+this.todos.indexOf(todo))
      this.lastEdit=index;
    },
    deleteTodo(id){
      ts.deleteTodos(id).then(() => {
      this.todos = this.todos.filter(p => p._id!==id);
      }).catch((err) => {
        console.log(err);
      });
    },
    openModalAdd(){
      this.modalInstance.open();
      this.editingTodo=null;
      this.lastEdit='';
      
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
    const modal = document.querySelector('.modal');
    const options = {
            onOpenEnd:function(){
                console.log('modal onOpenEnd')
            },
            onCloseStart:function(){
                console.log('modal onCloseStart')
                this.editingTodo=null;
                this.lastEdit='';
                
            },
            onCloseEnd:function(){
                console.log('modal onCloseEnd')
                this.editingTodo=null;
                this.lastEdit='';
                
            }
    };
    this.modalInstance = M.Modal.init(modal,options);

    const float = document.querySelector('.fixed-action-btn');
    M.FloatingActionButton.init(float);
  }
}
</script>

<style scoped>
  #b_edit{color: blue}
</style>>
