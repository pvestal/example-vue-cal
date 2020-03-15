import Vue from 'vue'
import vuex from 'vuex'

Vue.use(vuex)

const store = new Vue.store({
state: {
    events: []
},
getters: {
    events: state => state.events
},
mutations: {},
actions: {}
})

export default store