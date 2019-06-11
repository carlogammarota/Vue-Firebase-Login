import Vue from "vue";
import App from "./App.vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import firebase from "firebase";
import { db } from "./firebase/firebase";
import router from "./router";

// import socketio from "socket.io";s
// import VueSocketIO from "vue-socket.io";
// import firebase from "firebase";
// export const SocketInstance = socketio('http://localhost:4113');

// Vue.use(VueSocketIO, SocketInstance);
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import BootstrapVue from "bootstrap-vue";

Vue.use(BootstrapVue);

// app.js
// @import 'node_modules/bootstrap/scss/bootstrap';
// @import 'node_modules/bootstrap-vue/src/index.scss';

// var firebaseConfig = {
//   apiKey: "AIzaSyCHB01JYnzwEUZ5yCFCOnSmhsXPbuChpBM",
//   authDomain: "codesandbox-1168d.firebaseapp.com",
//   databaseURL: "https://codesandbox-1168d.firebaseio.com",
//   projectId: "codesandbox-1168d",
//   storageBucket: "codesandbox-1168d.appspot.com",
//   messagingSenderId: "111482385632",
//   appId: "1:111482385632:web:7fe181b0113afc7b"
// };
// Initialize Firebase
// firebase.initializeApp(firebaseConfig);

Vue.config.productionTip = false;
Vue.use(ElementUI);
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
