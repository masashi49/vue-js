<template>
  <div id="app">

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
    padding:10px;
  color: #2c3e50;
}
  *{
    margin:0;
    padding:0;
    box-sizing: border-box;
  }
  .header{
    background: #ccc;
    padding:10px;
  }
  .dec{
  }
  .page-data{
    margin-bottom:20px;
  }
  .page-title{
    border-bottom: 3px solid #cfe8f1;
    color: #2f9bb4;
    line-height: 1.4;
    margin:20px 0 10px;
  }
  .content{
    background: #f1f1f1;
    padding:10px;
  }
</style>
