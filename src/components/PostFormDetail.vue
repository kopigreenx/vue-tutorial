<template>
<div>
<!-- Modal Structure -->
  <div id="modal_detail" class="modal">
    <div class="modal-content" style="color:black">
        <h3>Add Detail Job</h3>
        <form v-on:submit.prevent="onSubmit" >
            <div class="row">
                <div class="input-field">
                <input placeholder="Placeholder" id="description" type="text" v-model="description" class="validate">
                <label for="description">What are you doing ?</label>
                </div>
            </div>
            <div class="row">
                <button type="submit" class="waves-effect wives-light btn">
                simpan
                </button>
            </div>
        </form>
    </div>
  </div>
<a class="btn-floating halfway-fab waves-effect waves-light red" @click="addButton"><i class="material-icons">add</i></a>
    
  </div>
</template>
<script>
import TodoDetailServices from '../TodoDetailServices';
const tsd = new  TodoDetailServices();

export default {
    name:"PostForm",
    props:['editingTodo'],
    data:function () {
        return{
            description:'',
            confirm:false,
            modalInstanceDetail:null,
        }
    },
    mounted() {
        console.log('POSTFORMDETAIL mounted');
          const modal = document.querySelector('#modal_detail');
            const options = {
                    dismissible:true,
                    onOpenEnd:function(){
                        console.log('modalDetail onOpenEnd')
                    },
                    onCloseStart:function(){
                        console.log('modalDetail onCloseStart')
                        
                        
                    },
                    onCloseEnd:function(){
                        console.log('modalDetail onCloseEnd')
                        
                        
                    }
            };
            this.modalInstanceDetail = M.Modal.init(modal,options);
    },
    methods: {
        onSubmit(){
            const todos = {
                _id: this.id_edit,
                description : this.description,
                confirmed:this.confirm
            }
            tsd.writeTodos(todos).then((result) => {
                //console.log(result);
                
                this.modalInstanceDetail.close();
                // EMIT DATA TO PARENT
                this.$emit('todosCreated',result.data);
                
                this.description="";
            }).catch((err) => {
                console.log(err);
            });
        },
        addButton(){
            this.modalInstanceDetail.open();
        }
    },
    created() {
       
    },
    watch: {
        
    },
    
}
</script>