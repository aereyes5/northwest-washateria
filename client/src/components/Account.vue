<template>
  <b-container class="back">
    <div>
      <br>
      <h1><span style="text-decoration: underline">Account Info</span></h1>
      <br>
      <b-form>
        <div class="form-row">
          <div class="col">
            <b-form-input type="email" class="form-control" placeholder="Username" id="username" v-model="user.username"
              disabled>
            </b-form-input>
          </div>
        </div>
        <br>
        <div class="form-row">
          <div class="col">
            <b-form-input type="password" class="form-control" placeholder="Password" id="password" autocomplete="on"
              v-model="user.password" disabled>
            </b-form-input>
          </div>
        </div>
        <br>
        <b-button class="darkmode-ignore" variant="warning" v-bind:to="'Update'">Edit</b-button>
      </b-form><br>
    </div>
  </b-container>
</template>

<script>
  import services from "../services";
  export default {
    name: "Account",
    data() {
      return {
        info: [],
        user: {
          username: null,
          password: null,
        },
      };
    },
    methods: {
      findUser() {
        this.user.username = this.$store.getters.getEmployeeUsername;
        this.user.password = this.$store.getters.getEmployeePassword;
      }
    },
    mounted() {
      this.findUser();
    },
  };
</script>

<style scoped>
  .back {
    background-color: white;
    margin-top: 10%;
  }
</style>