import Vue from 'vue'
import App from './App.vue'
// This import loads the firebase namespace.
import firebase from 'firebase/app';

// These imports load individual services into the firebase namespace.
import 'firebase/auth';
import 'firebase/firestore';
import vuetify from './plugins/vuetify';

// This isnt needed if not worried about state management
import {store} from './store/store'

Vue.config.productionTip = true //set to false in production

firebase.initializeApp({
    apiKey: "AIzaSyC2r-otbNoACcdij8XUITtABm3r4Ia5LHY",
    authDomain: "example-vue-cal.firebaseapp.com",
    databaseURL: "https://example-vue-cal.firebaseio.com",
    projectId: "example-vue-cal",
    storageBucket: "example-vue-cal.appspot.com",
    messagingSenderId: "363936163788",
    appId: "1:363936163788:web:fa797e0af881e855a09f69"
});

export const db = firebase.firestore();

new Vue({
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')
