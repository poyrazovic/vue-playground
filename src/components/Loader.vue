<script>
  export default {
    name: 'Loader',
    props: ['status'],
  }
</script>

<template>
  <div class="Loader text-center bg-white p-5 mb-4" v-show="status">
    <svg width="50px" height="50px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" class="lds-rolling">
      <circle cx="50" cy="50" fill="none" stroke="#0bdac7" stroke-width="15" r="35" stroke-dasharray="164.93361431346415 56.97787143782138" transform="rotate(257.817 50 50)">
        <animateTransform attributeName="transform" type="rotate" calcMode="linear" values="0 50 50;360 50 50" keyTimes="0;1" dur="1s" begin="0s" repeatCount="indefinite" />
      </circle>
    </svg>
    <p class="mb-0 mt-2 font-weight-bold">Loading...</p>
  </div>
</template>
