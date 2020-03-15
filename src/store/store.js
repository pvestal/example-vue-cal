import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        events: []
    },
    mutations: {
        ADD_EVENT: (state, event) => {
            state.events.push(event)
        }
    },
    actions: {},
    getters: {
        events: state => state.events
    },
})