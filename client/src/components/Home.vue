<template>
  <div class="background">
    <!-- <b-img src="@/assets/nwlogo.png" fluid alt="Fluid image"></b-img> -->
    <img src="@/assets/nwlogo.png" width="500" height="500" alt="nwwashateriaIcon">
    <h1>Welcome back {{user.firstName}} {{user.lastName}}!</h1>
    <!-- <div class="jumbo">
      <b-jumbotron header="Welcome back %user%!" lead="Select an option below:" style="width:80%">
      </b-jumbotron>
    </div> -->
  </div>
</template>

<script>
import services from '../services'
  export default {
    name: 'Home',
    data() {
      return {
        user: {
          firstName:null,
          lastName: null
        }
      }
    },
    methods:{

      getUser(){
        this.user.firstName = this.$store.getters.getEmployeeFirstName
        this.user.lastName = this.$store.getters.getEmployeeLastName
        
      }

    },
    mounted(){
      this.getUser()
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
  .jumbo {
    font-family: 'Gilroy', Helvetica, Arial, sans-serif;
    margin-left: 15%;

  }
</style>