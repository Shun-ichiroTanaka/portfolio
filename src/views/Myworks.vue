<template lang="html">
    <vs-row vs-w="12" class="section1">
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-lg="6" vs-sm="6" vs-xs="12" >
        <h1>Myworks</h1>
      </vs-col>
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-lg="6" vs-sm="6" vs-xs="12">
        <img src="/works/works-top.svg" alt="">
      </vs-col>
    </vs-row>

</template>

<script>
export default {

}
</script>
<style lang="scss">
// .con-example-images {
//   overflow: auto;
//   max-height: 500px;
// }
.section1 {
  height: 300px;
  padding-bottom: 100px;
  margin: 50px 0;
  & img {
    max-width: 500px;
  }
}
</style>