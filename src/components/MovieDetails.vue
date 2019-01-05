<template>

  <div>
    <img v-bind:src="'http://image.tmdb.org/t/p/w780/' + results.backdrop_path"/>
    <h1>{{results.title}}</h1>
    <p>{{'Overview: ' + results.overview}}</p>
    <p>{{'Popularity: ' + results.popularity}}</p>
    <p>{{'PosterPath: ' + results.poster_path}}</p>
    <p>{{'ReleaseDate: '+ results.release_date}}</p>
    <p>{{'Video: '+ results.video}}</p>
    <p>{{'VoteAverage: ' + results.vote_average}}</p>
    <p>{{'VoteCount: ' + results.vote_count}}</p>
    <button @click=addItem>Favorite</button>
  </div>
</template>
<script>

import axios from 'axios';
import createPersistedState from 'vuex-persistedstate'
export default {
  data () {
    return {
      results: this.$route.params.Data,
      token: '',
      favoriteID: 'hooray',
      userName: 'pakjoonhee90'
    }
  },
  created() {
    this.token = JSON.parse(localStorage.getItem('token'))
    if(this.results == null) {
      this.results = JSON.parse(localStorage.getItem('movieDetails'))
    }
  },
  methods: {
    addItem() {
      console.log(this.token)
      axios({
        method: 'post',
        url: 'https://9e4pxt6c8f.execute-api.us-east-1.amazonaws.com/v5/movie-call',
        data: {
          firstName: 'Fred',
          lastName: 'Flintstone'
        },
        headers: {
          Authorization: this.token,
          'Content-Type': 'application/json', 
          favoriteID: this.favoriteID,
          userName: this.userName
        }
      }).then(response => {
        console.log(response)
      })
      .catch(e => {
        console.log(e)
      })
      // axios.post(`https://9e4pxt6c8f.execute-api.us-east-1.amazonaws.com/v5/movie-call`, data,{
        
      // })
      // .then(response => {
      //   console.log(response)
      // })
      // .catch(e => {
      //   console.log(e)
      // })
    }
  }
}
</script>

<style scoped>


</style>
