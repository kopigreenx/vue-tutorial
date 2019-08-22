import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

axios.defaults.baseURL = "http://localhost:8080";

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        status:'',
        token:localStorage.getItem('token') || '',
        user:{}
    },
    mutations:{
        auth_success(state,token,user){
            state.status= 'success'
            state.token = token
            state.user = user
        },
        auth_request(state) {
            state.status = 'loading'
        },
        auth_error(state){
            state.status = 'error'
        },
        logout(state){
            state.status='',
            state.token=''
        }
    },
    actions:{
        login({commit},user){
            return new Promise((resolve,reject) => {
                commit('auth_request')
                axios.post('/users/login', user).then((result) => {
                    const token = result.data.token;
                    const user = result.data.data[0].username;
                    localStorage.setItem('token',token)
                    console.log(result.data.data[0].username);
                    //axios.defaults.headers.common['x-access-token'] = token;
                    commit('auth_success', token, user)
                    resolve(result)
                }).catch((err) => {
                    commit('auth_error')
                    localStorage.removeItem('token')
                    reject(err)
                });
            })
        },
        logout({commit}){
            return new Promise((resolve) => {
                commit('logout')
                localStorage.removeItem('token')
                resolve();
            })
        }
    },
    getters:{
        isLoggedIn : state => !!state.token,
        authStatus: state => state.status
    }
})