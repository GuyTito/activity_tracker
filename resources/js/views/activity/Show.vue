<template>
  <div>
    <div div v-if="activity">
      display the updates done and stuff
      <h2>{{ activity.activity }}</h2>
      <small> Status: {{activity.status}} </small>
      <br>
      <small> Creator: {{ activity.user && activity.user.name }}</small>
  
      <div v-if="activity.activity_updates != undefined">
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Updates</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, counter) in activity.activity_updates" :key="item.id">
              <td>{{ counter + 1 }}</td>
              <td>{{ item.update }}</td>
              <td>{{ item.created_at }}</td>
            </tr>
          </tbody>
        </table>
        <router-link :to="`/activity/edit/${activity.id}`">Update</router-link>
      </div>
      <div v-else>
        No updates available for activity.
      </div>
    </div>
    <div v-else>
      Activity does not exist. <router-link to="/activity/create">Create one.</router-link>
    </div>

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