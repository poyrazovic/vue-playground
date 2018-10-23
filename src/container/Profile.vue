<script>
  import { mapState, mapActions } from 'vuex';
  import { router } from '../routes/router';
  import Default from '../layouts/default';
  import Card from '../components/Card';
  import Loader from '../components/Loader'
  export default {
    name: 'Profile',
    components: {
      Loader,
      Card,
      Default,
    },
    created() {
      this.userDetail(router.history.current.params.id);
    },
    computed: {
      ...mapState('users', ['user', 'loading']),
    },
    methods: {
      ...mapActions('users', ['userDetail']),
    }
  }
</script>
<template>
  <Default :title="user.first_name ? user.first_name + '\'s Profile' : ''">
    <div class="container-fluid">
      <Loader :status="loading" />
    </div>
    <div class="container-fluid Profile" v-if="user && user.id">
      <div class="row">
        <div class="col-8">
          <Card>
            <div class="table-responsive">
              <table class="table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Created at</th>
                    <th>Updated at</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{{user.id}}</td>
                    <td>{{user.first_name + ' ' + user.last_name}}</td>
                    <td>{{user.created_at ? user.created_at : '-'}}</td>
                    <td>{{user.updated_at ? user.updated_at : '-'}}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>
        </div>
        <div class="col-4">
          <Card>
            <img :src="user.avatar" alt="">
          </Card>
        </div>
      </div>
    </div>
    <div class="container-fluid" v-if="user && user.response && user.response.status && user.response.status === 404">
      <Card>Result is not found!</Card>
    </div>
  </Default>
</template>

<style lang="sass">
.Profile
  img
    width: 100%
</style>
