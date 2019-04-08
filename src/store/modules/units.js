const state = {
  currencyType: "$",
  unitType: "cm",
  currencies: ["&#8364", "$", "&#8356", "&#8355", "&#8374", "&#8383"],
  shouldSave: false,
};

const getters = {
  getCurrencyType: state => {
    return state.currencyType;
  },
  getUnitType: state => {
    return state.unitType;
  },
  getCurrencies: state => {
    return state.currencies;
  },
  getSaveStatus: state => {
    return state.shouldSave;
  },
};

const actions = {
  setUnitType: ({ commit }, payload) => {
    commit("setUnitType", payload);
  },
  setCurrencyType: ({ commit }, payload) => {
    commit("setCurrencyType", payload);
  },
  toggleSaveOption: ({ commit }) => {
    commit("toggleSaveOption");
  },
};

const mutations = {
  setUnitType: (state, payload) => {
    state.unitType = payload;
  },
  setCurrencyType: (state, payload) => {
    state.currencyType = payload;
  },
  toggleSaveOption: state => {
    state.shouldSave = !state.shouldSave;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
