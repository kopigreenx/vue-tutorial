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
                <button type="submit" class="waves-effect wives-light btn">Simpan</button>
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
    data:() => ({
        description:''
    }),
    mounted() {
        M.AutoInit();
        
    },
    methods: {
        onSubmit(){
            const todos = {
                description : this.description,
                confirmed:false
            }
            ts.writePost(todos).then((result) => {
                //console.log(result);
                this.description='';
                this.$emit('todosCreated',result.data);
            }).catch((err) => {
                console.log(err);
            });
        }
    },
    
}
</script>