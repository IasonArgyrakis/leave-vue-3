<template>
  <div>
    <form class="login" @submit.prevent="login">
      <h1>Sign in</h1>
      <label>User name</label>
      <input required v-model="username" type="text" placeholder="Snoopy"/>
      <label>Password</label>
      <input required v-model="password" type="password" placeholder="Password"/>
      {{ username }}
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>

import {myAxios} from "../main";

export default {
  name: "Login",
  methods: {
    login: function () {
      const {username, password} = this

      myAxios({
        method: 'post',
        url: '/login',
        data: {
          username: username,
          password: password
        }
      }).then((response) => {
        console.log(response.data)
      });
    }
  }
};
</script>