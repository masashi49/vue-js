<template>
  <div>
    <div class="header"><h1>{{ msg }}</h1>
      <p>v-if / v-show / 算出プロパティを使って条件によって要素や属性などの内容を切り替えます。</p>
    </div>

    <div class="page-data">
      <h2 class="page-title">v-show と v-if</h2>
      <p class="dec">v-show は display:none を付けて表示上でのみ見えなくしているのに対して v-if は DOM レベルで削除します</p>
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
  </div>
</template>

<script>
  export default {
    name: 'hello',
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

      }
    },
    methods:{
      test1:function () {
        this.price = this.inputprice
      }
    },
    computed: {
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