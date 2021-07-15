<template>
  <div>
    <div v-if="activity">
      <h2>{{activity.activity}}</h2>
      <p>{{activity.user && activity.user.name}}</p>
      what if an activity does not exist and any number is placed in the url?
  
      <form @submit.prevent="onUpdate">
        <select name="status" v-model="selected_status" id="status">
          <option :value="activity.status">{{activity.status}}</option>
          <option v-if="activity.status == 'Pending'" value="Done">Done</option>
          <option v-if="activity.status == 'Done'" value="Pending">Pending</option>
        </select>
  
        <input type="text" name="remark" id="remark" v-model="remark" placeholder="Input remark"/>
        <button type="submit">
          <img src="/assets/spinning.gif" v-if="loading" alt="loading..." width="12" height="12">
          Update
        </button>
      </form>
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
      selected_status: '',
      remark: '',
      loading: false,
    };
  },
  mounted() {
    if (!this.$store.state.token) {
      this.$router.push("/login");
    }

    let activities = JSON.parse(JSON.stringify(this.$store.state.activities));
    var lookup = {};
    for (var i = 0, len = activities.length; i < len; i++) {
      lookup[activities[i].id] = activities[i];
    }
    this.activity = lookup[this.$route.params.id];
    this.selected_status = this.activity.status ?? ''
    this.remark = this.activity.remark ?? ''
  },
  methods: {
    onUpdate(){
      this.activity.status = this.selected_status
      this.activity.remark = this.remark

      let data = this.activity
      data = Object.assign({'updator_id': this.$store.state.user.id}, data)

      this.loading = true
      axios
        .put(`/api/activity/${this.activity.id}`, data, {
          headers: {
            Authorization: `Bearer ${this.$store.state.token}`,
          },
        })
        .then((response) => {
          this.$store.dispatch("fetchAllActivities");
          this.$router.push(`/activity/show/${this.activity.id}`)
        })
        .catch((err) => {
          this.loading = true
          alert("Oops! " + err.response.data.message);
          return
        });
    }
  },
};
</script>

<style>
</style>