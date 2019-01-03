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
import createPersistedState from 'vuex-persistedstate'
export default {
  data () {
    return {
      results: this.$route.params.Data,
    }
  },
  created() {
    if(this.results == null) {
      this.results = JSON.parse(localStorage.getItem('movieDetails'))
    }
  }
}
</script>

<style scoped>


</style>
