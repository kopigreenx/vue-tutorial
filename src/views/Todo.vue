<template>
  <div>
  <div class="row">
    <div class="col s6" v-for="(todo,index) in todos"
    v-bind:editingTodo="todo"
    :key="index"
    :index="index">
      <div v-bind:class="[todo.confirmed ? doneClass : progressClass]">
        <div class="card-content white-text">
          <span class="card-title">{{todo._id}} 
            <label>
              <input type="checkbox" :id="todo._id" :value="todo._id" v-model="todo.confirmed" @click="checkConfirm(todo._id,$event.target.checked,todo.description)"/>
              <span style="font-weight:bold">{{todo.confirmed ? 'Done' : 'Progress'}}</span>
            </label>
          </span>
            <h5 style="text-align:center;" class="darken-4"> {{ todo.description }} </h5>
            <TodoDetails :parentData="todo._id"/>
          
        </div>
        <div class="card-action">
          <a href="#!" class="modal-trigger" data-target="modal1" @click="editTodo(todo,index)">Edit</a>
          <a href="#!" class="modal-trigger" v-if="!todo.confirmed" @click="deleteTodo(todo._id)">Delete</a>
            
        </div>
      </div>
    </div>
  </div>
  <PostForm @todosCreated="addTodo" :editingTodo="editingTodo"/>
       
  <div class="fixed-action-btn">
    <a id="menu" class="btn-floating btn-large red pulse">
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
import TodoDetailServices from '../TodoDetailServices';
import PostForm from '../components/PostForm';
import TodoDetails from '../components/TodoDetails'

const ts = new  TodoServices();
const tsd = new  TodoDetailServices();
export default {
  name:"Todo",
  components:{
    PostForm,
    TodoDetails
  },
  data:function () {
    return{
      todos:[],
      editingTodo:null,
      parentData:null,
      modalInstance:null,
      lastEdit:'',
      doneClass:"card brown darken-1 z-depth-5",
      progressClass:"card blue-grey darken-4 z-depth-5"
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
      console.log(todo)
      this.lastEdit=index;
    },
    deleteTodo(id){
      ts.deleteTodos(id).then(() => {
      this.todos = this.todos.filter(p => p._id!==id);
      }).catch((err) => {
        console.log(err);
      });

      tsd.deleteTodosDetail(id).then((result) => {
        console.log(result)
      }).catch((err) => {
        console.log(err)
      });
    },
    openModalAdd(){
      this.modalInstance.open();
      this.editingTodo=null;
      this.lastEdit='';
      
    },
    checkConfirm(id,confirmed,descr){
      const data = {
        _id : id,
        confirmed: confirmed,
        description:descr
      };

      ts.writeTodos(data).then((result) => {
                //console.log(result);
            }).catch((err) => {
                console.log(err);
            });
    }
  },
  created(){
    ts.getAllTodos()
    .then(result => {
      this.todos = result.data;
      console.log(this.todos)
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
