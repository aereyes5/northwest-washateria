<template>
  <b-container class="back">
    <div>
      <br>
      <h1><span style="text-decoration:underline">Edit Account</span></h1><br>

      <b-form @submit.prevent="update">
        <div class="form-row">
          <div class="col">
            <b-form-input class="form-control" placeholder="Username" id="username" v-model="user.username">
            </b-form-input>
          </div>
        </div><br>
        <div class="form-row">
          <div class="col">
            <b-form-input type="password" class="form-control" placeholder="Password" id="password" autocomplete="on"
              v-model="user.password">
            </b-form-input>
          </div>
        </div><br>
        <b-button v-b-modal.modal-1 variant="success" type="submit" id="save">Save</b-button>
        <b-button id="back" v-bind:to="'Account'">Back</b-button>
      </b-form>
    </div>
  </b-container>
</template>

<script>
  import services from '../services'
  export default {
    name: 'Account',
    data() {
      return {
        info: [],
        user: {
          username: null,
          password: null,
          loginID: null
        },
        status: null
      }
    },
    methods: {
      findUser() {
        this.user.username = this.$store.getters.getEmployeeUsername;
        this.user.password = this.$store.getters.getEmployeePassword;
        this.user.loginID = this.$store.getters.getEmployeeLoginID
      },
      update() {
        services.updateLogin(this.user)
        this.$router.push({name: "Account"})
      },
      back() {
        back.style.visibility = "visible"
      }
    },
    mounted() {
      this.findUser()
    }
  }
</script>

<style scoped>
  .back {
    background-color: white;
    margin-top: 10%;
    height: 100%
  }
</style>