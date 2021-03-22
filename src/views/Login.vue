<template>
  <h1 style="color: #758241">SIGN IN</h1>
  <form class="center" @submit.prevent="auth()">
    <div class="log-reg">
      <input
        v-model="email"
        type="email"
        name="email"
        placeholder="MAIL"
        required
      />
    </div>
    <div class="log-reg">
      <input
        v-model="password"
        type="password"
        name="password"
        placeholder="PASSWORD"
        required
      />
    </div>
    <div v-if="getErrorMessage !== ''" class="messageerror">
      {{ getErrorMessage }}
    </div>

    <button type="submit" class="Valider_btn">LOG IN</button>
    <router-link :to="{ name: 'register' }"
      ><button class="Valider_btn2">SIGN UP</button>
    </router-link>
  </form>
</template>


<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    ...mapActions("account", ["login", "logout", "getAccount"]),

    auth() {
      this.login({ email: this.email, password: this.password });
    },
  },
  computed: {
    ...mapGetters("account", [
      "getToken",
      "getUserData",
      "isLogIn",
      "getErrorMessage",
    ]),
  },
};
</script>


<style scoped>
@import "../components/app.css";
</style>
