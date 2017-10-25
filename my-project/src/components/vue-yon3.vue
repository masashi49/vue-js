<template>
  <div>
    <div class="header"><h1>{{ message }}</h1>
      <p>参考：<a href="http://chibinowa.net/note/vuejs/vue-4.html">vue-4.html</a>
      </p>
    </div>

    <Headparts :pattern="pattern" :common="common"></Headparts>



    <div class="page-data">
      <h2 class="page-title">サンプル</h2>
      <p class="dec">サンプル
      </p>


    </div>

    </p>
  </div>
</template>

<script>

  import Headparts from './parts/Headparts';


  export default {
    name: 'vueyontwo',
    data () {
      return {
        messagge: 'インタラクティブなコンポーネントを作る',
        common : 'propsで渡すcomon',
        pattern : 'propsで渡すpattern'
      }
    },

    components: {
      Headparts,
    },

  }

</script>


<style>
  .active {
    color: #ff0000;
  }

  .set-class-name {
    background: #ff0000;
    color: #fff;
  }
</style>



