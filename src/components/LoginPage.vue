<template>
  <div class="login">
    <h1>{{ msg }}</h1>


    <div class='elevation-10 blue darken-4 body-5 font-weight 500' v-bind:style="{display: 'flex', flexDirection:'column', marginTop:'5vh', marginRight: '20vw', marginLeft:'20vw', textAlign: 'center', paddingLeft:'10vw', paddingRight:'10vw', paddingTop:'5vh', paddingBottom:'5vh'}">
      <div v-bind:style='{flex: "1", textAlign:"center"}'>
        <div>
          <v-text-field
                name="usernameInput"
                label="username"
                color="cyan accent-3"
              ></v-text-field>
        </div>
      </div>
      <div v-bind:style='{flex: "1", textAlign:"center"}'>
        <div class='textfield'>
          <v-text-field
                class='textfield'
                name="passwordInput"
                label="password"
                color="cyan accent-3"
              ></v-text-field>
        </div>
      </div>
      <div v-bind:style='{flex: "1",  textAlign:"center"}'>
        <div v-bind:style="{display: 'flex', flexDirection:'row'}">
          <div v-bind:style='{flex: "1"}'>

          </div>
          <div v-bind:style='{flex: "1"}'>

          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import EventBus from '../bus/EventBus';
import { mapGetters, mapActions } from 'vuex';
export default {
  name: 'loginPage',
  data () {
    return {
      msg: 'Welcome to Login Page'
    }
  },
  computed: {
   ...mapGetters([
     'userName',
     'userPass'
   ])
  },
  methods:{
    ...mapActions([
     'userObjnamepass',
    ]),
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
.textfield{
  font-size: 50pt;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
