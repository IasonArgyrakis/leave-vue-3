<template>
  <div class="Login">
    <LoginComponent />
  </div>
</template>

<script>
// @ is an alias to /src
import LoginComponent from "@/components/Login.vue";

export default {
  name: "Login",
  components: {
    LoginComponent,
  },
};
</script>
