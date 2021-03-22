<template>
  <main>
    <h1 style="color: #758241">SIGN UP</h1>
    <form class="center" @submit.prevent="adduser()">
      <div class="log-reg">
        <input
          v-model="name"
          type="text"
          name="name"
          placeholder="FULL Name"
          required
        />
      </div>
      <div class="log-reg">
        <input
          v-model="email"
          type="email"
          name="email"
          placeholder="EMAIL"
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
      <div class="log-reg">
        <input
          v-model="confirmPassword"
          type="password"
          name="confirmPassword"
          placeholder="Confirme Password"
          required
        />
      </div>
      <div v-if="getErrorMessage !== ''" class="messageerror">
        {{ getErrorMessage }}
      </div>
      <div v-if="message !== ''" class="messageerror">
        {{ message }}
      </div>

      <button type="submit" class="Valider_btn">SIGN UP</button>

      <router-link :to="{ name: 'home' }">
        <button class="Valider_btn2">SIGN IN</button>
      </router-link>
    </form>
  </main>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Register",
  data() {
    return {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      message: "",
    };
  },
  methods: {
    ...mapActions("account", ["register"]),
    adduser() {
      if (this.password === this.confirmPassword) {
        this.register({
          name: this.name,
          email: this.email,
          password: this.password,
        });
      } else {
        this.message = "Incorrect Password";
      }
    },
  },
  computed: {
    ...mapGetters("account", ["isLogIn", "getErrorMessage"]),
  },
  mounted() {
    if (this.isLogIn) {
      this.$router.replace("/");
    }
  },
};
</script>

<style scoped>
@import "../components/app.css";
</style>
