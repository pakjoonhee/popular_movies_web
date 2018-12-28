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
    <h2>{{message}}</h2>
  </div>
</template>
<script>

import axios from 'axios';
import createPersistedState from 'vuex-persistedstate'
export default {
    props:['myProp'],
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      results: this.$route.params.Data,
    }
  },
  created() {
      
  },
  computed: {
    message() {
      console.log(this.$store.state.message)
      return this.$store.state.message;
    }
  }
}
</script>

<style scoped>


</style>
