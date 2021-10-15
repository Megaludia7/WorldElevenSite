import Vue from 'vue';
import Vuex from 'vuex';
import count from './modules/count';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLogin: false,
    userId: '',
    password: ''      
  },
  getters: {
    loginCheck: state => state.isLogin 
  },
  mutations: {
    login(state, param) {
      state.isLogin = true;
      state.userId = param.userId;
      state.password = param.password;
    },
    logout(state) {
      state.isLogin = false;
      state.userId = '';
      state.password = '';
    }  
  },
  actions: {
    async login({ commit }, { userId, password }) {
      const param = {
        userId: userId,
        password: password
      }
  
      try {
        console.log("will get result");
        console.log(param.userId);
        const loginResult = await axios.post('http://localhost:3000/login', param);
        console.log("got result");
        if (loginResult.data === 'ahouser') {    
          // 認証に成功した場合
          commit('login', param);
        } else {
          // 認証に失敗した場合
          console.log('認証に失敗しました。');
        }
      } catch{
        alert('処理に失敗しました。')
      }
  
    },
    logout({ commit }) {
      commit('logout');
    }  
  },    
  modules: {
    count
  }
})