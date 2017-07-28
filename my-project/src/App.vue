<template>
  <div id="app">

    <router-view></router-view>

    <div class="link-benkyo">
      <ul class="table-list">
        <li>
          <a href="/">top</a>
        </li>
        <li>
          <a href="http://localhost:8080/#/vuesan">v-if / v-show</a>
        </li>
        <li>
          <a href="http://localhost:8080/#/vueyon">コンポーネントの使いかた</a>
        </li>        <li>
          <a href="http://localhost:8080/#/vueyontwo">親子間にてデータ認識</a>
        </li>
      </ul>
    </div>
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
  li{
    list-style: none;
  }
  .header{
    background: #cccc;
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
  .note{
    color: #ff3366;
  }


  .link-benkyo{
    width:50%;
    margin:0 auto;
    padding:20px;
  }
  .table-list{
    table-layout: fixed;
    display: table;
    width:100%;
    margin:30px 0;
    background: #f1f1f1;
  }
  .table-list li{
    display: table-cell;
    text-align: center;
  }
</style>
