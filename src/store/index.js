import { createStore } from 'vuex';
// import axios from 'axios';

import Axis from "@/assets/data/axis.json";
import Parts from "@/assets/data/parts.json";


export default createStore({
  state: {
    menuState: false,
    filtersState: false,
    filtersStateSmartphone: false,
    axis: [],
    parts:[],
    filters:{
      axis:1,
      state:[],
      parts:[]
    },
    lang:''
  },
  getters: {
  },
  mutations: {
    loadAxis(state,axis){
      state.axis = {...axis};
    },
    loadParts(state,parts){
      state.parts = {...parts};
    },
    setLang(state,lang){
      state.lang = lang;
    },
    setMenuState(state,bool){
      state.menuState = bool;
    },
    setFiltersState(state,bool){
      state.filtersState = bool;
    },
    setFiltersStateSmartphone(state,bool){
      state.filtersStateSmartphone = bool;
    },
    setFilters(state,filters){
      state.filters = filters
    }
  },
  actions: {
    // loadAxis({ commit }) {
    //   axios
    //   .get('https://...')
    //   .then(response => {
    //     commit('loadAxis', response.data);
    //   })
    // },
    // loadParts({ commit }) {
    //   axios
    //   .get('https://...')
    //   .then(response => {
    //     commit('loadParts', response.data);
    //   })
    // },
    loadAxis({ commit }) {
      commit('loadAxis', Axis);
    },
    loadParts({ commit }) {
      commit('loadParts', Parts);
    },
    setLang({commit},lang){
      commit("setLang",lang);
    },
    setMenuState({commit},bool){
      commit("setMenuState",bool);
    },
    setFiltersState({commit},bool){
      commit("setFiltersState",bool);
    },
    setFiltersStateSmartphone({commit},bool){
      commit("setFiltersStateSmartphone",bool);
    },
    setFilters({commit},filters){
      commit("setFilters",filters);
    }
  },
  modules: {
  }
})
