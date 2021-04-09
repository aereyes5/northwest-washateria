<template>
  <div>
    <b-container class="back">
      <br>
      <h1><span style="text-decoration:underline">Login</span></h1><br>

      <label for="text-email">Username:</label>
      <b-form-input type="email" id="text-email" v-model="user.username" placeholder="Please Enter Username">
      </b-form-input><br>
      <label for="text-password">Password:</label>
      <b-form-input type="password" id="text-password" v-model="user.password" placeholder="Please Enter Password">
      </b-form-input>
      <br>
      <b-button class="darkmode-ignore" variant="primary" v-on:click="login">Login</b-button>

    </b-container>
    <p v-if="status" class="danger font-italic font-weight-bold text-danger text-center">
      {{status}}
    </p>
  </div>
</template>

<script>
  import services from '../services'
  export default {
    name: "Login",
    data() {
      return {
        user: {
          username: null,
          password: null,
          loginID: null,
          access: null,
          firstName: null,
          lastName: null,
          employeeID: null
        },
        status: null,
        allUsers: []
      }
    },
    methods: {
      getEmployee() {
        services.getEmployeeByLoginID(this.loginID).then(response => {
          this.firstName = response.firstName
          this.lastName = response.lastName
          this.employeeID = response.employeeID
        })
      },
      getLogins() {
        services.getLogins().then(response => {
            this.allUsers = response
          })
          .catch(e => {
            console.log(e);
          });
      },
      login() {
        for (var i = 0; i < this.allUsers.length; i++) {
          if ((this.user.username == this.allUsers[i].username) && (this.user.password == this.allUsers[i].pswd)) {
            this.user.loginID = this.allUsers[i].loginID
            this.user.access = this.allUsers[i].access
            this.getEmployee()
            this.storeUser(this.user.loginID, this.user.username, this.user.password, this.user.access, this.user
              .firstName, this.user.lastName, this.user.employeeID)
            this.$router.push({
              name: 'Home'
            })
          }
        }
        if ((this.user.loginID == null) && (this.user.access == null)) {
          this.status = "Invalid Credentials. Please try again."
        }
      },
      storeUser(loginID, username, password, access) {
        this.$store.commit('loginUser', {
          loginID,
          username,
          password,
          access
        })
      },
    },
    computed: {
      userVerified() {
        return this.$store.getters.isValidUser
      }
    },
    mounted() {
      this.getLogins()
    }
  }
</script>

<style scoped>
  label {
    float: left;
  }

  .back {
    background-color: white;
    margin-top: 12%
  }
</style>