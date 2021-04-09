<template>
  <div id="app">
    <Navbar/>
    <router-view/>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
export default {
  name: 'App',
  data(){
     return{
    }
  },
  components: {
    Navbar
  },
  
}
</script>

<style>
#app {
  font-family: 'Gilroy', Helvetica, Arial, sans-serif;
  src: local("Gilroy"),
   url(./fonts/Gilroy-Light.otf) format("truetype");
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}


</style>
