<template>
  <div>
    <p>Create account</p>
    <input type="text" placeholder="Email" v-model="email">
    <br>
    <input type="text" placeholder="Password" v-model="password">
    <br>
    <button @click="signUp()">Sing Up</button>
    <p>Ya tienes cuenta?
      <router-link to="login">Alta</router-link>
    </p>
  </div>
</template>
<script>
import firebase from "firebase";
export default {
  name: "SignUp",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    signUp() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(response => {
          // alert('success')
          console.log(response);
        })
        .catch(error => {
          // alert('failure')
          console.log(error);
        });
    }
  }
};
</script>

