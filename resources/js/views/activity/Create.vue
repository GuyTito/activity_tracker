<template>
  <div>
    <form @submit.prevent="onCreate">
      <textarea
        type="activity"
        name="activity"
        id="activity"
        v-model="activity"
        placeholder="Input Activity"
        autofocus
      >
      </textarea>

      <button type="submit">Create</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activity: '',
      loading: false,
    };
  },
  methods: {
    onCreate(){
      this.loading = true;
      let data = new FormData();
      data.append('activity', this.activity)
      data.append('user_id', this.$store.state.user.id)
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
          return
        });
    }
  },
  mounted() {
    if (!this.$store.state.token) {
      this.$router.push("/login");
    }
    // this.$store.dispatch("fetchAllItems");
    // this.$store.dispatch("fetchAllCustomers");
  },
};
</script>

<style>
</style>