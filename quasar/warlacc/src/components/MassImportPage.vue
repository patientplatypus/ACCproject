<template>
  <div class="import">
    <h1 v-bind:style="{color:'#87d5df'}">{{ msg }}</h1>
    <div v-if="areweloggedin === false">
      <p v-bind:style='{fontSize:"16pt"}'> Woops! Looks like you did not log in. Sad panda. 🐼 </p>
    </div>
    <div v-if="areweloggedin === true">

    </div>
  </div>
</template>

<script>
// import EventBus from '../bus/EventBus';
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'massImportPage',
  data () {
    return {
      msg: 'Welcome to Import Page',
      areweloggedin: false,
      uploadArray: [],
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
