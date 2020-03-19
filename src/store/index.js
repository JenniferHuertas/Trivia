import Vue from 'vue';
import Vuex from 'vuex';
import { vuexfireMutations, firestoreAction } from 'vuexfire';
import db from '../db';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    starWars: [],
  },
  mutations: {
    ...vuexfireMutations,
  },
  actions: {
    bindpreguntasStarWars: firestoreAction(({ bindFirestoreRef }) => bindFirestoreRef('starWars', db.collection('preguntasStarWars'))),
  },
  modules: {
  },
});
