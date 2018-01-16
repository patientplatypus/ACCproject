<template>
  <div class="upload">
    <div v-bind:style='{width:"80vw", marginLeft:"10vw", marginRight:"10vw", textAlign:"center"}'>
      <h1 v-bind:style="{color:'#87d5df'}">{{ msg }}</h1>
    </div>
    <div v-if="areweloggedin === false">
      <p v-bind:style='{fontSize:"16pt"}'> Woops! Looks like you did not log in. Sad panda. 🐼 </p>
    </div>
    <div v-if="areweloggedin === true">
      <input type="file" v-bind:style='{height:"10vh", width:"20vw", marginRight:"40vw", marginLeft:"40vw", backgroundColor:"rgb(144,202,249)"}' @change="e=>onFileChange(e)"/>

      <div v-if="uploadUpdated === true">
        <q-card class="bg-blue-3" v-bind:style='{textAlign:"center", marginRight:"10vw", marginLeft:"10vw", width:"80vw"}'>
          <q-card-title>
            <h2>
              ✨🍪Sweet🍭✨ Table to upload is shown below.
            </h2>
          </q-card-title>
          <q-card-main>
            <h3>
              To modify the table click in a cell, modify it, then hit enter!
            </h3>
            <h3>
              Once you are ready to upload to the database hit the upload button like a boss. 🤠
            </h3>
          </q-card-main>
        </q-card>
        <br/>
        <table class="q-table striped-odd highlight bg-blue-3" v-bind:style='{textAlign:"center", marginRight:"10vw", marginLeft:"10vw", width:"80vw"}'>
          <thead>
            <tr>
              <th class="text-right">Latitude</th>
              <th class="text-right">Longitude</th>
              <th class="text-right">Bedrooms</th>
              <th class="text-right">Price</th>
              <th class="text-right">Owner</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(upload, index) in uploadArray">
              <input v-if='index===indexClicked&&numberClicked===0' class='text-right' v-model='valueToModify' @change='cellChange()'></input>
              <td v-else v-on:click='cellClick(upload[0], index, 0)' class="mouseovercursor text-right">{{upload[0]}}</td>

              <input  v-if='index===indexClicked&&numberClicked===1' class='text-right' v-model='valueToModify' @change='cellChange()'></input>
              <td v-else v-on:click='cellClick(upload[1], index, 1)' class="mouseovercursor text-right">{{upload[1]}}</td>

              <input v-if='index===indexClicked&&numberClicked===2' class='text-right' v-model='valueToModify' @change='cellChange()'></input>
              <td v-else v-on:click='cellClick(upload[2], index, 2)' class="mouseovercursor text-right">{{upload[2]}}</td>

              <input v-if='index===indexClicked&&numberClicked===3' class='text-right' v-model='valueToModify' @change='cellChange()'></input>
              <td v-else v-on:click='cellClick(upload[3], index, 3)' class="mouseovercursor text-right">{{upload[3]}}</td>

              <input v-if='index===indexClicked&&numberClicked===4' class='text-right' v-model='valueToModify' @change='cellChange()'></input>
              <td v-else v-on:click='cellClick(upload[4], index, 4)' class="mouseovercursor text-right">{{upload[4]}}</td>

            </tr>
          </tbody>
        </table>
        <q-btn color="blue-3" big v-on:click="uploadButton()" v-bind:style='{marginBottom:"10vh", marginTop:"5vh"}'>
          Upload Data!
        </q-btn>
        <div></div>
      </div>
    </div>
  </div>
</template>

<script>
// import EventBus from '../bus/EventBus';
import { mapGetters, mapActions } from 'vuex';
import XLSX from 'xlsx';

import {
  QBtn,
  QInput,
  QToggle,
  QIcon,
  QField,
  QTooltip,
  QCard,
  QCardTitle,
  QCardMain,
  QPopover
} from 'quasar'

