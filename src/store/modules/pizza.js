const state = {
  pizza: {
    radius: 10,
    unitValue: 10,
    count: 1,
    isDiameter: true,
    isPriceUnit: true,
  },
};

const getters = {
  getPizza: state => {
    return state.pizza;
  },
  getPizzaRadius: state => {
    return state.pizza.radius;
  },
  getPizzaUnitValue: state => {
    return state.pizza.unitValue;
  },
  getPizzaCount: state => {
    return state.pizza.count;
  },
};

const mutations = {
  setRadius: (state, payload) => {
    state.pizza.radius = payload;
  },
  setUnitValue: (state, payload) => {
    state.pizza.unitValue = payload;
  },
  setCount: (state, payload) => {
    state.pizza.count = payload;
  },
  setDiameter: (state, payload) => {
    state.pizza.isDiameter = payload;
  },
  setPizzaCost: (state, payload) => {
    state.pizza.isPriceUnit = payload;
  },
};

const actions = {
  setRadius: ({ commit }, payload) => {
    commit("setRadius", payload);
  },
  setUnitValue: ({ commit }, payload) => {
    commit("setUnitValue", payload);
  },
  setCount: ({ commit }, payload) => {
    commit("setCount", payload);
  },
};

export default {
  state,
  mutations,
  actions,
  getters,
};
