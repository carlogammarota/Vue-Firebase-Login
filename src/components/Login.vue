<template>
  <div>
    <b-card title="Card title" sub-title="Card subtitle">
      <b-card-text>
        Some quick example text to build on the
        <em>card title</em> and make up the bulk of the card's
        content.
      </b-card-text>
      <b-form inline>
        <label class="sr-only" for="inline-form-input-username">Email</label>
        <b-input-group prepend="@" class="mb-2 mr-sm-2 mb-sm-0">
          <b-input v-model="email" id="inline-form-input-username" placeholder="Username"></b-input>
        </b-input-group>
        <label class="sr-only" for="inline-form-input-name">Name</label>
        <b-input
          v-model="password"
          id="inline-form-input-password"
          class="mb-2 mr-sm-2 mb-sm-0"
          placeholder="password"
          type="password"
        ></b-input>

        <b-button @click="login()" variant="primary">Login</b-button>

        <b-button variant="outline-primary">Registro</b-button>
      </b-form>

      <b-card-text>A second paragraph of text in the card.</b-card-text>

      <a href="#" class="card-link">Card link</a>
      <b-link href="#" class="card-link">Another link</b-link>
    </b-card>
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

