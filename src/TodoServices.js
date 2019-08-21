import axios from 'axios';

axios.defaults.baseURL = "http://localhost:8080";
axios.defaults.headers.common['x-access-token'] = localStorage.getItem('token')

export default class TodoServices{
    getAllTodos(){
        return axios.get('/todos');
    }
    writeTodos(todos){
        if (todos._id) {
            return axios.put(`/todos/${todos._id}`,todos);
        }else{
            return axios.post(`/todos`,todos);
        }
    }
    deleteTodos(id){
        return axios.delete(`/todos/${id}`);
    }
}