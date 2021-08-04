<template>
  <div>
    <h2>activities</h2>

    <SearchActivityByDate />

    <router-link to="/activity/create">Create Activity</router-link>

    <ActivityList :activities="updated_today" title="Activities Updated Today" />

    <ActivityList :activities="created_today" title="Activities Created Today" />

    <ActivityList :activities="all_activities" title="All Activities" />
  </div>
</template>

<script>
import ActivityList from "../../components/ActivityList.vue";
import SearchActivityByDate from "../../components/SearchActivityByDate.vue";

export default {
  components: { ActivityList, SearchActivityByDate, },
  computed: {
    moment: () => moment,
    updated_today(){
      let today = this.$store.state.activities.filter((activity) =>{
        if (!activity.activity_updates.length) return false
        let latest_update = activity.activity_updates.slice(-1)[0]
        return moment(latest_update.created_at).format("D-MMM-YYYY") >= moment().format("D-MMM-YYYY")
      });
      return today
    },
    created_today(){
      let today = this.$store.state.activities.filter(
        (activity) =>
          moment(activity.created_at).format("D-MMM-YYYY") >= moment().format("D-MMM-YYYY")
      );
      return today
    },
    all_activities(){
      return this.$store.state.activities
    },
  },
  mounted() {
    this.$store.dispatch("fetchAllActivities");
  },
};
</script>

<style>
</style>