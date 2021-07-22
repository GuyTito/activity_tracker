<template>
  <div>
    <h2>activities</h2>

    <SearchActivityByDate />

    <router-link to="/activity/create">Create Activity</router-link>

    <h3>activities created from {{moment(this.$route.params.date).format("D-MMM-YYYY")}}</h3>
    <ActivityList :activities="createdOnDate" />
  </div>
</template>

<script>
import ActivityList from "../../components/ActivityList.vue";
import SearchActivityByDate from "../../components/SearchActivityByDate.vue";


export default {
  components: { ActivityList, SearchActivityByDate, },
  data() {
    return {
      activity_date: moment().format("D-MMM-YYYY")
    }
  },
  computed: {
    moment: () => moment,
    createdOnDate(){
      let today = this.$store.state.activities.filter((activity) =>{
        // return moment(activity.created_at).format("D-MMM-YYYY h:mm:ss a") >= moment(this.$route.params.date).format("D-MMM-YYYY h:mm:ss a")
        return moment(activity.created_at).isSameOrAfter(moment(this.$route.params.date).format("D-MMM-YYYY h:mm:ss a"))
      });
      return today
    },
  },
};
</script>

<style>
</style>