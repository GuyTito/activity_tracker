<template>
  <div>
    <form @submit.prevent="searchActivityByDate">
      <label for="activity_date">Search activity by custom duration</label>
      <input
        type="datetime-local"
        v-model="activity_date"
        name="activity_date"
        id="activity_date"
      />
      <button type="submit">Search</button>
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