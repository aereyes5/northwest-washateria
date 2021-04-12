<template>
  <b-container class="back">
    <div>
      <img src="@/assets/editaccount.png" width=750px heigth=150px alt="Edit Account Info">
      <b-form>
        <div class="form-row">
          <div class="col">
            <b-input-group prepend="Username">
              <b-form-input type="email" class="form-control" placeholder="Username" id="username"
                v-model="user.username" disabled>
              </b-form-input>
            </b-input-group>
          </div>
        </div>
        <br>
        <div class="form-row">
          <div class="col">
            <b-input-group prepend="Password">
              <b-form-input type="password" class="form-control" placeholder="Password" id="password" autocomplete="on"
                v-model="user.password" disabled>
              </b-form-input>
            </b-input-group>
          </div>
        </div>
        <br>
        <b-button class="darkmode-ignore" variant="warning" v-bind:to="'Update'">Submit Changes</b-button>
        <b-button class="darkmode-ignore" v-bind:to="'home'" variant="primary" type="submit">Cancel</b-button>
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