<template>
    <div>
        <ul>
            <li>{{pattern}}</li>
            <li>{{common}}</li>
        </ul>
        <a href="https://kuroeveryday.blogspot.jp/2016/10/vuejs-components-emit-events.html">Vue.js2.x系で親子コンポーネント間でデータの受け渡しをする方法</a>
    </div>
</template>


<script>
    export default {
        props: [
            'pattern',
            'common',
        ],
    };
</script>