<template>
  <div class="about">
    <q-transition
      appear
      enter="fadeIn"
      leave="fadeOut"
    >
      <h1>Welcome to About Page</h1>
    </q-transition>

    <q-transition
      appear
      enter="slideInLeft"
      leave="slideOutRight"
    >
      <q-card v-bind:style="{width:'80vw', marginRight:'10vw', marginLeft:'10vw'}">
        <q-card-title>
          <p>Pirate Ipsum</p>
        </q-card-title>
        <q-card-main>
          <p>
            Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast yardarm. Pinnace holystone mizzenmast quarter crow's nest nipperkin grog yardarm hempen halter furl. Swab barque interloper chantey doubloon starboard grog black jack gangway rutters.

            Deadlights jack lad schooner scallywag dance the hempen jig carouser broadside cable strike colors. Bring a spring upon her cable holystone blow the man down spanker Shiver me timbers to go on account lookout wherry doubloon chase. Belay yo-ho-ho keelhaul squiffy black spot yardarm spyglass sheet transom heave to.

            Trysail Sail ho Corsair red ensign hulk smartly boom jib rum gangway. Case shot Shiver me timbers gangplank crack Jennys tea cup ballast Blimey lee snow crow's nest rutters. Fluke jib scourge of the seven seas boatswain schooner gaff booty Jack Tar transom spirits.
          </p>
        </q-card-main>
      </q-card>
    </q-transition>
    <br/>
    <q-transition
      appear
      enter="slideInRight"
      leave="slideOutLeft"
      v-if='secondAnimation === true'
    >
      <q-card v-bind:style="{width:'80vw', marginRight:'10vw', marginLeft:'10vw'}">
        <q-card-title>
          <p>Ninja Ipsum</p>
        </q-card-title>
        <q-card-main>
          <p>
            Lorem ninja ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut ninja wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit ninja lobortis nisl ut aliquip ex ea commodo consequat. Duis ninja autem vel eum iriure dolor in hendrerit in vulputate ninja velit esse molestie consequat, vel illum dolore eu feugiat nulla ninja facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam ninja ipsum liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi ninja non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. Investigationes ninja demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas ninja est etiam processus dynamicus, qui ninja sequitur mutationem consuetudium lectorum. Mirum ninja est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima. Eodem ninja ipsum modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in ninja futurum.
          </p>
        </q-card-main>
      </q-card>
    </q-transition>


  </div>
</template>

<script>
import EventBus from '../bus/EventBus'
import { mapGetters, mapActions } from 'vuex'

import {
  generalAnimations,
  inAnimations,
  outAnimations
} from 'quasar-extras/animate/animate-list.js'
import {
  QTransition,
  QCard,
  QCardTitle,
  QCardMain,
  QBtn,
  QSelect
} from 'quasar'

export default {
  components: {
    QTransition,
    QCard,
    QCardTitle,
    QCardMain,
    QBtn,
    QSelect
  },
  name: 'aboutPage',
  data () {
    return {
      msg: 'Welcome to About Page',
      secondAnimation: false,
    }
  },
  created: function(){
    setTimeout(()=>{
      this.secondAnimation = true;
    }, 1000);
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
