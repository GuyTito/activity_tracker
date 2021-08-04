<template>
  <div>
    <form @submit.prevent="searchActivityByDate">
      <div class="form-group">
        <label for="activity_date" class="col-form-label">Search activity by custom duration</label>
        <div class="col-md-4">
          <div class="input-group">
            <input
              type="datetime-local"
              v-model="activity_date"
              name="activity_date"
              id="activity_date"
              class="form-control"
            />
            <button type="submit" class="btn btn-outline-secondary">Search</button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activity_date: moment().format("D-MMM-YYYY h:mm:ss a"),
    };
  },
  methods: {
    searchActivityByDate() {
      this.$router.push(`/activity/search/${this.activity_date}`);
    },
  },
};
</script>

<style>
</style>