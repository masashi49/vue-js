<template>
  <div>
    <div class="header"><h1>{{ message }}</h1>
      <p>参考：<a href="http://chibinowa.net/note/vuejs/vue-4.html">vue-4.html</a>
      </p>
    </div>



    <div class="page-data">
      <h2 class="page-title">サンプル</h2>
      <p class="dec">サンプル
      </p>


    </div>



    <p class="dec"><a href="http://kuroeveryday.blogspot.jp/2016/10/vuejs-components-emit-events.html">http://kuroeveryday.blogspot.jp/2016/10/vuejs-components-emit-events.htmlわかりにくいのでここを読む</a>
    </p>
  </div>
</template>

<script>
  export default {
    name: 'vueyontwo',
    data () {
      return {
        messagge: 'インタラクティブなコンポーネントを作る',

      }
    },
    methods: {

    }

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



