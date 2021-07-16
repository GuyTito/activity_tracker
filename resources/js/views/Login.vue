<template>
  <div>
    <h2>Login</h2>
    <form @submit.prevent="onSubmit">
      <span v-if="incorrectCredentials" style="color: red">{{incorrectCredentials}}</span>

      <input type="email" name="email" id="email" v-model="email" placeholder="Email" autofocus>
      <span v-if="emailError" style="color: red">{{emailError}}</span>

      <input type="password" name="password" id="password" v-model="password" placeholder="password" autofocus>
      <span v-if="passwordError" style="color: red">{{passwordError}}</span>
      
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>

export default {
  data() {
    return {
      email: "",
      password: "",

      emailError: "",
      passwordError: "",
      incorrectCredentials: "",
    };
  },

  methods: {
    onSubmit() {
      const data = {
        email: this.email,
        password: this.password,
      };

      axios
        .post("/api/login", data)
        .then((response) => {
          this.$store.dispatch("setToken", response.data.token);
          this.$store.dispatch("setUser", response.data.user);

          this.$router.push("/");
        })
        .catch((err) => {
          const errors = err.response.data.errors;

          this.emailError = errors?.email ? errors.email[0] : "";
          this.passwordError = errors?.password ? errors.password[0] : "";

          this.incorrectCredentials = err.response.data.message
            ? err.response.data.message
            : "";
        });
    },
  },
};
</script>

<style>

</style>