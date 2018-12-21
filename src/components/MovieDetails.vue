<template>
  <div>
    <h1>{{results.title}}</h1>
    <p>{{'Overview: ' + results.overview}}</p>
    <p>{{'Popularity: ' + results.popularity}}</p>
    <p>{{'PosterPath: ' + results.poster_path}}</p>
    <p>{{'ReleaseDate: '+ results.release_date}}</p>

    <p>{{'Video: '+ results.video}}</p>
    <p>{{'VoteAverage: ' + results.vote_average}}</p>
    <p>{{'VoteCount: ' + results.vote_count}}</p>
  </div>
</template>
<script>

import axios from 'axios';
export default {
    props:['myProp'],
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      results: this.myProp,
    }
  },
  created() {
      
  },
  methods: {
      
  }
}
</script>

<style scoped>


</style>
