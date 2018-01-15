<template>
  <div class="upload">
    <h1>{{ msg }}</h1>

  </div>
</template>

<script>
import EventBus from '../bus/EventBus';
import { mapGetters, mapActions } from 'vuex';
export default {
  name: 'massUploadPage',
  data () {
    return {
      msg: 'Welcome to Upload Page'
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
