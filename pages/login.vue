<template>
  <div class="auth-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">
            Sign in
          </h1>
          <p class="text-xs-center">
            <a href>Need an account?</a>
          </p>

          <!-- <ul class="error-messages">
            <li>That email is already taken</li>
          </ul>-->

          <!-- <form> -->
          <!-- <fieldset class="form-group">
              <input class="form-control form-control-lg" type="text" placeholder="Your Name">
          </fieldset>-->
          <fieldset class="form-group">
            <input
              v-model="user.email"
              class="form-control form-control-lg"
              type="text"
              placeholder="Email"
            >
          </fieldset>
          <fieldset class="form-group">
            <input
              v-model="user.password"
              class="form-control form-control-lg"
              type="password"
              placeholder="Password"
            >
          </fieldset>
          <button class="btn btn-lg btn-primary pull-xs-right" @click="handleLogin">
            Sign in
          </button>
          <!-- </form> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const Cookie = process.client ? require('js-cookie') : undefined
export default {
  data () {
    return {
      user: {
        email: 'xxxyyy123a@xxxyy.cn',
        password: '12345678'
      }
    }
  },
  methods: {
    async handleLogin () {
      try {
        const data = await this.$axios.$post('/api/users/login', {
          user: this.user
        })
        // console.log(data)
        Cookie.set('user', data.user)
      } catch (err) {
        // console.log(err)
      }
    }
  }
}
</script>

<style lang="less" scoped>
</style>
