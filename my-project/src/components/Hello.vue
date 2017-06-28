<template>
  <div>
    {{ msg }}<br>
    Vue.jsについて学んでいきます。
  </div>
</template>

<script>
  export default {
    name: 'hellow',
    data () {
      return {
        msg: `Hello vue js`,
      }
    }
  }
</script>