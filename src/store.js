import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

axios.defaults.baseURL = "http://localhost:8080";

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        status:Boolean,
        token:localStorage.getItem('token') || '',
        data:{}
    },
    mutations:{
        auth_success(state,token,data,auth){
            state.status= auth
            state.token = token
            state.data = data
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
                //commit('auth_request')
                axios.post('/users/login', user).then((result) => {
                    const token = result.data.token;
                    const auth = result.data.auth;
                    const userData = result.data.data;
                    console.log(result);
                    localStorage.setItem('token',token)
                    //axios.defaults.headers.common['x-access-token'] = token;
                    commit('auth_success', token, userData,auth)
                    resolve(result)
                }).catch((err) => {
                    commit('auth_error')
                    localStorage.removeItem('token')
                    reject(err)
                });
            })
        },
        logout({commit}){
            return new Promise((resolve,reject) => {
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