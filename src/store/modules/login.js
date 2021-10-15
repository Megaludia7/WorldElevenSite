// import axios from 'axios';

// const state = {
//   isLogin: false,
//   userId: '',
//   password: ''    
// };
// const getters = {
//   loginCheck: state => state.isLogin 
// }
// const mutations = {
//   login(state, param) {
//     state.isLogin = true;
//     state.userId = param.userId;
//     state.password = param.password;
//   },
//   logout(state) {
//     state.isLogin = false;
//     state.userId = '';
//     state.password = '';
//   }
// };
// const actions = {
//   async login({ commit }, { userId, password }) {
//     const param = {
//       userId: userId,
//       password: password
//     }

//     try {
//       const loginResult = await axios.post('http://localhost:3000/login', param);
//       if (loginResult.data === 'ahouser') {    
//         // 認証に成功した場合
//         commit('login', param);
//       } else {
//         // 認証に失敗した場合
//         console.log('認証に失敗しました。');
//       }
//     } catch{
//       alert('処理に失敗しました。')
//     }

//   },
//   logout({ commit }) {
//     commit('logout');
//   }  
// }

// export default {
//   state,
//   getters,
//   mutations,
//   actions
// }
