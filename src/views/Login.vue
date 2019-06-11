<template>
  <div>
    <h3>Sing In (login)</h3>
    <input type="text" placeholder="Email" v-model="email">
    <br>
    <input type="password" placeholder="Password" v-model="password">
    <br>
    <button @click="login()">Connection</button>
    <p>no tienes cuenta?
      <router-link to="sign-up">Crear Cuenta</router-link>
    </p>
  </div>
</template>
<script>
import firebase from "firebase";
export default {
  name: "login",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    login() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(user => {
          this.$router.replace("/home");
        })
        .catch(err => {
          alert(err.message);
        });
    }
  }
};
</script>
