<template>
  <aside class="Sidebar bg-white p-4 w-100">
    <router-link to="/dashboard" active-class="active">Dashboard</router-link>
    <router-link to="/users" active-class="active">Users</router-link>
    <router-link to="/resources" active-class="active">Resources</router-link>
  </aside>
</template>

<style lang="sass">
@import '../assets/variables'
.Sidebar
  height: calc(100vh - 78px)
  h3
    font-weight: 700
    font-size: 18px
    margin: 0 0 15px
    color: $color-light-gray
  a
    font:
      weight: 600
    padding: 7px 10px
    margin: 0 0 10px
    display: block
    transition: all .4s
    &:hover,
    &.active
      box-shadow: $shadow
      background-color: $color-primary
      color: #fff
</style>
