<template>
  <!-- Don't drop "q-app" class -->
  <div id="q-app">
    <div class='topbox bg-blue-2 shadow-15' v-bind:style="{fontSize: '4vh', display: 'flex', flexDirection:'row', paddingTop: '20%'}">
      <div v-bind:style='{flex: "1"}'></div>
      <div v-bind:style='{flex: "1"}'>
        <router-link class='routerlink text-cyan-5' to="/aboutPage">About</router-link>
      </div>
      <div v-bind:style='{flex: "1"}'>
        <router-link class='routerlink text-cyan-5' to="/massUploadPage">Upload</router-link>
      </div>
      <div v-bind:style='{flex: "1"}'>
        <router-link class='routerlink text-cyan-5' to="/massImportPage">Import</router-link>
      </div>
      <div v-bind:style='{flex: "1"}'>
        <router-link class='routerlink text-cyan-5' to="/LoginPage">Login</router-link>
      </div>
      <div v-bind:style='{flex: "1"}'>
        <router-link class='routerlink text-cyan-5' to="/MapPage">Map</router-link>
      </div>
      <div v-bind:style='{flex: "1"}'></div>
    </div>
    <router-view class='contentbox'></router-view>
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
  /*background-color: #fff;
  color: #444;*/
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
  min-height: 94vh;
  overflow: hidden;
  overflow-y: scroll;
}
.topbox{
  grid-column: 1 / 3;
  grid-row: 1 / 2;
  /*background-color: skyblue;*/
  padding-top: 0.75%;
}

</style>
