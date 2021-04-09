<template>
  <div class="background">
    <div class="jumbo">
      <b-jumbotron header="Welcome back %user%!" lead="Select an option below:" style="width:80%">
      </b-jumbotron>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Home',
    data() {
      return {}
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
  .jumbo {
    font-family: 'Gilroy', Helvetica, Arial, sans-serif;
    margin-left: 15%;
    margin-top: 15%;

  }
</style>