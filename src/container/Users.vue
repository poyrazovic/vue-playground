<script>
  import {mapState, mapActions} from 'vuex';
  import Default from '../layouts/default';
  import Pagination from '../components/Pagination';
  import Loader from '../components/Loader'
  import Card from '../components/Card'
  export default {
    name: 'Dashboard',
    components: {
      Card,
      Loader,
      Pagination,
      Default,
    },
    created() {
      this.users(this.page);
    },
    computed: {
      ...mapState('users', ['loading', 'data', 'page'])
    },
    methods: {
      ...mapActions('users', ['users', 'userDetail'])
    }
  }
</script>
<template>
  <Default :title="'Users'">
    <Loader :status="loading" />
    <Card v-if="data && data.data && data.data.length > 0">
      <div class="table-responsive">
        <table class="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>User</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user in data.data">
              <th scope="row">{{user.id}}</th>
              <td class="d-flex align-items-center">
                <img :src="user.avatar" alt="" class="mr-3">
                <p>{{user.first_name + ' ' + user.last_name}}</p>
              </td>
              <td>
                <button class="btn btn-primary" @click="">Edit</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </Card>
    <Card v-if="data && data.data && data.data.length === 0">Result is not found!</Card>
    <Pagination :data="data" />
  </Default>
</template>
