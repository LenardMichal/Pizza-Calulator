import Vue from "vue";
import Vuex from "vuex";
// eslint-disable-next-line
import pizza from "./modules/pizza";
import pizzas from "./modules/pizzas";
import units from "./modules/units";
Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    pizza,
    pizzas,
    units,
  },
});
