<template lang="html">
<div class="con-example-images">
  <HomeParticle></HomeParticle>
  <div class="work-details">
    <vs-collapse accordion>
      <!-- ポートフォリオ -->
      <vs-collapse-item><br>
        <div slot="header">ポートフォリオサイト</div>
        <a href="https://portfolio-b4cc1.firebaseapp.com/" target="_blank" rel="noopener">アウトプットはこちら</a><br><br>
        言語 / javascript<br>
        フレームワーク / Vue.js<br>
        <!-- データベース / mysql -->
        ソースコード管理 / git<br>
        <!-- プロジェクト管理 / backlog -->
        <!-- 情報共有ツール / slack -->
        その他 / MAMP,　Firebase<br><br>
        VueでSPA構築。WebpackとBabelを導入しgulpでコンパイルという手もあったが、 <br>
        今回は各ページにSassを書く形にした。<br>
        当初GithubPageに公開しようと思ったが、vueファイルは公開できなかったためFirebaseを選択した。<br>
        Firebaseの機能としては、サーバー公開するためのhostingとContactページでのメール送信機能で使用(現在作成途中)したFunctionの二つ。<br>
        databaseやfirestoreなどは使用していない。従ってほぼフロントエンドの処理で実装できた。<br><br>
        Vueで書くフロント部分は<br>
        ・規格によって差異が生じた <br>
        ・jqueryとVueの使い分け<br>
        ・スタイル修正にかかる時間<br>
        ・Vue-routerとJqueryの衝突(page-transitionが結局うまく実装できなかった)<br>
        など予定よりかなり時間がかかってしまった。 <br><br>

        逆によかった点は <br>
        以前起きた、こまめにgitにあげていなかった事によるデータの消失という失敗を糧に<br>
        今回は小さな進捗でも即座にcommitしていたため、<br>
        marge/reset/respaceなど失敗しても対処できる慎重さを身につけられた。

      </vs-collapse-item>
      <!-- ECアプリ -->
      <vs-collapse-item>
        <div slot="header">
          ECアプリ
        </div>
        <a href="https://e-commerce-94802.firebaseapp.com/" target="_blank" rel="noopener">アウトプットはこちら</a><br>
        言語 / javascript<br>
        フレームワーク / Vue.js<br>
        <!-- データベース / mysql -->
        ソースコード管理 / git<br>
        <!-- プロジェクト管理 / backlog -->
        <!-- 情報共有ツール / slack -->
        その他 / MAMP,　Firebase<br>
        <br>
        基本的なCRUD処理と決済システムが詰め込まれており練習になるので<br>
        アウトプットにEC系統を続けて選択
      </vs-collapse-item>
      <vs-collapse-item>
        <div slot="header">
          ECサイト
        </div>
        言語 / PHP, javascript<br>
        フレームワーク / Laravel, Vue.js<br>
        データベース / mysql
        ソースコード管理 / git<br>
        その他 / MAMP<br>
        Web開発環境　/　MAMP <br><br>
        バックエンドにLaravelを選択し作成(現在も作成途中)。<br>
        消費者側の実装は一通り完了したが、売り手側(管理者側)の実装に<br>
        oyagerというLaravelの管理テンプレートを使用したところ、<br>
        これが大誤算でテストデータの処理が一元管理できなくなった（エディタと管理者ページ）ため<br>
        何度も同じ工程を繰り返すハメになった。また、Laravel6.0で作成していたため、<br>
        実装やエラーに関する参考になる記事が少なかったこともあり管理者ページの作成を止めている。<br>
      </vs-collapse-item>
      <vs-collapse-item>
        <div slot="header">
          ミュージックアプリ
        </div>
        <a href="https://shun-ichirotanaka.github.io/vue_music/" target="_blank" rel="noopener">アウトプットはこちら</a><br><br>
        言語 / javascript<br>
        フレームワーク / Vue.js<br>
        ソースコード管理 / git<br>
        その他 / MAMP, GithubPage<br>
      </vs-collapse-item>
      <vs-collapse-item>
        <div slot="header">
          神経衰弱ゲーム①
        </div>
        <a href="https://shun-ichirotanaka.github.io/vue_memorygame2/" target="_blank" rel="noopener">アウトプットはこちら</a><br><br>
        言語 / javascript<br>
        フレームワーク / Vue.js<br>
        <!-- データベース / mysql -->
        ソースコード管理 / git<br>
        <!-- プロジェクト管理 / backlog -->
        <!-- 情報共有ツール / slack -->
        その他 / MAMP, GithubPage<br>
      </vs-collapse-item>
      <vs-collapse-item>
        <div slot="header">
          神経衰弱ゲーム②(菅田将暉ver)
        </div>
        <a href="https://shun-ichirotanaka.github.io/vue_memorycardgame/" target="_blank" rel="noopener">アウトプットはこちら</a><br><br>
        言語 / javascript<br>
        フレームワーク / Vue.js<br>
        <!-- データベース / mysql -->
        ソースコード管理 / git<br>
        <!-- プロジェクト管理 / backlog -->
        <!-- 情報共有ツール / slack -->
        その他 / MAMP, GithubPage<br>
      </vs-collapse-item>
      <vs-collapse-item>
        <div slot="header">
          電卓
        </div>
        <a href="https://shun-ichirotanaka.github.io/vue_calculator/" target="_blank" rel="noopener">アウトプットはこちら</a><br><br>
        言語 / javascript<br>
        フレームワーク / Vue.js<br>
        <!-- データベース / mysql -->
        ソースコード管理 / git<br>
        <!-- プロジェクト管理 / backlog -->
        <!-- 情報共有ツール / slack -->
        その他 / MAMP, GithubPage<br>
      </vs-collapse-item>
      <vs-collapse-item>
        <div slot="header">
          時計
        </div>
        <a href="https://shun-ichirotanaka.github.io/vue_clock/" target="_blank" rel="noopener">アウトプットはこちら</a><br><br>
        言語 / javascript<br>
        フレームワーク / Vue.js<br>
        <!-- データベース / mysql -->
        ソースコード管理 / git<br>
        <!-- プロジェクト管理 / backlog -->
        <!-- 情報共有ツール / slack -->
        その他 / MAMP, GithubPage<br>
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
import HomeParticle from '@/components/HomeParticle.vue'

export default {
  name: 'myworks',
  components: {
    HomeParticle
  },
  data: () => ({
    hover: 'curtain'
  })
}
</script>

<style lang="scss">
// メディアクエリ
$media: 767px;
@mixin pc {
  @media (min-width: ($media)) {
    @content;
  }
}
@mixin sp {
  @media (max-width: ($media)) {
    @content;
  }
}

.con-example-images {
  padding: 50px 0;
  margin: 0 auto;
}

h1 {
  margin-bottom: 30px;
}

a {
  color: #7fdbd0;
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
  text-align: center;
}
</style>
