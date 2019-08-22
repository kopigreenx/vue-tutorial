import axios from 'axios';


axios.defaults.baseURL = "http://localhost:8080";
axios.defaults.headers.common['x-access-token'] = localStorage.getItem('token')
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
export default class TodoServices{

    getAllTodosDetail(id){
        return axios.get(`/todosDetail/${id}`);
    }
    writeTodosDetail(todos){
        if (todos._id) {
            return axios.put(`/todosDetail/${todos._id}`,todos);
        }else{
            return axios.post(`/todosDetail`,todos);
        }
    }
    deleteTodosDetail(id){
        return axios.delete(`/todosDetail/${id}`);
    }
}