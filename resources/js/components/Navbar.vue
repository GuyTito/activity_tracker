<template>
  <nav>
    <h1><router-link to="/">Activity Tracker</router-link></h1>
    <ul>
      <li v-if="isLoggedIn">{{ this.$store.state.user.name }}</li>
      <li><router-link to="/login" v-if="!isLoggedIn">Login</router-link></li>
      <li>
        <router-link to="/register" v-if="!isLoggedIn">Register</router-link>
      </li>
      <li v-if="isLoggedIn" @click="logout">Logout</li>
    </ul>
  </nav>
</template>

<script>
export default {
  computed: {
    isLoggedIn() {
      return this.$store.state.token;
    },
  },
  methods: {
    logout() {
      axios
        .post("/api/logout", {
          headers: {
            Authorization: `Bearer ${this.$store.state.token}`,
          },
        })
        .then((response) => {
          console.log(response.data.message);
        })
        .catch((err) => {
          console.log("Oops! " + err.response.data.message);
        });

      this.$store.dispatch("logoutUser")
      this.$router.push(`/login`);
    },
  },
};
</script>

<style>
</style>