<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <button @click="loginFacebook" class="btn btn-primary">Facebook</button>
    <button class="btn btn-warning">Registrarme</button>


  </div>
</template>

<script>
import firebase from 'firebase/app';
import 'firebase/auth';


export default {
  name: 'LoginFacebook',
  props: {
    msg: String,
  },
  computed: {

  },
  methods: {
    loginFacebook() {
      const provider = firebase.auth().FacebookAuthProvider();
      console.log(firebase.auth.FacebookAuthProvider);
      return firebase.auth().signInWithPopup(provider).then((result) => {
        const token = result.credential.accessToken;
        console.log(token);
        const { user } = result;
        console.log(user);
      }).catch((error) => {
        const errorCode = error.code;
        console.log(errorCode);
        const errorMessage = error.message;
        console.log(errorMessage);
        const { email } = error;
        console.log(email);
        const { credential } = error;
        console.log(credential);
      });
    },

  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
