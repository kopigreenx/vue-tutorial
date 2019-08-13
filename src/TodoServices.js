import axios from 'axios';

const apiBaseUrl = "http://localhost:8080";

export default class TodoServices{
    getAllTodos(){
        return axios.get(`${apiBaseUrl}/todos`);
    }
}