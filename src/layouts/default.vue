<script>
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
export default {
  name: 'default',
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
          <slot />
        </div>
      </div>
    </div>
  </section>
</template>
