<template>
  <div class="hello">
    <div v-if="results">
        <div class="row" v-for="(result,index) in results" @click="getMovieDetails(index)">
          <img class="poster" v-bind:src="'http://image.tmdb.org/t/p/w185/' + result.poster_path"/>
          <p class="title">{{result.title}}</p>
        </div>
    </div>
  

  </div>
</template>
<script>

import axios from 'axios';
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      code: '',
      results: '',
    }
  },
  created() {
    this.movieCall()
  },
  methods: {
    movieCall() {
      axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=69ddc9ad6327590c413357deb829550e&language=en-US&page=1`)
      .then(response => {
        this.results = response.data.results;
      })
      .catch(e => {
        console.log(e)
      })
    },
    getMovieDetails(index) {
      console.log(index);
      var myProp = this.results[index];
      this.$router.push({name:'MovieDetails', params:{Pid:index, Data:myProp}});
    }
  },
  
}
</script>

<style scoped>

.row {
  display: inline-block;
  padding: 10px;
}

.poster{
  width: 185px;
  height: 274px;
}

.title{
  overflow: hidden;
  width: 185px;
  height: 40px;
  font-size: 15px;
}


</style>
