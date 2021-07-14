<template>
  <div>
    display the updates done and stuff
    <h2>{{activity.activity}}</h2>
    <p>{{activity.user && activity.user.name}}</p>

    <router-link :to="`/activity/show/${activity.id}`"></router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activity: {},
    };
  },
  mounted() {
    if (!this.$store.state.token) {
      this.$router.push("/login");
    }
    if (!this.$store.state.activities) {
      this.$router.push("activity/create");
    }

    let activities = JSON.parse(JSON.stringify(this.$store.state.activities));
    var lookup = {};
    for (var i = 0, len = activities.length; i < len; i++) {
      lookup[activities[i].id] = activities[i];
    }
    this.activity = lookup[this.$route.params.id];
  },
};
</script>

<style>
</style>