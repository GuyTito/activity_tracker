<template>
  <div>
    <div v-if="activity">
      <h2>{{ activity.activity }}</h2>
      <small> Status: {{ activity.status }} </small>
      <br />
      <small> Remark: {{ activity.remark }} </small>
      <br />
      <small> Created By: {{ activity.user && activity.user.name }}</small>
      <br />
      <small> Date Created: {{ activity.created_at }}</small>

      <div v-if="activity.activity_updates && activity.activity_updates.length">
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Updates</th>
              <th>Updated By</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, counter) in activity.activity_updates" :key="item.id">
              <td>{{ counter + 1 }}</td>
              <td>{{ item.update }}</td>
              <td>{{ item.user.name }}</td>
              <td>{{ moment(item.created_at).format("D-MMM-YYYY h:mm:ss a") }}</td>
            </tr>
          </tbody>
        </table>
        <router-link :to="`/activity/edit/${activity.id}`">Update</router-link>
      </div>
      <div v-else>No updates made for this activity.</div>
    </div>
    <div v-else>
      Activity does not exist.
      <router-link to="/activity/create">Create one.</router-link>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    moment: () => moment,
    activity() {
      let activity = this.$store.state.activities.filter((activity) =>{
        return activity.id == this.$route.params.id
      });
      return activity[0]
    },
  },
};
</script>

<style>
</style>