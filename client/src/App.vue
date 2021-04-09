<template>
  <div id="app">
    <Navbar />
    <router-view />
  </div>
</template>

<script>
  import Navbar from "./components/Navbar";
  export default {
    name: "App",
    data() {
      return {};
    },
    components: {
      Navbar
    }
  };

  import Darkmode from "darkmode-js";
  new Darkmode().showWidget();

  // const options = {
  //   bottom: '32px', // default: '32px'
  //   right: '32px', // default: '32px'
  //   left: 'unset', // default: 'unset'
  //   time: '0.5s', // default: '0.3s'
  //   mixColor: '#fff', // default: '#fff'
  //   backgroundColor: '#fff', // default: '#fff'
  //   buttonColorDark: '#100f2c', // default: '#100f2c'
  //   buttonColorLight: '#fff', // default: '#fff'
  //   saveInCookies: true, // default: true,
  //   label: '🌓', // default: ''
  //   autoMatchOsTheme: true // default: true
  // }
  // const darkmode = new Darkmode(options);
  // darkmode.showWidget();
</script>

<style>
  #app {
    font-family: "Gilroy", Helvetica, Arial, sans-serif;
    src: local("Gilroy"), url(./fonts/Gilroy-Light.otf) format("truetype");
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>