<template>
  <div class="background">
    <img src="@/assets/nwlogo.png" width="500" height="500" alt="nwwashateriaIcon">
    <h1>Welcome back {{user.firstName}} {{user.lastName}}!</h1>
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
</style>