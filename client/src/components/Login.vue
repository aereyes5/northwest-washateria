<template>
  <div>
    <b-container class="back">
      <img src="@/assets/nwlogolong.png" width="920" height="200" alt="nwlogolong">
      <img src="@/assets/login.png" width=750px heigth=150px alt="Login">
      <form>
        <div class="form-group">
          <b-input-group prepend="Username">
          <b-form-input type="email" id="text-email" v-model="user.username" placeholder="Please Enter Username">
          </b-form-input><br>
        </b-input-group>
        </div>
        
        <div class="form-group">
          <b-input-group prepend="Password">
          <b-form-input type="password" id="text-password" v-model="user.password" placeholder="Please Enter Password">
          </b-form-input>
        </b-input-group>
        </div>

        <b-row align-h="center">
          <b-button class="darkmode-ignore" variant="primary" v-on:click="login">Login</b-button>
        </b-row>
      </form>

      <br>
      

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
        services.getEmployeeDetails(this.user.loginID).then(response => {
          this.user.firstName = response[0].firstName
          this.user.lastName = response[0].lastName
          this.user.employeeID = response[0].employeeID
          this.storeUser(this.user.loginID, this.user.username, this.user.password, this.user.access, this.user
            .firstName, this.user.lastName, this.user.employeeID)
        })
        console.log(this.user)
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
            this.user.username = this.allUsers[i].username
            this.user.password = this.allUsers[i].pswd
            this.getEmployee()
          }
        }
        if ((this.user.loginID == null) && (this.user.access == null)) {
          this.status = "Invalid Credentials. Please try again."
        }
      },
      storeUser(loginID, username, password, access, firstName, lastName, employeeID) {
        this.$store.commit('loginUser', {
          loginID,
          username,
          password,
          access,
          firstName,
          lastName,
          employeeID
        })
        this.$router.push({
          name: 'Home'
        })
      },
    },
    computed: {
      userVerified() {
        return this.$store.getters.isValidUser
      }
    },
    created() {
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