<template>
  <div>
    <h3>{{title}}</h3>
    <div v-if="activities.length" class="table-responsive-sm">
      <table class="table table-hover table-sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Activity</th>
            <th>Status</th>
            <th>Remark</th>
            <th>Created By</th>
            <th>Date Created</th>
            <th>Date Updated</th>
            <th>Update</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(activity, counter) in activities" :key="activity.id">
            <td>{{ counter + 1 }}</td>
            <td>
              <router-link :to="`/activity/show/${activity.id}`" class="dropdown-item link-primary">
                {{ activity.activity}}
              </router-link>
            </td>
            <td>{{ activity.status }}</td>
            <td>{{ activity.remark || "None" }}</td>
            <td>{{ activity.user.name }}</td>
            <td>
              {{ moment(activity.created_at).format("D-MMM-YYYY h:mm:ss a") }}
            </td>
            <td>
              {{ moment(activity.updated_at).format("D-MMM-YYYY h:mm:ss a") }}
            </td>
            <td>
              <router-link :to="`/activity/edit/${activity.id}`" class="text-decoration-none">
                Update
              </router-link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-else>No activities available.</div>
  </div>
</template>

<script>
export default {
  props: {
    activities: Array,
    title: String,
  },
  computed: {
    moment: () => moment,
  }
};
</script>

<style>
</style>