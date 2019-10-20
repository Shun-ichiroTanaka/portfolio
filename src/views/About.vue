<template>
<div id="app">
  <vs-row vs-w="12" class="section1" id="about-title">
    <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-lg="6" vs-sm="6" vs-xs="12">
      <h1>About
        <vue-typer :text='[
                  " Me",
                  " Profile",
                  " Skills",
                  " Dream",
                ]' :repeat='Infinity' :shuffle='false' initial-action='typing' :pre-type-delay='100' :type-delay='100' :pre-erase-delay='1500' :erase-delay='20' erase-style='backspace' :erase-on-complete='true' caret-animation='smooth'></vue-typer>
      </h1>
    </vs-col>
    <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-lg="6" vs-sm="6" vs-xs="12">
      <img src="/about/about-top.svg" alt="">
    </vs-col>
  </vs-row>
  <vs-row vs-w="12" class="section1">
    <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-lg="12" vs-sm="12" vs-xs="12">
      <div class="tabs">
        <input id="all" type="radio" name="tab_item" checked>
        <label class="tab_item" for="all">Profile</label>
        <input id="programming" type="radio" name="tab_item">
        <label class="tab_item" for="programming">Skills</label>
        <input id="design" type="radio" name="tab_item">
        <label class="tab_item" for="design">I want to do</label>

        <div class="tab_content" id="Profile">
          <vs-row vs-w="12">
            <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-lg="5" vs-sm="5" vs-xs="12">
              <img src="/about/profile.jpg" class="profile-img">
            </vs-col>
            <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-lg="7" vs-sm="7" vs-xs="12">
              <div>
                <h2>TANA</h2>
                <p>Birth : 1996/8/9</p>
                <p>香川生まれ東京育ち</p><br>

                <h3>Favorite</h3>
                <p>スポーツ、特に野球とサッカー好きです。</p>
                <p>大学まで硬式野球をしていました。</p>
                <p>Web制作会社でコーダーとしてインターンをしていました。</p>
              </div>
            </vs-col>
          </vs-row>
        </div>
        <div class="tab_content" id="programming_content">
          プログラミングの内容がここに入ります
        </div>
        <div class="tab_content" id="design_content">
          デザインの内容がここに入ります
        </div>

      </div>
    </vs-col>
  </vs-row>

</div>
</template>

<script>
import jQuery from 'jquery'
window.$ = window.jQuery = require('jquery')

export default {
  mounted: function () {
    $(document).ready(function () {});

  }

}
</script>

<style lang="scss">
h1 {
  font-size: 3em;
}

#app {
  position: relative;
  z-index: 0;
  max-width: 95vw;
  margin: 0 auto;
}
#about-title {
  margin-top: 50px;
  margin-bottom: 100px;
}

.profile-img {
  border-radius: 50%;
}

/*タブ切り替え全体のスタイル*/
.tabs {
  width: 100%;
  min-height: 600px;
  padding-bottom: 40px;
  margin: 0 auto 100px auto;
  margin-top: 50px;
  background-color: #fff;
  // box-shadow: 0 0 10px rgba(0, 0, 0, .2);
}

/*タブのスタイル*/
.tab_item {
  float: left;
  display: block;
  width: calc(100%/3);
  height: 50px;
  color: #2c3e50;
  font-size: 16px;
  font-weight: bold;
  line-height: 50px;
  text-align: center;
  text-align: center;
  border-bottom: 3px solid #7fdbd0;
  transition: all .2s ease;
  cursor: pointer;
}

.tab_item:hover {
  background-color: #d9d9d9;
  transition: all .7s ease;
  opacity: .75;
}

/*ラジオボタンを全て消す*/
input[name="tab_item"] {
  display: none;
}

/*タブ切り替えの中身のスタイル*/
.tab_content {
  clear: both;
  display: none;
  overflow: hidden;
  padding: 40px 40px 0;
}

/*選択されているタブのコンテンツのみを表示*/
#all:checked ~ #Profile,
#programming:checked ~ #programming_content,
#design:checked ~ #design_content {
  display: block;
}

/*選択されているタブのスタイルを変える*/
.tabs input:checked + .tab_item {
  color: #fff;
  background: #7fdbd0;
}

@media screen and (min-width: 1080px) {
  .tabs {
    width: 70vw;
  }
  h1 {
    font-size: 5em;
  }
}

@media screen and (min-width: 768px) {
}
</style>
