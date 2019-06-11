<template>
  <div>
    <p>This is at home!</p>
    <!-- <p v-for="user of users">
      {{user.name}}
    </p>-->
    <button @click="boton()">BOTON</button>
    <br>
    {{ bestWords }}
    <br>
  </div>
</template>
<script>
// import firebase from "firebase";
// import { db } from "../firebase/firebase";
// import * as firebase from "firebase";
// const db = firebase.firestore();
export default {
  name: "Home",
  data() {
    return {
      bestWords: []
    };
  },
  methods: {
    boton() {
      // console.log("boton");
      // var datees = db
      //   .collection("bestWords")
      //   .get()
      //   .then(function(querySnapshot) {
      //     let datas = [];
      //     querySnapshot.forEach(function(doc) {
      //       // doc.data() is never undefined for query doc snapshots
      //       // console.log(doc.data().text);
      //       datas.push(doc.data().text);
      //       // this.datas.push(doc.data());
      //       // return datas;
      //     });
      //     // console.log(datas);
      //     // return datas;
      //     // console.log("this.bestWords", datas);
      //   });
      // console.log(datees);
    },
    logout() {
      // firebase
      //   .auth()
      //   .db()
      //   .then(() => {
      //     this.$router.replace("login");
      //   });
    }
  }
  // firebase: {
  //   users: {
  //     source: db.ref("users"),
  //     // Optional, allows you to handle any errors.
  //     cancelCallback(err) {
  //       console.error(err);
  //     }
  //   }
  // }
};
</script>

