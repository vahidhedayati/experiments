<template>
  <div class="ui middle aligned center aligned grid">
    <div class="column">
      <router-link :to="{name: 'Home'}">
      <h2 class="ui teal image header">
        <img src="../assets/grails.png">
        <div class="content">
        </div>
      </h2>
      </router-link>
      <form class="ui large form" >
        <div class="ui stacked segment">
          <div class="field">
            <div class="ui left icon input">
              <i class="user icon"></i>
              <input type="text" name="username" placeholder="username" v-model="data.body.username" >
            </div>
          </div>
          <div class="field">
            <div class="ui left icon input">
              <i class="lock icon"></i>
              <input type="password" name="password" placeholder="Password" v-model="data.body.password">
            </div>
          </div>
          <div class="field">
            <div class="ui left icon input">
              <label><input v-model="data.rememberMe" type="checkbox" /> Remember Me</label>
            </div>
          </div>
          <button class="ui fluid large teal submit button"  v-on:click="loginNew" >Login</button>

        </div>

        <div class="ui error message"></div>

      </form>

      <div class="ui message">
        New to us? <router-link :to="{name: 'Registration'}">Sign Up</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import UsersService from '@/services/UsersService'
import ProfileService from '@/services/ProfileService'
export default {
  data () {
    return {
      context: 'login context',
      data: {
        body: {
          username: 'susan',
          password: 'password1'
        },
        rememberMe: false,
        fetchUser: true
      },
      error: null
    }
  },
  computed: {
    isAuthenticated: function () {
      return this.$store.getters.isAuthenticated
    }
  },
  methods: {
    /*
      UsersService.login({
          username: this.data.body.username,
          password: this.data.body.password
        })
        .then((response) => {
          console.log('Login >>>>>>>>', JSON.stringify(response));

          this.$store.dispatch('auth/login',  response)
          this.$store.dispatch('user/setToken', response.data.token)
          this.$store.dispatch('user/userLogged', response.data.set)
          this.getProfile(response.data.set._id);
          //console.log(response.data.set.role+"------------------");
          if(response.data.set.role === 'Admin') {
            this.$router.push({name: 'Admin'})
          } else if(response.data.set.role === 'ROLE_DRIVER') {
            this.$router.push({name: 'Driver'})
          } else {
            this.$router.push({name: 'User'})
          }

      })
     */
    loginNew () {
      UsersService.login({
        username: this.data.body.username,
        password: this.data.body.password
      })
        .then((response) => {
        console.log('Login >>>>>>>>', JSON.stringify(response));

      this.$store.dispatch('auth/login',  response)
      //this.$store.dispatch('user/setToken', response.data.access_token)


      //console.log(response.data.set.role+"------------------");
      //this.store.dispatch('user/userLogged', response.data.set)
// this.getProfile(response.data.username);

      if(response.data.roles[0] === 'Admin') {
        this.$router.push({name: 'Admin'})
      } else if(response.data.roles[0] === 'ROLE_DRIVER') {
        this.$router.push({name: 'Driver'})
      } else {
        this.$router.push({name: 'User'})
      }

    })
      /*this.$auth.login({
          username: this.data.body.username,
          password: this.data.body.password
        })
        .then((response) => {
          console.log('Login >>>', response)
          this.$store.dispatch('auth/login',  response)
          this.$store.dispatch('user/setToken', response.data.token)
          this.$store.dispatch('user/userLogged', response.data.set)
          this.getProfile(response.data.set._id);
          //console.log(response.data.set.role+"------------------");
          if(response.data.set.role === 'Admin') {
            this.$router.push({name: 'Admin'})
          } else {
            this.$router.push({name: 'User'})
          }
      })
*/
    },
    getProfile (userId) {
      console.log(userId)
      ProfileService.fetchProfile(userId)
      .then((res) => {
        console.log(res.data.profile[0])
        this.$store.dispatch('user/setProfile', res.data.profile[0])
        this.$router.push({name: 'Home'})
      })
    },
    authenticate: function (provider) {
      this.$auth.authenticate(provider).then(function () {
        // Execute application logic after successful social authentication
      })
    }
  }
}
</script>

<style lang="scss">
</style>
