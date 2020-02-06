<template lang="html">
<div id="myworks">
  <Nav></Nav>
  <sns></sns>
  <Gallery></Gallery>
</div>
</template>

<script>
import Nav from '@/components/Nav.vue';
import Gallery from '@/components/gallery.vue';
import sns from '@/components/sns.vue';

export default {
  name: 'myworks',
  components: {
    Nav,
    Gallery,
    sns
  }
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
</style>
