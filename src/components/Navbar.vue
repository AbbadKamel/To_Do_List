<template>

<header class="header">

    <router-link :to="{name: 'home'}">
      <img src="../assets/todo.png" alt="Logo Todo" id="our_logo">
    </router-link>

    <input 
      type="checkbox" 
      id="menu-btn" 
      class="menu-btn" 
    />
    <label 
      for="menu-btn"
      class="menu-icon" 
    > <span 
        class="navicon"
      >
      </span>
    </label>

    <ul class="menu">

      <li>
        <router-link  
          :to="{name: 'about'}" 
          class="btn_menu"
        > About us 
        </router-link>
      </li>
      <li>
        <a v-if="isLogIn"  href="" @click="logout()" style="color:'red'">Log Out</a>
        <router-link v-else  :to="{name: 'login'}" class="btn_menu">Log in</router-link>
      </li>
    </ul>
</header>



</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Navbar',
  methods: {
    ...mapActions("account", ["getAccountData", "logout"]),

  },
  computed: {
    ...mapGetters("account", ['isLogIn']),
  },
}
</script>

<style scoped>
@import './navbar.css';
</style>