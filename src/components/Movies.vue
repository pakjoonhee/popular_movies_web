<template>
  <div>
    <div class="row" v-for="(post,index) in posts" @click="getMovieDetails(index)">
      <img class="poster" v-bind:src="'http://image.tmdb.org/t/p/w185/' + post.poster_path"/>
      <p class="title">{{post.title}}</p>
    </div>
  </div>
</template>
<script>

import axios from 'axios';
import {mapState} from 'vuex'
export default {
  
  computed: mapState(['posts', 'loading']),
  created() {
  	this.$store.dispatch('loadData') 
  },
  methods: {
    getMovieDetails(index) {
      var myProp = this.posts[index];
      localStorage.setItem('movieDetails', JSON.stringify(myProp))
      this.$router.push({name:'MovieDetails', params:{Pid:index, Data:myProp}});
    }
  }
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
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
