<template>
  <div class="login">
    <div class='' v-bind:style='{paddingLeft:"10vw", paddingRight:"10vw"}'>
      <q-transition
        appear
        enter="fadeIn"
        leave="fadeOut"
      >
        <div v-if="areweloggedin === false">
          <q-card color="blue-2" v-bind:style='{padding:"2.5vw", position:"absolute", left:"20vw", top:"20vw", width:"60vw"}'>
            <div v-bind:style='{flex: "1", textAlign:"center"}'>
               <q-input v-model="username" inverted color="blue" v-on:click="clearValue('username')" :before="[{icon: 'mood', handler () {}}]"/>
            </div>
            <div v-bind:style='{flex: "1", textAlign:"center"}'>
               <q-input v-model="password" v-on:click="clearValue('password')" float-label="enter password" inverted color="blue" type="password"/>
            </div>

            <div v-bind:style='{flex: "1",  textAlign:"center"}'>
              <div v-bind:style="{display: 'flex', flexDirection:'row'}">
                <div v-bind:style='{flex: "1"}'>
                  <q-btn color="blue" big v-on:click="userButton('new', $event)">
                    New User
                  </q-btn>
                </div>
                <div v-bind:style='{flex: "1"}'>
                  <q-btn color="blue" big v-on:click="userButton('login', $event)">
                    Log In
                  </q-btn>
                </div>
              </div>
            </div>
          </q-card>
        </div>
      </q-transition>

      <q-transition
        appear
        enter="fadeIn"
        leave="fadeOut"
      >
        <div v-if="areweloggedin === true">
          <q-card color="blue-2" v-bind:style='{padding:"2.5vw", position:"absolute", left:"20vw", top:"20vw", width:"60vw"}'>
            <div v-bind:style="{display: 'flex', flexDirection:'row'}">
              <div v-bind:style='{flex: "1"}'>
                <q-btn color="blue" big v-on:click="userButton('logout', $event)">
                  Log Out
                </q-btn>
              </div>
            </div>
          </q-card>
        </div>
      </q-transition>



    </div>

  </div>
</template>

<script>
import EventBus from '../bus/EventBus'
import { mapGetters, mapActions } from 'vuex'
import {
  QBtn,
  QInput,
  QToggle,
  QIcon,
  QField,
  QTooltip,
  QPopover,
  QTransition,
  QCard,
  QCardTitle,
  QCardMain,
  QSelect
} from 'quasar'
export default {
  components: {
    QBtn,
    QInput,
    QToggle,
    QIcon,
    QField,
    QTooltip,
    QPopover,
    QTransition,
    QCard,
    QCardTitle,
    QCardMain,
    QSelect
  },
  name: 'loginPage',
  data () {
    return {
      msg: 'Login Page',
      username: 'username',
      password: 'password',
      areweloggedin: false,
    }
  },
  created: function () {
    if (this.userName!=null&&this.userPass!=null){
      this.areweloggedin=true;
    }
  },
  computed: {
   ...mapGetters([
     'userName',
     'userPass'
   ])
  },
  watch: {
   // whenever userPass changes, this function will run
  //  userPass: function (newPass, oldPass) {
  //    if
  //  },
   userName: function (newName, oldName) {
     if (newName!=oldName){
       if(newName!=null){
         this.areweloggedin=true;
       }else{
         this.areweloggedin=false;
         this.username='username';
         this.password='password'
       }
     }
   }
 },
  methods:{
    ...mapActions([
     'userObjnamepass',
     'sendUser',
    ]),
    clearValue: function(value){
      if (value==='username'){
        this.username = ""
      }else if(value==='password'){
        this.password = ""
      }
    },
    userButton: function(value, event){
      if (value==='logout'){
        this.username=null;
        this.password=null;
      }

      console.log('inside userButton method');
      event.preventDefault()
      var localusername = this.username;
      var localpassword = this.password;
      console.log('value of localusername, ', localusername);
      console.log('value of localpassword, ', localpassword);
      this.userObjnamepass({username: localusername, password: localpassword, type: value})

    }
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
