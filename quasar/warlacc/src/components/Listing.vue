<template>
  <div class='listing-block'>
    <h5 class='listing-title'>{{ name }}</h5>
    <h6 class='listing-details'>{{ bed }} bedroom | {{ sqft }} sqft | ${{ price }}/month</h6>
    <h5 v-if="negative" class='listing-tagline expensive'>${{ diff }} more expensive than average</h5>
    <h5 v-else class='listing-tagline'>${{ diff }} less expensive than average</h5>
    <hr class='listing-line'>
  </div>
</template>

<script>
export default {
  name: 'listing',

  props: {

    'name': {
      type: String,
      default: 'Loading...'
    },
    'bed': {
      type: Number,
      default: 0
    },
    'sqft': {
      type: Number,
      default: 0
    },
    'price': {
      type: Number,
      default: 0
    },
    'updated_by': {
      type: String,
      default: '...'
    },
    'lat': {
      type: Number,
      default: 0
    },
    'lng': {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
    }
  },
  computed: {
    diff: function() {
      return Math.abs(this.price - 1500);
    },
    negative: function() {
      return this.price - 1500 < 0;
    }
  },
  methods: {
  }
}
</script>

<style>
  .listing-block {

  }
  .listing-block:hover {
    background-color: #f0f0f0;
    cursor: pointer;
  }
  .listing-details {
    color: #6b6b6b;
    font-size: 14px;
  }
  .listing-title {
    color: #184270;
  }
  .listing-tagline {
    color: #009104;
    font-size: 20px;
  }
  .listing-line {
    border-color: #8dbdef;
    margin: auto 10px;
  }
  .expensive {
    color: #a30909;
  }

</style>
