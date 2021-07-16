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
            <th>Date Created</th>
            <th>Date Updated</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(activity, counter) in activities" :key="activity.id">
            <td>{{ counter + 1 }}</td>
            <td><router-link :to="`/activity/show/${activity.id}`">{{ activity.activity }}</router-link></td>
            <td>{{ activity.status }}</td>
            <td>{{ activity.remark || "None" }}</td>
            <td>{{ activity.user.name }}</td>
            <td>{{ moment(activity.created_at).format("D-MMM-YYYY h:mm:ss a") }}</td>
            <td>{{ moment(activity.updated_at).format("D-MMM-YYYY h:mm:ss a") }}</td>
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
  computed: {
    moment: () => moment,
    activities(){
      return this.$store.state.activities
    }
  },
  mounted() {
    this.$store.dispatch("fetchAllActivities");
  },
};
</script>

<style>
</style>