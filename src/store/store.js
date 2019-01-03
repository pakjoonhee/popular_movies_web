import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
Vue.config.devtools = true
import axios from 'axios'
const URL = 'https://api.themoviedb.org/3/movie/popular?api_key=69ddc9ad6327590c413357deb829550e&language=en-US&page=1';

export const store = new Vuex.Store({
	state: {
  	posts: [],
    loading: true
  },
  actions: {
  	loadData({commit}) {
    	axios.get(URL).then((response) => {
    	  //console.log(response.data.results, this)
        commit('updatePosts', response.data.results)
        commit('changeLoadingState', false)
    	})
    }
  },
  mutations: {
  	updatePosts(state, posts) {
    	state.posts = posts
    },
    changeLoadingState(state, loading) {
    	state.loading = loading
    }
  }
})