<template>
  <!-- <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
  </div> -->

  <!-- <router-link class='routerlink' to="/">Home</router-link> -->
  <!-- Above commented out because it's the boiler plate for Vue. booo! -->
  <div>
    <div class='topbox  blue darken-4' v-bind:style="{fontSize: '4vh', display: 'flex', flexDirection:'row'}">
      <div v-bind:style='{flex: "1"}'></div>
      <div v-bind:style='{flex: "1"}'>
        <router-link class='routerlink cyan--text text--accent-3' to="/aboutPage">About</router-link>
      </div>
      <div v-bind:style='{flex: "1"}'>
        <router-link class='routerlink cyan--text text--accent-3' to="/massUploadPage">Mass Upload</router-link>
      </div>
      <div v-bind:style='{flex: "1"}'>
        <router-link class='routerlink cyan--text text--accent-3' to="/LoginPage">Login</router-link>
      </div>
      <div v-bind:style='{flex: "1"}'></div>
    </div>
    <router-view class='contentbox teal lighten-3'></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  display: grid;
  grid-template-columns: 15vw 85vw;
  grid-template-rows: 10vh 90vh;
  grid-gap: 0vw;
  overflow: hidden;
  background-color: #fff;
  color: #444;
}
a{
  text-decoration: none !important;
}
.contentbox{
  grid-column: 2 / 3;
  grid-row: 2 / 3;
  /*background-color: #FAF0CA;*/
  min-height: 94vh;
  overflow: hidden;
  overflow-y: scroll;
}
.topbox{
  grid-column: 2 / 3;
  grid-row: 1 / 2;
  /*background-color: skyblue;*/
  padding-top: 0.75%;
}
</style>
