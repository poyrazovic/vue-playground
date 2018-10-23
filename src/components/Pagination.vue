<script>
  import { mapActions } from 'vuex';
  export default {
    name: 'Pagination',
    props: ['data'],
    methods: {
      ...mapActions('users', ['users'])
    },
  }
</script>

<template>
  <nav v-show="data && data.data">
    <ul class="pagination">
      <li v-bind:class="['page-item', data.page === 1 ? 'disabled' : '']">
        <a class="page-link" aria-label="Previous" @click="users(data.page - 1)">
          <span aria-hidden="true">&laquo;</span>
          <span class="sr-only">Previous</span>
        </a>
      </li>
      <li v-bind:class="[value === data.page ? 'active' : '', 'page-item']" v-for="value in data.total_pages">
        <a class="page-link" @click="users(value)">{{value}}</a>
      </li>
      <li v-bind:class="['page-item', data.page === data.total_pages ? 'disabled' : '']">
        <a class="page-link" aria-label="Next" @click="users(data.page + 1)">
          <span aria-hidden="true">&raquo;</span>
          <span class="sr-only">Next</span>
        </a>
      </li>
    </ul>
  </nav>
</template>
