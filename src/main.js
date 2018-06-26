import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import { store } from './store'
import firebase from 'firebase'

Vue.use(Vuetify)


firebase.initializeApp ({
  apiKey:  'AIzaSyDS7VpDP3iGbpIqYTE-phCcn_8x4MTyh3s' ,
  authDomain:  'testemascrenhas.firebaseapp.com' ,
  databaseURL:  'https://testemascrenhas.firebaseio.com' ,
  projectId:  'testemascrenhas'
})

Vue.config.productionTip = false

/* eslint-disable no-new */
const unsubscribe = firebase.auth()
.onAuthStateChanged((firebaseUser) => {
  new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App),
    created () {
      if (firebaseUser) {
        store.dispatch('autoSignIn', firebaseUser)
      }
    }
  })
  unsubscribe()
})