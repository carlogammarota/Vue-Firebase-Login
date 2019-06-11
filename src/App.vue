<template>
  <div id="app">
    <img width="25%" src="./assets/logo.png">
    <!-- <Notifications></Notifications> -->
    <div class="nav">
      <!-- <router-link to="/">Home</router-link>
      <br>
      <router-link to="/login">Login</router-link>
      <br>-->
      <!-- <router-link to="/signup">Sign-up</router-link>
      <br>-->
      <!-- <router-link to="/home"></router-link> -->
    </div>
    <router-view></router-view>
    <button class="button logout" v-on:click="logout">Logout</button>
  </div>
</template>

<script>
import Notifications from "./views/notification";
import firebase from "firebase";
export default {
  name: "App",
  data() {
    return {
      booksRef: {}
    };
  },
  components: {
    Notifications
  },
  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace("Login");
        });
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
