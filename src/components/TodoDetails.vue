<template>
  <div> 
    
    <ul class="collapsible popout">
        <li v-for="(todoDet, indexDet) in todosDetail" :key="indexDet" style="color:black">
            <div class="collapsible-header"><i class="material-icons">filter_drama</i>{{todoDet.description}}</div>
            <div class="collapsible-body" style="background-color:white">
                <p>{{todoDet.description}}</p>
                <p>{{todoDet.description}}</p>
            </div>
        </li>
    </ul>
    
        <PostFormDetail />
  </div>
</template>

<script>
 
import TodoDetailServices from '../TodoDetailServices';
import PostFormDetail from './PostFormDetail';

const tsd = new TodoDetailServices();
export default {
    components:{
        PostFormDetail
    },
    props:['parentData'],
    data() {
        return {
            todosDetail:[],
            parent_id:null,
        }
    },
    methods: {
    },
    created() {
        
    const elems = document.querySelectorAll('.collapsible');
    M.Collapsible.init(elems);
    
       
        tsd.getAllTodosDetail(this.parentData).then((result) => {
           this.todosDetail = result.data
        }).catch((err) => {
            console.log(err)
        });
        
    },
    mounted() {
        
    },
    watch: {
        parentData(id){
            
        }
    },
}
</script>

<style>

</style>