export default {
  name: 'massUploadPage',
  components: {
    QBtn,
    QInput,
    QToggle,
    QIcon,
    QField,
    QTooltip,
    QCard,
    QCardTitle,
    QCardMain,
    QPopover
  },
  data () {
    return {
      msg: 'Welcome to Upload Page',
      areweloggedin: false,
      uploadArray: [],
      uploadUpdated: false,
      latitudeInput: null,
      longitudeInput: null,
      BedroomInput: null,
      PriceInput: null,
      OwnerInput: null,
      indexClicked: null,
      numberClicked: null,
      valueToModify: null,
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
    uploadArray: {
      handler(newUpload, oldUpload){
        if (newUpload!=oldUpload){
          console.log('watcher hit!');
          this.uploadUpdated = true;
        }
      },
      deep:true
    }
  },
  methods:{
    ...mapActions([
     'userObjnamepass',
    ]),
    onFileChange: function(e){
      var self = this;
      var rABS = false;
      var files = e.target.files, f = files[0];
      var reader = new FileReader();
      reader.onload = function(e) {
        var data = e.target.result;
        if(!rABS) data = new Uint8Array(data);
        var workbook = XLSX.read(data, {type: rABS ? 'binary' : 'array'});
        console.log('value of workbook is ', workbook);
        console.log('value of workbook col1 is ', workbook.Sheets.Sheet1.A1);

        var aValue = 'A1'
        var aCount = 1;
        var aArray = [];
        do {
          aArray.push(workbook.Sheets.Sheet1[aValue]['v'])
          aCount = aCount + 1
          var aValue = 'A'+aCount.toString()
        }
        while (workbook.Sheets.Sheet1[aValue]!==undefined);

        var bValue = 'B1'
        var bCount = 1;
        var bArray = [];
        do {
          bArray.push(workbook.Sheets.Sheet1[bValue]['v'])
          bCount = bCount + 1
          var bValue = 'B'+bCount.toString()
        }
        while (workbook.Sheets.Sheet1[bValue]!==undefined);

        var cValue = 'C1'
        var cCount = 1;
        var cArray = [];
        do {
          cArray.push(workbook.Sheets.Sheet1[cValue]['v'])
          cCount = cCount + 1
          var cValue = 'C'+cCount.toString()
        }
        while (workbook.Sheets.Sheet1[cValue]!==undefined);

        var dValue = 'D1'
        var dCount = 1;
        var dArray = [];
        do {
          dArray.push(workbook.Sheets.Sheet1[dValue]['v'])
          dCount = dCount + 1
          var dValue = 'D'+dCount.toString()
        }
        while (workbook.Sheets.Sheet1[dValue]!==undefined);

        var eValue = 'E1'
        var eCount = 1;
        var eArray = [];
        do {
          eArray.push(workbook.Sheets.Sheet1[eValue]['v'])
          eCount = eCount + 1
          var eValue = 'E'+eCount.toString()
        }
        while (workbook.Sheets.Sheet1[eValue]!==undefined);

        console.log('value of dArray;  ', dArray);

        var setArray = [];

        for (var x=1; x<aArray.length; x++){
          setArray.push([aArray[x], bArray[x], cArray[x], dArray[x], eArray[x]])
        }
        self.uploadArray = setArray;
        console.log('value of uploadArray, ', self.uploadArray);

     };
      if(rABS) reader.readAsBinaryString(f); else reader.readAsArrayBuffer(f);
    },
    cellClick: function(value, index, number){
      this.indexClicked = index;
      this.numberClicked = number;
      this.valueToModify = value;
    },
    cellChange:function(){
      console.log('inside cell change!');
      this.uploadArray[this.indexClicked][this.numberClicked] = this.valueToModify
      this.indexClicked = null;
      this.numberClicked = null;
      this.valueToModify = null;
    },
    uploadButton: function(){

    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mouseovercursor{
  cursor: pointer;
}
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
