<script>
import { mapActions } from 'vuex';
export default {
  name: 'Header',
  methods: {
    ...mapActions('login', ['logout']),
    signOut() {
      this.logout();
    }
  },
}
</script>
<template>
  <div class="Header bg-white p-3">
    <div class="col-12">
      <div class="row">
        <div class="col-6">
          <h1>
            <router-link to="/dashboard">Vue Reqres API</router-link>
          </h1>
        </div>
        <div class="col-6 text-right">
          <button class="btn btn-primary" @click="signOut">Logout</button>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="sass">
.Header
  border-bottom: 1px solid rgba(#000, .03)
  h1
    color: #000
    font-weight: 700
    font-size: 24px
    margin: 5px 0 0
</style>
