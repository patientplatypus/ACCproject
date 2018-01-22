<template>
  <div class="map">
    <!-- <h1 v-bind:style="{color:'#87d5df'}">{{ msg }}</h1> -->

    <div v-if="(alert1 && areweloggedin === true)" class='alert-container'>
      <div class='flex-1'></div>
      <div class='alert acc-shadow'><h5 class='alert-title'>10 NEW APARTMENTS UPDATED WITH NEW PRICES<span v-on:click="alert1=!alert1" class='alert-x'>DISMISS</span></h5></div>
      <div class='flex-1'></div>
    </div>
    <div v-if="(alert2 && areweloggedin === true)" class='alert-container'>
      <div class='flex-1'></div>
      <div class='alert acc-shadow alert-dark'><h5 class='alert-title'>3 NEW APARTMENTS LISTED AT LOWER PRICES<span v-on:click="alert2=!alert2" class='alert-x'>DISMISS</span></h5></div>
      <div class='flex-1'></div>
    </div>
    <div v-if="areweloggedin === false">
      <p v-bind:style='{fontSize:"16pt"}'> Woops! Looks like you did not log in.</p>
    </div>
    <div v-if="areweloggedin === true" v-bind:style='{textAlign:"center", width:"100vw", display:"flex", flexDirection:"row"}'>
      <div v-bind:style='{flex: "1", textAlign:"center"}'/>
      <div class='acc-shadow'>
        <gmap-map
          ref='map'
          :center="center"
          :zoom="13"
          style="width: 60vw; height: 70vh;"
        >
          <gmap-info-window
            :opened='this.infowindowopened'
            :position='this.infowindowposition'
            :options="infoOptions"
          >
            <div>
              <p>
                Bedrooms: {{infowindowbdr}}
              </p>
            </div>
            <div>
              <p>
                Price: ${{infowindowprice}}
              </p>
            </div>
            <div>
              <p>
                Owner: {{infowindowwhose}}
              </p>
            </div>
          </gmap-info-window>
          <gmap-marker
            ref="map"
            :key="index"
            v-for="(m, index) in markers"
            :position="m.position"
            :clickable="true"
            :draggable="false"
            @click="center=m.position; markerInfo(m.position, index)"
            @mouseover="markerOver(m)"
            @mouseout="markerOut()"
          ></gmap-marker>
        </gmap-map>
      </div>
      <div v-bind:style='{flex: "1", textAlign:"center"}'/>
      <div class='acc-shadow bg-white'>
        <div class='bg-white' v-bind:style='{height: "70vh", width:
        "25vw"}'>
          <div v-if="markerclicked === false">

            <div class='listing-container'>
              <q-btn class='add-btn' big v-on:click="addMarker()">
                Add Marker
              </q-btn>
              <listing
                v-for="item in listings"
                v-bind:name="item.name"
                v-bind:bed="item.bed"
                v-bind:price="item.price"
                v-bind:sqft="item.sqft"
                v-bind:lat="item.lat"
                v-bind:lng="item.lng"
                v-bind:updated_by="item.updated_by"
              ></listing>
            </div>
          </div>
          <div v-if="markerclicked === true">
            <br/>
            <p v-bind:style='{fontSize:"16pt"}'>
              Change this markers' details!
            </p>
            <div v-bind:style="{display: 'flex', flexDirection:'column', width:'90%', marginRight:'5%', marginLeft:'5%'}">
                <div v-bind:style='{flex: "1"}'>
                  <q-input v-model="markerclickedlat" float-label="latitude"/>
                </div>
                <div v-bind:style='{flex: "1"}'>
                  <q-input v-model="markerclickedlng" float-label="longitude"/>
                </div>
                <div v-bind:style='{flex: "1"}'>
                  <q-input v-model="markerclickedbdr" float-label="bedrooms"/>
                </div>
                <div v-bind:style='{flex: "1"}'>
                  <q-input v-model="markerclickedprice" float-label="price"/>
                </div>
                <div v-bind:style='{flex: "1"}'>
                  <q-input v-model="markerclickedwhose" float-label="whose"/>
                </div>
                <div v-bind:style='{flex: "1"}'/>
            </div>
            <div v-bind:style="{display: 'flex', flexDirection:'row'}">
              <div v-bind:style='{flex: "1"}'>
                <q-btn color="red-5" big v-on:click="deleteMarker()">
                  Delete Marker
                </q-btn>
              </div>
              <div v-bind:style='{flex: "1"}'>
                <q-btn color="blue-5" big v-on:click="updateMarker()">
                  Update Marker
                </q-btn>
              </div>
            </div>
          </div>
          <div v-bind:style="{marginTop:'5vh'}">
            <div v-if='addmarkertomap===true'>
              <p>
                Great! Click on the map yo!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div v-bind:style='{flex: "1", textAlign:"center"}'/>
    </div>
  </div>
</template>

<script>
// import EventBus from '../bus/EventBus';
import { mapGetters, mapActions } from 'vuex';
import Vue from 'vue'
import * as VueGoogleMaps from 'vue2-google-maps';
import listing from '@/Listing'
import axios from 'axios';

import {
  QBtn,
  QInput,
  QToggle,
  QIcon,
  QField,
  QTooltip,
  QPopover
} from 'quasar'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyAwOwm8SXWD8EzaT9LflmRqOu35jcwtrck ',
    libraries: 'places', // This is required if you use the Autocomplete plugin
    // OR: libraries: 'places,drawing'
    // OR: libraries: 'places,drawing,visualization'
    // (as you require)
  }
})

