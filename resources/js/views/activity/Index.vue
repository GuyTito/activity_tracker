<template>
  <div>
    <h2>activities</h2>
    <router-link to="/activity/create">Create Activity</router-link>
    
    <div v-if="activities.length">
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Activity</th>
            <th>Status</th>
            <th>Remark</th>
            <th>Created By</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(activity, counter) in activities" :key="activity.id">
            <td>{{ counter + 1 }}</td>
            <td><router-link :to="`/activity/show/${activity.id}`">{{ activity.activity }}</router-link></td>
            <td>{{ activity.status }}</td>
            <td>{{ activity.remark || "None" }}</td>
            <td>{{ activity.user.name }}</td>
            <td><router-link :to="`/activity/edit/${activity.id}`">Update</router-link></td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-else>
      No activities available.
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  computed: {
    activities(){
      return this.$store.state.activities
    }
  },
  mounted() {
    if (!this.$store.state.token) {
      this.$router.push("/login");
    }

    this.$store.dispatch("fetchAllActivities");
  },
};
</script>

<style>
</style>