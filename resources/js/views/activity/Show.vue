<template>
  <div class="container">
    <div v-if="activity">
      <p> <span class="fw-bold">Activity:</span> {{ activity.activity }} </p>
      <p> <span class="fw-bold">Status:</span> {{ activity.status }} </p>
      <p> <span class="fw-bold">Remark:</span> {{ activity.remark }} </p>
      <p> <span class="fw-bold">Created By:</span> {{ activity.user && activity.user.name }}</p>
      <p> <span class="fw-bold">Date Created:</span> {{ moment(activity.created_at).format("D-MMM-YYYY h:mm:ss a") }}</p>

      <router-link :to="`/activity/edit/${activity.id}`" role="button" class="btn btn-primary mb-3">Update</router-link>
      <div v-if="activity.activity_updates && activity.activity_updates.length">
        <table class="table table-hover table-sm table-bordered">
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