export default {
  name: 'mapPage',
  components: {
    QBtn,
    QInput,
    QToggle,
    QIcon,
    QField,
    QTooltip,
    QPopover,
    listing
  },
  data () {
    return {
      msg: 'Welcome to the 🗺 Page',
      alert1: true,
      alert2: true,
      glistener: null,
      addmarkertomap: false,
      areweloggedin: false,
      eventlisteneradded:false,
      infowindowopened: false,
      infowindowbdr: null,
      infowindowprice: null,
      infowindowwhose: null,
      markerclickedindex: null,
      markerclicked: false,
      markerclickedlat: 0,
      markerclickedlng:  0,
      markerclickedbdr: null,
      markerclickedprice: null,
      markerclickedwhose: null,
      addmarkerclicked: false,
      addmarkerbdr: null,
      addmarkerprice: null,
      addmarkerwhose: null,
      addmarkerlat: null,
      addmarkerlng: null,
      //optional: offset infowindow so it visually sits nicely on top of our marker
      infoOptions: {
        pixelOffset: {
          width: 0,
          height: -35
        }
      },
      infowindowposition: null,
      center: {lat: 30.2849, lng: -97.7341},
      markers: [
        // position: {lat: 11.0, lng: 11.0, bdr: 1, price: 500, whose: "frenemy1"}
      ],
      listings: []
    }
  },
  created: function () {
    if (this.userName!=null&&this.userPass!=null){
      this.areweloggedin=true;
    }

    axios.get("http://129.146.134.34:5000/api/listing/")
    .then(response => {
      this.listings = response.data.listings

      for(var i = 0; i < this.listings.length; i++) {
        this.markers.push( {
          position: {lat: this.listings[i].lat, lng: this.listings[i].lng, bdr: this.listings[i].bed, price: this.listings[i].price, whose: this.listings[i].name}
        })
      }
    })
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
    markerOver: function(marker){
      this.infowindowopened=true;
      this.infowindowposition=marker.position;
      this.infowindowbdr=marker.position.bdr;
      this.infowindowprice=marker.position.price;
      this.infowindowwhose=marker.position.whose;
    },
    markerOut: function(){
      this.infowindowopened=false;
    },
    markerInfo: function(values, index){
      console.log('inside markerinfo');
      console.log('value of values is ', values);
      console.log('value of bedrooms is ', values.bdr);
      this.markerclicked = true;
      this.markerclickedindex = index;
      this.markerclickedlat = this.markers[index]['position']['lat']
      this.markerclickedlng = this.markers[index]['position']['lng']
      this.markerclickedbdr = this.markers[index]['position']['bdr']
      this.markerclickedprice = this.markers[index]['position']['price']
      this.markerclickedwhose = this.markers[index]['position']['whose']
    },
    updateMarker: function(){
      console.log('value of lat : ', this.markerclickedlat);
      this.markers[this.markerclickedindex]['position']['lat'] = Number(this.markerclickedlat);
      this.markers[this.markerclickedindex]['position']['lng'] = Number(this.markerclickedlng);
      this.markers[this.markerclickedindex]['position']['bdr'] = Number(this.markerclickedbdr);
      this.markers[this.markerclickedindex]['position']['price'] = Number(this.markerclickedprice);
      this.markers[this.markerclickedindex]['position']['whose'] = this.markersclickedwhose;
    },
    deleteMarker: function(){
      var newMarkerArray = [];
      for(var x=0; x<this.markers.length; x++){
        if(x !== this.markerclickedindex){
          newMarkerArray.push(this.markers[x])
        }
      }
      this.markers = newMarkerArray;
      this.markerclicked = false;
    },
    addMarker: function(value){
      console.log('inside addMarker');
      // var map = new google.maps.Map(document.getElementById('map'))
      this.addmarkertomap = true;
      if(this.eventlisteneradded === false){
        var mapObj = this.$refs.map.$mapObject;
        this.glistener = google.maps.event.addListener(mapObj, "click", (e)=>this.mapClickEvent(e));
        this.eventlisteneradded = true
      }
    },
    mapClickEvent: function(e){
      var latLng = e.latLng;
      console.log('value of latLng.lat: ', latLng.lat());
      console.log('value of latLng.lng: ', latLng.lng());
      if(this.addmarkertomap === true){
        this.markers.push( {
          position: {lat: latLng.lat(), lng: latLng.lng(), bdr: 0, price: 0, whose: "tbd"}
        })
        this.addmarkertomap = false;
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
.map{
  width: 100%;
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
.alert {
  background-color: #184270;
  width: 90%;
  margin: 20px auto;
  height: 40px;
  border-radius: 4px;
}
.acc-shadow {
  flex: 1;
  text-align: center;
  box-shadow: 2px 4px 8px 0px rgba(46,61,73,0.4);
}
.alert-title {
  text-align: left;
  padding: 10px 20px;
  font-size: 20px;
  color: #fff;
}
.alert-x {
  color: #fff;
  float: right;
  font-size: 18px;
}
.alert-x:hover {
  cursor: pointer;
  font-weight: bold;
}
.alert-dark {
  background-color: #a30909;
}
.listing-container {
  overflow: auto;
  height: 70vh;
  width: 25vw;
}
.add-btn {
  background-color: #184270;
  color: #fff;
  margin: 16px auto;
  width: 80%;
}
</style>
