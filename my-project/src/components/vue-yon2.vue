<template>

    <div>



        <div class="header"><h1>{{ message }}</h1>
            <p>
                自分のスコープ外のデータにアクセスしたい場合は何を使うか＆何を使わせるか明示的にします。<br>最初は若干面倒に感じるかもしれないですが公式で推奨されてるコポーネント同士の密結合を抑えて連携する方法です。<br>
                参考：<a href="http://chibinowa.net/note/vuejs/vue-4.html">vue-4.html</a>
            </p>
        </div>

        <div class="page-data">
            <h2 class="page-title"></h2>
            <ul class="dec">
                <li>
                    親：　v-bind ディレクティブ（ : で省略可能）を付けた式タイプの属性で使わせるデータを指定
                </li>
                <li>
                    子：　props でその属性を受け取る
                </li>
                <li><span class="note">属性、または:(v-onの省略)つきの属性をpropで受け取</span>り、バインディングさせる。<br>子は props
                    でその属性を受け取る事で値を使えるようになります。<br>別のデータに代入するみたいな感じですがスコープが違うので属性名はデータと同じでも別の名前を使ってもOK。
                </li>
                <li><span class="note">属性名はなんでもいいが、よく使われるものにしておく、valやdataなど。</span></li>
                <li>「:」があれば、プロパティに対する値をバインド。「:」がなければただのテキストとして扱われる</li>
            </ul>
            <a href="http://kuroeveryday.blogspot.jp/2016/10/vuejs-components-emit-events.html">[図解]Vue.js2.x系で親子コンポーネント間でデータの受け渡しをする方法</a>
            <br><br><br>

            <!-- A：静的な文字列を渡す -->
            <child-comp kuma="ただのテキスト"></child-comp>
            <!-- B：データを渡す -->
            <child-comp :kuma="lender"></child-comp>
            <br><br>

      <pre v-pre="">

＜child-comp vala="静的な文字列を渡す">＜/child-comp>
＜child-comp vala="hellos">＜/child-comp>

        下記を通る

Vue.component('child-comp', { //コンポーネントを宣言
  template: '＜p>{{ vala }}＜/p>', //valaをバインドさせて表示
  props: ['vala'] // v-bind ディレクティブで`vala`を受け取とると宣言すると、valaを取得できる。
});

      </pre>
            <br><br>
            <child :aaa="parentData"></child>
            ↓
      <pre v-pre>
＜child :aaa="parentData">＜/child>


こんな感じで受け取ってる↓

//グローバルにコンポーネントを定義
Vue.component('child', {
  template: `＜div class="normalnormalnormal">{{ aaa }}{{ message }}だよ＜/div>`,
    props: ['aaa'],
    data: function() {
    return {
    message: `くまーくまー`
    }
  }
});
      </pre>

        </div>


        <div class="page-data">
            <h2 class="page-title">子供から親</h2>
            <p class="dec">
                親側のテンプレート内に子コンポーネントとして
            <pre>＜child-comp v-on:childs-event="parentsMethod">＜/child-comp></pre>
            を仕込む

            </p>

            <child-comp-on @childs-event="parentsMethod" :sampleing="sampleing"></child-comp-on>
            子供の値を親で受け取ったやつ⇨{{ parentsMethodsStr }}

        </div>


        <div class="page-data">
            <h2 class="page-title">子供から親　wanwancompo</h2>
            <p class="dec">
                wanwancompo
            <pre>＜wanwancompo @childs-event="parentsMethod($event, 'Dog')">＜/wanwancompo></pre>
            </p>

            <wanwancompo @childs-event2="parentsMethod2($event, 'Dog')">
                <div v-for="item in childVal">
                    {{item.a}}
                </div>

            </wanwancompo>

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
                message: '親子間でデータの受け渡しをする',
                lender: 'lender',
                hellos: 'hello!!!',
                parentData: ['Alfa', 'Bravo', 'Charlie'],
                parentsMethodsStr: "",
                sampleing: "親の値だよ",
                waowao: "", //子供から送られてくる値
                childVal: {},
                childStr: '子供よ',
            }
        },
        methods: {
            parentsMethod: function (text) {
                this.parentsMethodsStr = text;
                /* 子から受け取ったメッセージ */
            },
            parentsMethod2: function (childVal, opt) {
                alert(opt + ': ' + childVal)
                /* 子から受け取ったメッセージ */
            }
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



