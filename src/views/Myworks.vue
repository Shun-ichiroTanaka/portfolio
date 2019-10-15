<template lang="html">
<div>
  <vs-row vs-w="12" class="section1">
    <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-lg="6" vs-sm="6" vs-xs="12">
      <h1>Myworks</h1>
    </vs-col>
    <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-lg="6" vs-sm="6" vs-xs="12">
      <img src="/works/works-top.svg" alt="">
    </vs-col>
  </vs-row>
  <div class="section2">
    <vs-row>
      <vs-col vs-offset="4" v-tooltip="'col - 4'" vs-type="flex" vs-justify="center" vs-align="center" vs-w="4">
        <vue-preview :slides="slide1" @close="handleClose"></vue-preview>
      </vs-col>
    </vs-row>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      slide1: [{
          src: 'https://portfolio-b4cc1.firebaseapp.com/works/work01.jpg',
          msrc: 'https://portfolio-b4cc1.firebaseapp.com/works/work01.jpg',
          alt: 'picture1',
          title: 'このポートフォリオサイトです。制作期間は約3日間です。Vue.jsでSPAを構築しFirebaseにデプロイしました。全体の統一感を意識しました。',
          w: 600,
          h: 400
        },
        {
          src: 'https://portfolio-b4cc1.firebaseapp.com/works/work02.jpg',
          msrc: 'https://portfolio-b4cc1.firebaseapp.com/works/work02.jpg',
          alt: 'picture2',
          title: '神経衰弱ゲームです。Vue.jsで作成しGithubPagesで公開しました。作成動機はゲームが作れるVueの可能性に興味が惹かれたからです。',
          w: 600,
          h: 400
        }
      ]
    }
  }
}
</script>

<style lang="scss">

</style>
<style lang="scss">
@media screen and (min-width: 1080px) {
  .section1 {
    height: 300px;
    padding-bottom: 100px;
    margin: 50px 0;

    & img {
      max-width: 500px;
    }
  }

  .section2 {
    margin: 50px 0 !important;
  }
}

@media screen and (min-width: 768px) {}
</style>
