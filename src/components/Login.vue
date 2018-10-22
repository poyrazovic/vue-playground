<script>
import Message from './Message.vue';
import { mapState, mapActions } from 'vuex';

export default {
  name: 'Login',
  data () {
    return {
      username: '',
      password: '',
      submitted: false
    }
  },
  computed: {
    ...mapState('login', ['status'])
  },
  created () {
    const token = localStorage.getItem('token');
    if(token && token.length > 0) {
      this.$router.push('/dashboard');
    } else {
      this.logout();
    }
  },
  methods: {
    ...mapActions('login', ['login', 'logout']),
    handleSubmit () {
      this.submitted = true;
      const { username, password } = this;
      if (username && password) {
        this.login({ username, password })
      }
    }
  },
  components: {
    Message,
  },
}
</script>

<template>
  <section class="Login p-5 bg-white">
    <h1 class="mb-4">Login</h1>
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="username">Username</label>
        <input type="text" name="username" id="username" class="form-control" v-model="username">
        <p class="text-danger form-group-error" v-show="submitted && !username && (username.length < 3)">Required!</p>
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" name="password" id="password" class="form-control" v-model="password">
        <p class="text-danger form-group-error" v-show="submitted && !password">Required!</p>
      </div>
      <button class="btn btn-primary">LOGIN</button>
    </form>
    <Message :status="false" />
  </section>
</template>

<style lang="sass">
.Login
  width: 100%
  max-width: 450px
  margin: 50px auto

  h1
    font-size: 36px
    font-weight: 700

  label
    color: #969696

  .form-group
    position: relative
    &-error
      position: absolute
      top: 0
      right: 0
      font-size: 13px
</style>
