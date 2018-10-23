<script>
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
export default {
  name: 'default',
  props: ['title'],
  components: {
    Header,
    Sidebar,
  },
}
</script>

<template>
  <section class="Default-layout">
    <Header />
    <div class="container-fluid">
      <div class="row">
        <div class="col-2">
          <div class="row">
            <Sidebar />
          </div>
        </div>
        <div class="col-10 p-4">
          <h3 class="mb-3">{{title ? title : ''}}</h3>
          <slot />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="sass">
.Default-layout
  h3
    font:
      weight: 600
      size: 24px
    padding: 0 15px
</style>
