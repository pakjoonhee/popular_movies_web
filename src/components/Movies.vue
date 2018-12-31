<template>
  <div id="app">
    <p>hello</p>
  <div>
    <ul>
      <li v-for="post in posts">
        <h1>
          {{post.title}}
        </h1>
        <p>
          {{post.body}}
        </p>
      </li>
    </ul>
  </div>
</div>
</template>
<script>

import axios from 'axios';
import {mapState} from 'vuex'
export default {
  
  computed: mapState(['posts', 'loading']),
  created() {
    console.log(this.$store)
  	this.$store.dispatch('loadData') // dispatch loading
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
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
