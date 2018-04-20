// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false

let app;
var config = {
  apiKey: "AIzaSyC0ZJRmiaZXMvWdEIV3f9MckDlUm4pUhWM",
  authDomain: "loginregistervuejsfirebase.firebaseapp.com",
  databaseURL: "https://loginregistervuejsfirebase.firebaseio.com",
  projectId: "loginregistervuejsfirebase",
  storageBucket: "loginregistervuejsfirebase.appspot.com",
  messagingSenderId: "457817282635"
};
firebase.initializeApp(config);
firebase.auth().onAuthStateChanged(function(user) {
  if (!app) {

/* eslint-disable no-new */
      new Vue({
        el: '#app',
        router,
        components: { App },
        template: '<App/>'
      })
  }
});