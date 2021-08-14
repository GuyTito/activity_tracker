<template>
  <div class="container mt-3">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header">Login</div>

          <div class="card-body">
            <form @submit.prevent="onSubmit">
              <div  v-if="incorrectCredentials"  class="alert alert-danger"  role="alert">
                {{ incorrectCredentials }}
              </div>

              <div class="form-group row mb-3">
                <label for="email" class="col-md-4 col-form-label text-md-right">E-Mail Addresso</label>

                <div class="col-md-6">
                  <input name="email" id="email" v-model="email" type="email" class="form-control" required autocomplete="email" autofocus/>
                  <div v-if="emailError" class="alert alert-danger" role="alert">
                    {{ emailError }}
                  </div>
                </div>
              </div>

              <div class="form-group row mb-3">
                <label for="password" class="col-md-4 col-form-label text-md-right" >Password</label>

                <div class="col-md-6">
                  <input name="password" id="password" v-model="password" type="password" class="form-control" required/>

                  <div v-if="passwordError" class="alert alert-danger" role="alert">
                    {{ passwordError }}
                  </div>
                </div>
              </div>

              <div class="form-group row mb-0">
                <div class="col-md-8 offset-md-4">
                  <button type="submit" class="btn btn-primary">Login</button>
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