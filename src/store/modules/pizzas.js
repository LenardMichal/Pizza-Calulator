const state = {
  pizzas: [],
};

const getters = {
  getPizzas: state => {
    return state.pizzas;
  },
};

const mutations = {
  appendToArray: (state, payload) => {
    state.pizzas.push(payload);
  },
  clearArray: state => {
    state.pizzas = [];
  },
};

const actions = {
  appendToArray: ({ commit }, payload) => {
    const _payload = Object.assign({}, payload);
    if (_payload.isDiameter) {
      _payload.radius /= 2;
    }
    if (!_payload.isPriceUnit) {
      _payload.unitValue /= _payload.count;
    }
    commit("appendToArray", _payload);
  },
  clearArray: ({ commit }) => {
    commit("clearArray");
  },
};

export default {
  state,
  mutations,
  actions,
  getters,
};
