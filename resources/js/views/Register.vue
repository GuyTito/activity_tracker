<template>
  <div class="container mt-3">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header">Register</div>

          <div class="card-body">
            <form @submit.prevent="onSubmit">

              <div class="form-group row mb-3">
                <label for="name" class="col-md-4 col-form-label text-md-right">Name</label>

                <div class="col-md-6">
                  <input name="name" id="name" v-model="name" type="name" class="form-control" required autofocus/>
                  <div v-if="nameError" class="alert alert-danger" role="alert">
                    {{ nameError }}
                  </div>
                </div>
              </div>

              <div class="form-group row mb-3">
                <label for="email" class="col-md-4 col-form-label text-md-right">E-Mail Address</label>

                <div class="col-md-6">
                  <input name="email" id="email" v-model="email" type="email" class="form-control" required/>
                  <div v-if="emailError" class="alert alert-danger" role="alert">
                    {{ emailError }}
                  </div>
                </div>
              </div>

              <div class="form-group row mb-3">
                <label for="password" class="col-md-4 col-form-label text-md-right">Password</label>

                <div class="col-md-6">
                  <input name="password" id="password" v-model="password" type="password" class="form-control" required/>

                  <div v-if="passwordError" class="alert alert-danger" role="alert">
                    {{ passwordError }}
                  </div>
                </div>
              </div>

              <div class="form-group row mb-3">
                <label for="password_confirmation" class="col-md-4 col-form-label text-md-right">Confirm Password</label>

                <div class="col-md-6">
                  <input name="password_confirmation" id="password_confirmation" v-model="password_confirmation" type="password" class="form-control" required/>
                </div>
              </div>

              <div class="form-group row mb-0">
                <div class="col-md-8 offset-md-4">
                  <button type="submit" class="btn btn-primary">Register</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
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