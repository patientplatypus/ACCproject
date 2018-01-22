<template>
  <!-- Don't drop "q-app" class -->
  <div id="q-app">
    <!-- <img src="./assets/acc-logo.png" class='nav-logo'/> -->
    <img src="" class='nav-logo'/>
      <div class='topbox shadow-8 nav-bar'>
        <div v-bind:style='{flex: "8"}'></div>
        <div class='link-container'>
          <router-link class='routerlink nav-link' to="/aboutPage">About</router-link>
        </div>
        <div class='link-container'>
          <router-link class='routerlink nav-link' to="/massUploadPage">Upload</router-link>
        </div>
        <!-- <div class='link-container'>
          <router-link class='routerlink nav-link' to="/massImportPage">Import</router-link>
        </div> -->
        <div class='link-container'>
          <router-link class='routerlink nav-link' to="/LoginPage">Login</router-link>
        </div>
        <div class='link-container'>
          <router-link class='routerlink nav-link' to="/MapPage">Map</router-link>
        </div>
        <div v-bind:style='{flex: "2"}'></div>
      </div>
    <router-view class='contentbox bg-color'></router-view>
  </div>
</template>

<script>
/*
 * Root component
 */

export default {}
</script>

<style>

#q-app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  display: grid;
  grid-template-rows: 10vh 90vh;
  grid-gap: 0vw;
  overflow: hidden;
  background-color: #f0f0f0;
  /*color: #444;*/
  /*box-shadow: 2px 4px 8px 0px rgba(46,61,73,0.2);*/
}
a{
  text-decoration: none !important;
}
.routercoloring{
  color: $red-1;
}
.contentbox{
  grid-column: 1 / 3;
  grid-row: 2 / 3;
  /*background-color: #FAF0CA;*/
  /*min-height: 94vh;*/
  overflow: hidden;
  overflow-y: scroll;
}
.topbox{
  grid-column: 1 / 3;
  grid-row: 1 / 2;
  /*background-color: skyblue;*/
  padding-top: 0.75%;
}
.bg-color {
  color: #e0e0e0;
}
.nav-link {
  font-size: 20px;
  flex: 1;
  top: 50px;
  color: #fff;
  font-weight: bold;
}
.nav-logo {
  position: absolute;
  left: 100px;
  top: 10px;
  width: auto;
  height: 60px;
}
.nav-bar {
  display: flex;
  flex-direction: row;
  background-color: #184270;
  height: 80px;
}
.link-container {
  flex: 1;
  padding-top: 20px;
}

</style>
