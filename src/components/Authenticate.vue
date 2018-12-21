<template>
  <div class="hello">
    <input type="code" name="" placeholder="Code" v-model="code"> <br>
    <button @click="authenticateUser">Sign In</button>
    <h1>{{myProp}}</h1>

  </div>
</template>

<script>

import { Auth } from 'aws-amplify'
import { AmplifyEventBus } from 'aws-amplify-vue'
import { CognitoUserPool, CognitoUserAttribute, CognitoUser } from 'amazon-cognito-identity-js';
import * as AmazonCognitoIdentity from 'amazon-cognito-identity-js';

export default {
  name: 'SignIn',
  props:['myProp'],
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      code: '',
      username: this.myProp
    }
  },
  
  methods: {
    authenticateUser() {
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
      cognitoUser.confirmRegistration(this.code, true, function(err, result) {
          if (err) {
              alert(err.message || JSON.stringify(err));
              return;
          }
          console.log('call result: ' + result);
      });
      this.$router.push('/')
    }
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
