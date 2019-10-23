<template lang="html">
<div class="con-example-images">
  <vs-row vs-w="12" class="section1">
    <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-lg="6" vs-sm="6" vs-xs="12">
      <h1>Myworks</h1>
    </vs-col>
    <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-lg="6" vs-sm="6" vs-xs="12">
      <img src="/works/works-top.svg" alt="">
    </vs-col>
  </vs-row>

  <vs-images :hover="hover" class="work-box">
    <vs-image :src="`/works/work01.jpg`"/>
    <vs-image :src="`/works/work01.jpg`"/>
  </vs-images>
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
  max-width: 80vw;
  margin: 0 auto;
  // overflow: auto;
  // max-height: 500px;
}

.work-box {
  margin: 100px 0;
}
</style>
