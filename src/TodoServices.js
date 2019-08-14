import axios from 'axios';

axios.defaults.baseURL = "http://localhost:8080";

export default class TodoServices{
    getAllTodos(){
        return axios.get('/todos');
    }
    writePost(todos){
        if (todos._id) {
            return axios.post(`/todos/${todos._id}`);
        }else{
            return axios.post(`/todos`,todos);
        }
    }
}