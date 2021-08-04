<template>
  <div class="container">
    <div class="row justify-content-center mt-5">
      <div class="col-md-5">
        <form @submit.prevent="onCreate" class="text-center border p-5">
          <p class="h4 mb-4">Create Activity</p>
          <textarea
            name="activity"
            id="activity"
            v-model="activity"
            autofocus
            class="form-control mb-4"
          ></textarea>

          <button class="btn btn-primary" type="submit">
            Create
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activity: "",
      loading: false,
    };
  },
  methods: {
    onCreate() {
      this.loading = true;
      let data = new FormData();
      data.append("activity", this.activity);
      data.append("user_id", this.$store.state.user.id);
      axios
        .post("/api/activity", data, {
          headers: {
            Authorization: `Bearer ${this.$store.state.token}`,
          },
        })
        .then((response) => {
          this.$router.push(`/`);
        })
        .catch((err) => {
          this.loading = false;
          alert("Oops! " + err.response.data.message);
          return;
        });
    },
  },
};
</script>

<style>
</style>