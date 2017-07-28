<template>
  <div>
    <div class="header"><h1>{{ message }}</h1>
      <p>コンポーネントを使ってサイトの部品を作る。<br>
        参考：<a href="http://chibinowa.net/note/vuejs/vue-4.html">vue-4.html</a>
      </p>
    </div>

    <div class="page-data">
      <h2 class="page-title">コンポーネント</h2>
      <p class="dec">そのページを構成しているそれぞれの部品のこと。<br>必要な場面で単体で使いまわす事も出来る <br>phpのパーツと同じ考え</p>
      <p>コンポーネントは HTML 上の描画したい場所にカスタムタグで記述して使用します。</p>
      <pre v-pre="">
        ＜div id="app">
          ＜my-component>＜ /my-component>
        ＜/div>
      </pre>
    </div>


    グローバルで使うコンポーネントは、"Vue.component"で作る。
    <pre v-pre="">
        Vue.component('my-components', { template: '＜p>my-components＜/p>' });
      </pre>
    <div class="global-components" style="background: #ddd;margin-bottom: 20px;">
      <my-components></my-components>
      ┗グローバルから表示しているコンポーネントのテキスト
    </div>

    <div class="global-components" style="background: #ffff99; margin-bottom: 20px;">
      <my>このvueだけで使えるコンポーネント</my>
      ┗このファイルの中でしか使えないコンポーネントのテキスト
    </div>

    <pre v-pre="">

        var m = { template: ＜p>あいうえお＜/p>' };

        export default {
          name: 'vue-3',
          data () {
            return {
              message: 'Vue.js のコンポーネントと親子間データの送受信',

            }
          },
          components: {
            //このvueだけで使えるコンポーネント
            'my': m
          }
        }

    </pre>


    <div class="page-data">
      <h2 class="page-title">テンプレートの中でタグを書いて使用できる</h2>
      <p class="dec">コンポーネントタグ自体に ID などの HTML の属性を付けていた場合コンポーネント側のテンプレートのルートタグに上書きまたはマージされます。<br>
        複数の値が指定可能な class などはマージされます。</p>

      <my-components class="set-class-name"></my-components>
      ┗class="set-class-name"付きコンポーネント

      <br><br><br>
    </div>

    <div class="page-data">
      <h2 class="page-title">is="コンポーネント名"</h2>
      <p>条件でコンポーネントを選択するなど特別な理由がある場合 is="コンポーネント名" を使って要素をコンポーネントに置き換える事もできます。</p>
      <div is="my"></div>
      ┗divタグをmyコンポーネントに置き換えている

      <div is="my-components"></div>
      ┗divタグをmy-componentsコンポーネントに置き換えている

      <pre v-pre="">
        ＜div is="my">＜/div>
      </pre>
    </div>


    <div class="page-data">
      <h2 class="page-title">is="コンポーネント名"</h2>
    <pre v-pre="">
//グローバルにコンポーネントを定義
Vue.component('my-components', {
  template: `＜div class="normalnormalnormal">
  ＜p>my-componentsのpタグ{{ message }}{{ message }}＜/p>
  ＜/div>`,
  data: function() {
    return {
      message: 'hello!'
    }
  }
});
    </pre>
    </div>



    <div class="page-data">
      <h2 class="page-title">テンプレートの中でタグを書いて使用できる <span class="note">inline-template</span></h2>
      <p class="dec">コンポーネントの内側にある HTML をテンプレートとして使用します。記述されている場合 render 関数より優先度が高いです。</p>
      <my-components inline-template>
        <p>asdfasdsdf</p>
      </my-components>
      <pre v-pre="">
        ＜my-components inline-template>
          ＜p>テンプレート＜/p>
        ＜/my-components>
      </pre>
    </div>

    <div class="page-data">
      <h2 class="page-title">ハマりどころ <span>テンプレートは要素で囲もう</span></h2>
      <p class="dec">囲まれていなかったり複数の要素は指定できないので注意なのです。</p>

<pre v-pre="">
これはNG
Vue.extend({
template: '＜p>テンプレート＜/p>＜p>テンプレート＜/p>'
})
htmlタグが２つ存在する
</pre>

<pre v-pre="">
これはok
Vue.extend({
template: '＜div>＜p>テンプレート＜/p>＜p>テンプレート＜/p>＜/div>'
})
htmlタグ１つで囲む。
</pre>

    </div>


  </div>
</template>

<script>
  var m = {template: '<p class="normal">class="normal"がついたpタグコンポーネント</p>'};

  export default {
    name: 'vue-3',
    data () {
      return {
        message: 'Vue.js のコンポーネントと親子間データの送受信',
      }
    },
    components: {
      //このvueだけで使えるコンポーネント
      'my': m
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






