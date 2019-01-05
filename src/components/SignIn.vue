<template>
  <div class="hello">
    <input type="text" name="" placeholder="Login" v-model="username"> <br>
    <input type="password" name="" placeholder="Password" v-model="password"> <br>
    <button @click="signIn">Sign In</button>
    <button @click="register">Register</button>
  </div>
</template>

<script>

import { Auth } from 'aws-amplify'
import { AmplifyEventBus } from 'aws-amplify-vue'
import { CognitoUserPool, CognitoUserAttribute, CognitoUser } from 'amazon-cognito-identity-js';
import * as AmazonCognitoIdentity from 'amazon-cognito-identity-js';
import AWS from 'aws-sdk'

export default {
  
  name: 'SignIn',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      username: '',
      password: ''
    }
  },
  
  methods: {
    register() {
      this.$router.push('/register')
    },
    signIn() {
      var authenticationData = {
        Username : this.username,
        Password : this.password,
      };
      var authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails(authenticationData);
      var poolData = {
          UserPoolId : 'us-east-1_4ebk0jMfc', 
          ClientId : '19s2v5o80v2rdh0c5e1elfcle8' 
      };
      var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);
      var userData = {
          Username : this.username,
          Pool : userPool
      };
      var cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);
      var self = this.$router;
      cognitoUser.authenticateUser(authenticationDetails, {
          onSuccess: function (result) {
              var accessToken = result.getAccessToken().getJwtToken();
              AWS.config.region = 'us-east-1';

              var creds = AWS.config.credentials = new AWS.CognitoIdentityCredentials({
                  IdentityPoolId : 'us-east-1:664aea11-445f-43c1-ad01-0c33aac71f19', 
                  Logins : {
                      'cognito-idp.us-east-1.amazonaws.com/us-east-1_4ebk0jMfc' : result.getIdToken().getJwtToken()
                  }
                  
              });
              localStorage.setItem('token', JSON.stringify(result.getIdToken().getJwtToken()))

              AWS.config.credentials.refresh((error) => {
                  if (error) {
                      console.error(error);
                  } else {
                    console.log('Successfully logged!');
                    self.push('/movies')
                  }
              });
          },

          onFailure: function(err) {
              alert(err.message || JSON.stringify(err));
          },
      });
    },
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
