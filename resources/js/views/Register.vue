<template>
  <div>
    <h2>Register</h2>
    <form @submit.prevent="onSubmit">

      <input type="name" name="name" id="name" v-model="name" placeholder="Name" autofocus>
      <span v-if="nameError" style="color: red">{{nameError}}</span>

      <input type="email" name="email" id="email" v-model="email" placeholder="Email">
      <span v-if="emailError" style="color: red">{{emailError}}</span>

      <input type="password" name="password" id="password" v-model="password" placeholder="password">
      <span v-if="passwordError" style="color: red">{{passwordError}}</span>

      <input type="password" name="password_confirmation" id="password_confirmation" v-model="password_confirmation" placeholder="password_confirmation">
      
      <button type="submit">Register</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
      password_confirmation: "",

      nameError: "",
      emailError: "",
      passwordError: ""
    }
  },
  methods: {
    onSubmit() {
      const data = {
        name: this.name,
        email: this.email,
        password: this.password,
        password_confirmation: this.password_confirmation
      }
      axios.post('/api/register', data)
        .then(response => {
          this.$store.dispatch('setToken', response.data.token);
          this.$store.dispatch('setUser', response.data.user);
          
          this.$router.push("/");
        })
        .catch(err => {
          const errors = err.response.data.errors;

          this.nameError = errors?.name ? errors.name[0]: '';
          this.emailError = errors?.email ? errors.email[0]: '';
          this.passwordError = errors?.password ? errors.password[0]: '';
        })
    }
  },
}
</script>

<style>

</style>