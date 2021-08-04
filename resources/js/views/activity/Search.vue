<template>
  <div class="container mt-3">
    <h2>Search Activities</h2>

    <div class="d-flex justify-content-between mb-4">
      <SearchActivityByDate />
  
      <div >
        <router-link to="/activity/create" role="button" class="btn btn-primary">Create Activity</router-link>
      </div>
    </div>

    <hr>

    <span class="fs-5">
      Activities created from {{moment(this.$route.params.date).format("D-MMM-YYYY  h:mm:ss a")}}
    </span>
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