<script>
  export default {
    name: 'Card',
  }
</script>

<template>
  <div class="Card bg-white p-3 mb-4">
    <slot />
  </div>
</template>

<style lang="sass">
.Card
  box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.03)
</style>
