<template lang="html">
<div class="con-example-images">
  <h1>Myworks</h1>
  <div class="work-details">
    <vs-collapse accordion>
      <!-- ポートフォリオ -->
      <vs-collapse-item><br>
        <div slot="header">ポートフォリオサイト</div>
        <a href="https://portfolio-b4cc1.firebaseapp.com/" target="_blank" rel="noopener">https://portfolio-b4cc1.firebaseapp.com/</a><br><br>
        バックエンド・フロントエンド　/　Vue.js <br>
        デプロイ　/　Firebase <br>
        Web開発環境　/　MAMP <br><br>
        VueでSPA構築。WebpackとBabelを導入しgulpでコンパイルという手もあったが、
        今回は小規模サイトなのでVueの特徴の一つでもある各ページにSassを書く形にした。
        当初GithubPageに公開しようと思ったが、vueファイルは公開できなかったためFirebaseを選択した。
        Firebaseの機能としては、サーバー公開するためのhostingとContactページでのメール送信機能でしようしたFunctionの二つ。
        databaseやfirestoreなどは使用していない。従ってほぼフロントエンドの処理で実装できた。<br><br>
        Vueで書くフロントの難易度はバックエンドよりは楽だが、<br>
        ・規格によって差異が生じた <br>
        ・jqueryとVueの使い分け<br>
        ・スタイル修正にかかる時間<br>
        ・Vue-routerとJqueryの衝突(page-transitionが結局うまく実装できなかった)
        など予定よりかなり時間がかかってしまったのが今後の課題。 <br><br>

        逆によかった点は <br>
        以前起きた、こまめにgitにあげていなかった事によるデータの消失という失敗を糧に今回は小さな進捗でも即座にcommitしていたため、
        marge/reset/respaceなど失敗してもいくらでも対処できる慎重さを身につけられた。

      </vs-collapse-item>
      <!-- ECアプリ -->
      <vs-collapse-item>
        <div slot="header">
          ECアプリ
        </div>
        <a href="https://e-commerce-94802.firebaseapp.com/" target="_blank" rel="noopener">https://e-commerce-94802.firebaseapp.com/</a><br><br>
        <br><br>
        バックエンド　/　フロントエンド　/　Vue.js <br>
        デプロイ　/　Firebase <br>
        Web開発環境　/　MAMP <br><br>
        <br><br>
        efficitur. Mauris quis faucibus nulla. Pellentesque egestas non ipsum vel maximus.
      </vs-collapse-item>
      <vs-collapse-item>
        <div slot="header">
          ECサイト
        </div>
        バックエンド　/　Laravel <br>
        フロントエンド　/　Vue.js <br>
        Web開発環境　/　MAMP <br><br>

      </vs-collapse-item>
      <vs-collapse-item>
        <div slot="header">
          ミュージックアプリ
        </div>
        <a href="https://shun-ichirotanaka.github.io/vue_music/" target="_blank" rel="noopener">https://shun-ichirotanaka.github.io/vue_music/</a><br><br>
        バックエンド・フロントエンド　/　Vue.js <br>
        デプロイ　/　GithubPage <br>
        Web開発環境　/　MAMP <br><br>
      </vs-collapse-item>
      <vs-collapse-item>
        <div slot="header">
          神経衰弱ゲーム①
        </div>
        <a href="https://shun-ichirotanaka.github.io/vue_memorygame2/" target="_blank" rel="noopener">https://shun-ichirotanaka.github.io/vue_memorygame2/</a><br><br>
        バックエンド・フロントエンド　/　Vue.js <br>
        デプロイ　/　GithubPage <br>
        Web開発環境　/　MAMP <br><br>
      </vs-collapse-item>
      <vs-collapse-item>
        <div slot="header">
          神経衰弱ゲーム②(菅田将暉ver)
        </div>
        <a href="https://shun-ichirotanaka.github.io/vue_memorycardgame/" target="_blank" rel="noopener">https://shun-ichirotanaka.github.io/vue_memorycardgame/</a><br><br>
        バックエンド・フロントエンド　/　Vue.js <br>
        デプロイ　/　GithubPage <br>
        Web開発環境　/　MAMP <br><br>
      </vs-collapse-item>
      <vs-collapse-item>
        <div slot="header">
          電卓
        </div>
        <a href="https://shun-ichirotanaka.github.io/vue_calculator/" target="_blank" rel="noopener">https://shun-ichirotanaka.github.io/vue_calculator/</a><br><br>
        バックエンド・フロントエンド　/　Vue.js <br>
        デプロイ　/　GithubPage <br>
        Web開発環境　/　MAMP <br><br>
      </vs-collapse-item>
      <vs-collapse-item>
        <div slot="header">
          時計
        </div>
        <a href="https://shun-ichirotanaka.github.io/vue_clock/" target="_blank" rel="noopener">https://shun-ichirotanaka.github.io/vue_clock/</a><br><br>
        バックエンド・フロントエンド　/　Vue.js <br>
        デプロイ　/　GithubPage <br>
        Web開発環境　/　MAMP <br><br>
      </vs-collapse-item>
    </vs-collapse>
  </div>
  <div class="work-box">
    <vs-images :hover="hover" class="work-gallery">
      <vs-image :src="`/works/work1.jpg`" />
      <vs-image :src="`/works/work2.jpg`" />
      <vs-image :src="`/works/work3.jpg`" />
      <vs-image :src="`/works/work4.jpg`" />
      <vs-image :src="`/works/work5.jpg`" />
      <vs-image :src="`/works/work6.jpg`" />
      <vs-image :src="`/works/work7.jpg`" />
      <vs-image :src="`/works/work8.jpg`" />
      <vs-image :src="`/works/work9.jpg`" />
      <vs-image :src="`/works/work10.jpg`" />
    </vs-images>
  </div>

</div>
</template>

<script>
export default {
  data: () => ({
    hover: 'curtain'
  })
}
</script>

<style lang="scss">
.con-example-images {
  padding: 50px 0;
  margin: 0 auto;
}

h1 {
  margin-bottom: 30px;
}

.work-box {
  width: 100%;
  margin: 50px auto;
  background: #f2f2f2;
}

.work-gallery {
  width: 80vw;
  padding: 50px 0;
  margin: 0 auto;
}

.work-details {
  font-family: "Noto Sans JP", sans-serif !important;
}
</style>
