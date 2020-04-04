<template>
  <div class="home">
    <img alt="" src="../assets/logo.png">
    <LoginFacebook msg="Welcome to trivia Game"/>
    <Register></Register>
  </div>
</template>

<script>
// @ is an alias to /src
import LoginFacebook from '@/components/LoginFacebook.vue';
import Register from '@/components/Register.vue';

export default {
  name: 'Login',
  components: {
    LoginFacebook,
    Register,
  },
};
</script>
