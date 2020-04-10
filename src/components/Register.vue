<template>
    <div>

      <h1>Crear una cuenta</h1>
        <form>

          <div class="form-group">
            <label for="exampleInputName1">Name</label>
            <input v-model="name" type="text" class="form-control"
            id="exampleInputName1" placeholder="Name">
          </div>

          <div class="form-group">
            <label for="exampleInputEmail1">Email</label>
            <input v-model="email" type="email" class="form-control" id="exampleInputEmail1"
            aria-describedby="emailHelp" placeholder="Enter email">
            <small id="emailHelp" class="form-text text-muted">
              We'll never share your email with anyone else.</small>
          </div>

          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input v-model="password" type="password" class="form-control"
            id="exampleInputPassword1" placeholder="Password">
          </div>

          <button @click="register" type="submit" class="btn btn-primary">Crear cuenta</button>
        </form>

        <div class="alert alert-danger" role="alert" v-if="error">
          {{ error }}
        </div>

        <button @click="loginFacebook">Face</button>
    </div>
</template>

<script>
import firebase from 'firebase/app';
import 'firebase/auth';

export default {
  name: 'Register',
  data() {
    return {
      name: '',
      email: '',
      password: '',
      error: '',
    };
  },
  methods: {
    register() {
      this.error = '';
      if (this.name && this.email && this.password) {
        firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
          .then((user) => {
            this.name = '';
            this.email = '';
            this.password = '';
            console.log(user);
          }).catch((err) => {
            this.error = err.message;
          });
      } else {
        this.error = 'Todos los campos son requeridos';
      }
    },
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
