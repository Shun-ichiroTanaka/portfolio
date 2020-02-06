<template>
<div id="">
</div>
</template>
<script>
export default {
  name: '',
  mounted: function () {
  }
}
</script>

<style lang="scss">
*,
*:before,
*:after {
  box-sizing: inherit;
}
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
</style>
