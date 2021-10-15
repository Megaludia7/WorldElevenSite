const state = {
  count : 1
};
const getters ={
  doubleCount: state => state.count *2
};
const mutations = {
  increment(state,upNumber) {
    state.count += upNumber;
  },
  decrement(state,downNumber) {
    state.count -= downNumber;
  }
};
const actions = {
  decrement({ commit },number) {
    commit("decrement",number);
  }
};

export default {
  // namespaced:true,
  state,
  getters,
  mutations,
  actions
}

