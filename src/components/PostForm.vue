<template>
<div>
<!-- Modal Structure -->
  <div id="modal1" class="modal">
    <div class="modal-content">
        <form v-on:submit.prevent="onSubmit">
            <div class="row">
                <div class="input-field">
                <input placeholder="Placeholder" id="first_name" type="text" v-model="description" class="validate">
                <label for="first_name">Description</label>
                </div>
            </div>
            <div class="row">
                <button type="submit" class="waves-effect wives-light btn">
                {{ id_edit ? 'Update' : 'Simpan' }}
                </button>
            </div>
        </form>
    </div>
  </div>
    
  </div>
</template>
<script>
import TodoServices from '../TodoServices';
const ts = new  TodoServices();

export default {
    name:"PostForm",
    props:['editingTodo'],
    data:function () {
        return{
            description:'',
            confirm:false,
            id_edit:null
        }
    },
    mounted() {
        console.log('POSTFORM mounted');
    },
    methods: {
        onSubmit(){
            const todos = {
                _id: this.id_edit,
                description : this.description,
                confirmed:this.confirm
            }
            ts.writeTodos(todos).then((result) => {
                //console.log(result);
                
                this.$parent.modalInstance.close();
                // EMIT DATA TO PARENT
                this.$emit('todosCreated',result.data);
                
                this.description="";
            }).catch((err) => {
                console.log(err);
            });
        }
    },
    created() {
        
    },
    watch: {
        editingTodo(todo){
            if (!todo) {
                this.description="";
                this.id_edit = null;
                this.confirm = false;
            }else{
                this.description=todo.description;
                this.confirm=todo.confirmed;
                this.id_edit = todo._id;
            }
            console.log('running watch with id='+this.id_edit);
            
        }
    },
    
}
</script>