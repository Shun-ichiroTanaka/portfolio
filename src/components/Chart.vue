<template>
<div id="app">
  <div class="box">
    <dl>
      <dt>
        Front-end
      </dt>
      <dd class="percentage percentage-75"><span class="text">HTML</span></dd>
      <dd class="percentage percentage-70"><span class="text">CSS</span></dd>
      <dd class="percentage percentage-65"><span class="text">Sass</span></dd>
      <dd class="percentage percentage-50"><span class="text">JavaScript</span></dd>
      <dd class="percentage percentage-50"><span class="text">Vue.js</span></dd>
      <dd class="percentage percentage-20"><span class="text">React</span></dd>
    </dl>
  </div>
  <div class="box">
    <dl>
      <dt>
        Back-end
      </dt>
      <dd class="percentage percentage-45"><span class="text">PHP</span></dd>
      <dd class="percentage percentage-45"><span class="text">Laravel</span></dd>
      <dd class="percentage percentage-45"><span class="text">Vue.js</span></dd>
      <dd class="percentage percentage-20"><span class="text">React</span></dd>
    </dl>
  </div>
    <div class="box">
    <dl>
      <dt>
        Adobe
      </dt>
      <dd class="percentage percentage-70"><span class="text">Photoshop</span></dd>
      <dd class="percentage percentage-60"><span class="text">Illustrator</span></dd>
      <dd class="percentage percentage-70"><span class="text">XD</span></dd>
      <dd class="percentage percentage-70"><span class="text">Aftereffect</span></dd>
      <dd class="percentage percentage-80"><span class="text">Premiere</span></dd>
      <dd class="percentage percentage-50"><span class="text">Audition</span></dd>
    </dl>
  </div>
  <div class="box">
    <dl>
      <dt>
        BaaS/MBaaS/PaaS
      </dt>
      <dd class="percentage percentage-50"><span class="text">Firebase</span></dd>
      <dd class="percentage percentage-50"><span class="text">Heroku</span></dd>
      <dd class="percentage percentage-20"><span class="text">GAE</span></dd>
      <dd class="percentage percentage-20"><span class="text">AWS</span></dd>
    </dl>
    </dl>
  </div>
</div>
</template>

<script>
export default {
  name: 'chart',

  mounted() {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss">

dl {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 700px;
  padding: 20px;
  font-family: "Open Sans", sans-serif !important;
  background-color: white;
}

dt {
  display: block;
  align-self: flex-start;
  width: 100%;
  margin-bottom: 20px;
  margin-left: 0;
  font-size: 1.2em;
  font-weight: 700;
  font-weight: 700;
  text-align: center;
}

.text {
  position: absolute;
  left: 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 130px;
  height: 40px;
  font-weight: 600;
  background-color: white;
}

.percentage {
  width: 100%;
  height: 40px;
  margin-left: 70px;
  font-size: .8em;
  line-height: 1;
  text-transform: uppercase;
  background: repeating-linear-gradient(to right,
  #ddd,
  #ddd 1px,
  #fff 1px,
  #fff);

  &:after {
    content: "";
    position: relative;
    top: 50%;
    display: block;
    width: 50px;
    height: 90%;
    margin-bottom: 10px;
    background-color: #295ba5;
    transform: translateY(-50%);
    transition: background-color .3s ease;
    cursor: pointer;
  }

  &:hover,
  &:focus {
    &:after {
      background-color: rgb(75, 196, 170);
    }
  }
}

@for $i from 1 through 100 {
  .percentage-#{$i} {
    &:after {
      $value: ($i * 1%);
      width: $value;
    }
  }
}

html,
body {
  height: 500px;
  color: #333;
  font-family: "fira-sans-2", sans-serif;
}

@media screen and (min-width: 1080px) {
  dt {
    margin-left: 130px;
  }

  .text {
    justify-content: flex-end;
  }

  .percentage {
    margin-left: 130px;
    background: repeating-linear-gradient(to right,
    #ddd,
    #ddd 1px,
    #fff 1px,
    #fff 5%);
  }
}

@media screen and (min-width: 768px) {
}
</style>
