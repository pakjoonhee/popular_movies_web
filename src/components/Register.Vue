<template>
  <div class="hello">
    <input type="text" name="" placeholder="Email" v-model="email"> <br>
    <input type="text" name="" placeholder="Login" v-model="username"> <br>
    <input type="password" name="" placeholder="Password" v-model="password"> <br>
    <button @click="register">Sign In</button>
  </div>
</template>

<script>

import { Auth } from 'aws-amplify'
import { AmplifyEventBus } from 'aws-amplify-vue'
import { CognitoUserPool, CognitoUserAttribute, CognitoUser } from 'amazon-cognito-identity-js';
import * as AmazonCognitoIdentity from 'amazon-cognito-identity-js';

export default {
  name: 'SignIn',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      email: '',
      username: '',
      password: ''
    }
  },
  methods: {
    register() {
      var poolData = {
        UserPoolId : 'us-east-1_4ebk0jMfc', 
        ClientId : '19s2v5o80v2rdh0c5e1elfcle8' 
      };
      var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

      var attributeList = [];

      var dataEmail = {
          Name : 'email',
          Value : this.email
      };

      var attributeEmail = new AmazonCognitoIdentity.CognitoUserAttribute(dataEmail);

      attributeList.push(attributeEmail);

      userPool.signUp(this.username, this.password, attributeList, null, function(err, result){
          if (err) {
              alert(err.message || JSON.stringify(err));
              return;
          }
          var cognitoUser = result.user;
          console.log('user name is ' + cognitoUser.getUsername());
      });
      var myProp = this.username;
      this.$router.replace({name:'Authenticate', params:{myProp}})
      this.$router.push('/authenticate')
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
