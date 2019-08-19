import axios from 'axios';

axios.defaults.baseURL = "http://localhost:8080";

export default class TodoServices {
    Login(data) {
        return axios.post('/users/login',data);
    }
    Register(data) {
        return axios.post(`/users/register`, data);
    }
}