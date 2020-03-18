<template>
<div id="app">
  <!-- <Nav></!-->
  <router-view />
</div>
</template>
<script src="https://cdn.jsdelivr.net/npm/vue"></script>
<script>
// // import Nav from '@/components/Nav.vue'

export default {
  components: {
    // Nav
  },
  data() {
    return {
      count: 4,
      icons: ["fa fa-github", "fa fa-comment", "fa fa-code", "fa fa-envelope"],
      list: [{
          'isLink': true,
          url: "/"
        },
        {
          'isLink': true,
          url: "/about"
        },
        {
          'isLink': true,
          url: "/works"
        }, {
          'isLink': true,
          url: "/contact"
        }
      ],
      // backgroundColor: '#17c4c5',
      color: '#ffffff',
      position: 'top-left',
      isOpenNewTab: false
    }
  },
  computed: {
    getCount() {
      return Number(this.count)
    },
    getIsOpenNewTab() {
      return Boolean(this.isOpenNewTab)
    }
  },
  methods: {
    print(key) {
      if (key === 3) {
        console.log('please send me an email')
      }
      if (key === 0) {
        window.open('https://github.com/AshleyLv/vue-quick-menu')

      }
    }
  },
  mounted: function () {
    $(document).ready(function () {

    });
  }

}
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Open+Sans&display=swap");
@import "https://fonts.googleapis.com/css?family=Roboto:400,500";
@import url('https://fonts.googleapis.com/css?family=Noto+Sans+JP&display=swap');


  *,
  *::after,
  *::before {
    box-sizing: inherit
  }

  * {
    font: inherit
  }

  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video,
  hr {
    margin: 0;
    padding: 0;
    border: 0
  }

  html {
    box-sizing: border-box
  }
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section,
  main,
  form legend {
    display: block
  }

  ol,
  ul {
    list-style: none
  }

  blockquote,
  q {
    quotes: none
  }

  button,
  input,
  textarea,
  select {
    margin: 0
  }

  .btn,
  .form-control,
  .link,
  .reset {
    background-color: transparent;
    padding: 0;
    border: 0;
    border-radius: 0;
    color: inherit;
    line-height: inherit;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none
  }

  select.form-control::-ms-expand {
    display: none
  }

  textarea {
    resize: vertical;
    overflow: auto;
    vertical-align: top
  }

  input::-ms-clear {
    display: none
  }

  table {
    border-collapse: collapse;
    border-spacing: 0
  }

  img,
  video,
  svg {
    max-width: 100%
  }
</style>
