import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
Vue.config.devtools = true
import axios from 'axios'
const URL = 'https://jsonplaceholder.typicode.com/posts';

export const store = new Vuex.Store({
	state: {
  	posts: [],
    loading: true
  },
  actions: {
  	loadData({commit}) {
    	axios.get(URL).then((response) => {
    	// console.log(response.data, this)
        commit('updatePosts', response.data)
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