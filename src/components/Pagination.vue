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
  <nav v-if="data && data.data && data.data.length !== 0">
    <ul class="pagination">
      <li v-bind:class="['page-item', data.page === 1 ? 'disabled' : '']">
        <a class="page-link" aria-label="Previous" @click="users(data.page - 1)">
          <span aria-hidden="true">&laquo;</span>
          <span class="sr-only">Previous</span>
        </a>
      </li>
      <li v-bind:class="['page-item', value === data.page ? 'active disabled' : '']" v-for="value in data.total_pages">
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

<style lang="sass">
@import '../assets/variables'
.pagination
  border-radius: 0
  .page-item
    margin: 0 10px 0 0
    .page-link
      min-width: 50px
      height: 50px
      text-align: center
      line-height: 50px
      padding: 0
      transition: all .4s
      &:hover
        background-color: $color-primary
        border: 1px solid $color-primary
        color: #fff
        box-shadow: $shadow
    &:first-child,
    &:last-child
      .page-link
        border-radius: 0
    &.active
      .page-link
        background-color: $color-primary
        border: 1px solid $color-primary
        color: #fff
        box-shadow: $shadow
    &.disabled
      cursor: no-drop
</style>
