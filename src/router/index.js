import Vue from 'vue'
import Router from 'vue-router'
import SignIn from '@/components/SignIn'
import Authenticate from '@/components/Authenticate'
import Register from '@/components/Register'
import Movies from '@/components/Movies'
import MovieDetails from '@/components/MovieDetails'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'SignIn',
      component: SignIn
    },
    {
      path: '/authenticate',
      name: 'Authenticate',
      component: Authenticate,
      props: true
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/movies',
      name: 'Movies',
      component: Movies
    },
    {
      path: '/moviedetails',
      name: 'MovieDetails',
      component: MovieDetails,
      props: true
    }
  ]
})
