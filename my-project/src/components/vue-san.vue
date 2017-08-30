<template>
  <div>
    <div class="header"><h1>{{ msg }}</h1>
      <p>v-if / v-show / 算出プロパティを使って条件によって要素や属性などの内容を切り替えます。<br>
        参考：<a href="http://chibinowa.net/note/vuejs/vue-3.html">vue-3.html</a>
      </p>
    </div>

    <div class="page-data">
      <h2 class="page-title">v-show と v-if</h2>
      <p class="dec">v-show は display:none を付けて表示上でのみ見えなくしているのに対して v-if は DOM レベルで削除します</p>
    </div>

    <div v-if="testvif">v-ifのテスト</div>

    <div class="page-data">
      <h2 class="page-title">v-showの書き方</h2>
      <p class="dec">
      <pre v-pre>＜li v-for="val in list" <span class="note">v-show="条件式"</span>>条件を満たしたら表示されるもの＜/li></pre>
      </p>
    </div>


    <div class="content">
      <ul>
        <!-- val.price が入力された price よりも小さければ表示 -->
        <li v-for="val in list" v-show="val.price <= price">
          <span :class="{active: val.price < price}">{{ val.name }} {{ val.price }} 円</span>
        </li>

        <li v-if="this.price < inputprice">val.price <<<<< price</li>
        <li v-else-if="this.price > inputprice">val.price >>>> price</li>
        <li v-else-if="this.price == inputprice">おなじやで</li>


      </ul>
      <input v-model="inputprice" size="5"> 円以下の商品を表示

      <br>
      <button @click="price = inputprice">click!</button>
      {{ matchList.length }} 個見つかりました
    </div>



    <div class="page-data">
      <h2 class="page-title">算出プロパティ</h2>
      <p class="dec"><a href="https://jp.vuejs.org/v2/guide/computed.html">算出プロパティ</a>は、データを取得する時に処理が出来る機能 <br>
      何か処理をして、その結果をすぐにデータとして返せるため、毎回関数が走る。<br>
      ただし、同じ表示を複数箇所に使うときでも１回の関す処理で大丈夫。<br>
      <span class="note">算出プロパティは依存関係にもとづきキャッシュされるという違いがあります。
      </span></p>
    </div>

    <div>
      算出プロパティを使ったサンプル
      <input type="text" v-model="message">
      <p>文言を逆にする: "{{ reversedMessage }}" "{{ reversedMessage }}" "{{ reversedMessage }}" "{{ reversedMessage }}"</p>
      <pre v-pre="">
        ＜input type="text" v-model="message">
        文言を逆にする: "{{ reversedMessage }}"
        文言を逆にする: "{{ reversedMessage }}"
        文言を逆にする: "{{ reversedMessage }}"
        文言を逆にする: "{{ reversedMessage }}"
      </pre>
    </div>

    <div class="page-data">
      <div class="dec">変化してもすぐに更新させたくない、任意のタイミングで新しいデータを作成したいっていう時には <span class="note">method や watch</span> を使う</div>
    </div>


    <div class="page-data">
      <h2 class="page-title">v-if /v-else-if / v-else</h2>
      <div class="dec">v-if と組み合わせて v-else-if、v-else というようなディレクティブを使える</div>
    </div>

    <pre v-pre>
＜div v-if="条件A">条件A＜/div>
＜div v-else-if="条件B">条件B<＜div>
＜div v-else>一致しなかった＜/div>
    </pre>




    <div class="page-data">
      <h2 class="page-title">今日のまとめ</h2>
      <div class="dec">算出プロパティと、methodは、役割をきちんと把握して使い分けなければならない。</div>
    </div>


    <my>このvueでは使えないコンポーネント</my>



  </div>
</template>

<script>
  export default {
    name: 'vue-3',
    data () {
      return {
        msg: `Vue.js で条件分岐 and 算出プロパティ`,
        price: 500,
        inputprice: 500,
        list: [{
          'name': 'とまと',
          'price': 100
        }, {
          'name': 'れたす',
          'price': 200
        }, {
          'name': 'きゅうり',
          'price': 300
        }],
        message: 'Hello',
        testvif : true
      }
    },
    methods:{
      test1:function () {
        this.price = this.inputprice
      }
    },
    computed: {
      reversedMessage: function () {
        console.log('reversedMessage'); // テストなので実行した時にログを残してみる
        // `this` は vm インスタンスを指します
        return this.message.split('').reverse().join('')
      },

      matchList: function() {
        console.log('matchList'); // テストなので実行した時にログを残してみる
        var self = this;
        // フィルターを使って price より小さいものだけの配列を作って返す
        return this.list.filter(function(val) {
          if (val.price <= self.price) {
            return true;
          }
        });
      }
    }
  }
</script>


<style >
  .active{
    color: #ff0000;
  }
</style>