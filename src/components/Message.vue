<script>
export default {
  props: {
    status: {
      type: Boolean,
      default: false,
      required: true,
    },
    message: {
      type: String,
      default: '',
    },
  },
  methods: {
    closeMessage() {
      this.status = false;
    }
  },
}
</script>
<template>
  <div class="Message" v-if="status">
    <div class="Message-bg" @click="closeMessage"></div>
    <div class="Message-inner">
      <div class="Message-header">
        <h5>Hata!</h5>
      </div>
      <div class="Message-content">
        {{ message !== '' ? message : 'Bir hata olustu!' }}
      </div>
      <div class="Message-footer">
        <button class="btn btn-primary btn-sm" @click="closeMessage">KAPAT</button>
      </div>
    </div>
  </div>
</template>
<style lang="sass">
.Message
  font-family: 'Poppins', sans-serif
  position: fixed
  z-index: 999999
  top: 0
  left: 0
  width: 100%
  height: 100%
  &-bg
    position: absolute
    z-index: 1
    top: 0
    left: 0
    width: 100%
    height: 100%
    background-color: rgba(#000, .85)
  &-inner
    background-color: #fff
    border-radius: 3px
    position: absolute
    z-index: 2
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)
    min-width: 400px
    max-width: 70%
    overflow: hidden
  &-content
    padding: 20px
    font-size: 14px
  &-header
    padding: 25px 20px
    border-bottom: 1px solid rgba(#000, .1)
    h5
      font-size: 16px
      font-weight: 700
      margin: 0
  &-footer
    padding: 20px
    background-color: #f5f6fa
    text-align: right
</style>
