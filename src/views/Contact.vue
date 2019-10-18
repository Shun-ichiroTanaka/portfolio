<<<<<<< HEAD
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

  <main>
    <div id="player">
      <div class="video-cover-left">
        <div class="video1">
          <video controls crossorigin playsinline width="480" poster="works/work04.jpg" id="player">
            <!-- Video files -->
            <source src="https://portfolio-b4cc1.firebaseapp.com/works/work04.mp4" type="video/mp4" size="1080" />
          </video>
        </div>
      </div>

      <div class="video2">
        <video controls crossorigin playsinline width="480" poster="works/work04.jpg" id="player">
          <!-- Video files -->
          <source src="https://portfolio-b4cc1.firebaseapp.com/works/work04.mp4" type="video/mp4" size="1080" />
        </video>
      </div>
      <div class="video3">
        <video controls crossorigin playsinline width="480" poster="works/work04.jpg" id="player">
          <!-- Video files -->
          <source src="https://portfolio-b4cc1.firebaseapp.com/works/work04.mp4" type="video/mp4" size="1080" />
        </video>
      </div>
      <div class="video4">
        <video controls crossorigin playsinline width="480" poster="works/work04.jpg" id="player">
          <!-- Video files -->
          <source src="https://portfolio-b4cc1.firebaseapp.com/works/work04.mp4" type="video/mp4" size="1080" />
        </video>
      </div>
      <div class="video5">
        <video controls crossorigin playsinline width="480" poster="works/work04.jpg" id="player">
          <!-- Video files -->
          <source src="https://portfolio-b4cc1.firebaseapp.com/works/work04.mp4" type="video/mp4" size="1080" />
        </video>
      </div>
      <div class="video6">
        <video controls crossorigin playsinline width="480" poster="works/work04.jpg" id="player">
          <!-- Video files -->
          <source src="https://portfolio-b4cc1.firebaseapp.com/works/work04.mp4" type="video/mp4" size="1080" />
        </video>
      </div>
    </div>

    <ul>
      <li class="plyr__cite plyr__cite--video" hidden>
        <small>
          <svg class="icon">
            <title>HTML5</title>
            <path d="M14.738.326C14.548.118 14.28 0 14 0H2c-.28 0-.55.118-.738.326S.98.81 1.004 1.09l1 11c.03.317.208.603.48.767l5 3c.16.095.338.143.516.143s.356-.048.515-.143l5-3c.273-.164.452-.45.48-.767l1-11c.026-.28-.067-.557-.257-.764zM12 4H6v2h6v5.72l-4 1.334-4-1.333V9h2v1.28l2 .666 2-.667V8H4V2h8v2z"></path>
          </svg>
          <a href="https://itunes.apple.com/au/movie/view-from-a-blue-moon/id1041586323" target="_blank">View From A Blue Moon</a>
          &copy; Brainfarm
        </small>
      </li>
      <li class="plyr__cite plyr__cite--audio" hidden>
        <small>
          <svg class="icon" title="HTML5">
            <title>HTML5</title>
            <path d="M14.738.326C14.548.118 14.28 0 14 0H2c-.28 0-.55.118-.738.326S.98.81 1.004 1.09l1 11c.03.317.208.603.48.767l5 3c.16.095.338.143.516.143s.356-.048.515-.143l5-3c.273-.164.452-.45.48-.767l1-11c.026-.28-.067-.557-.257-.764zM12 4H6v2h6v5.72l-4 1.334-4-1.333V9h2v1.28l2 .666 2-.667V8H4V2h8v2z"></path>
          </svg>
          <a href="http://www.kishibashi.com/" target="_blank">Kishi Bashi &ndash; &ldquo;It All Began With A Burst&rdquo;</a>
          &copy; Kishi Bashi
        </small>
      </li>
      <li class="plyr__cite plyr__cite--youtube" hidden>
        <small>
          <a href="https://www.youtube.com/watch?v=bTqVqk7FSmY" target="_blank">View From A Blue Moon</a>
          on&nbsp;
          <span class="color--youtube">
            <svg class="icon" role="presentation">
              <title>YouTube</title>
              <path d="M15.8,4.8c-0.2-1.3-0.8-2.2-2.2-2.4C11.4,2,8,2,8,2S4.6,2,2.4,2.4C1,2.6,0.3,3.5,0.2,4.8C0,6.1,0,8,0,8
                      s0,1.9,0.2,3.2c0.2,1.3,0.8,2.2,2.2,2.4C4.6,14,8,14,8,14s3.4,0,5.6-0.4c1.4-0.3,2-1.1,2.2-2.4C16,9.9,16,8,16,8S16,6.1,15.8,4.8z
                      M6,11V5l5,3L6,11z"></path>
            </svg>YouTube
          </span>
        </small>
      </li>
      <li class="plyr__cite plyr__cite--vimeo" hidden>
        <small>
          <a href="https://vimeo.com/76979871" target="_blank">The New Vimeo Player</a> on&nbsp;
          <span class="color--vimeo">
            <svg class="icon" role="presentation">
              <title>Vimeo</title>
              <path d="M16,4.3c-0.1,1.6-1.2,3.7-3.3,6.4c-2.2,2.8-4,4.2-5.5,4.2c-0.9,0-1.7-0.9-2.4-2.6C4,9.9,3.4,5,2,5
                  C1.9,5,1.5,5.3,0.8,5.8L0,4.8c0.8-0.7,3.5-3.4,4.7-3.5C5.9,1.2,6.7,2,7,3.8c0.3,2,0.8,6.1,1.8,6.1c0.9,0,2.5-3.4,2.6-4
                  c0.1-0.9-0.3-1.9-2.3-1.1c0.8-2.6,2.3-3.8,4.5-3.8C15.3,1.1,16.1,2.2,16,4.3z"></path>
            </svg>Vimeo
          </span>
        </small>
      </li>
    </ul>
  </main>

  <vs-images :hover="hover" class="work-box">
    <vs-image :src="`https://picsum.photos/400/400?image=3${index}`" v-for="(image, index) in 9" />
    <vs-image :src="`https://picsum.photos/400/400?image=4${index}`" v-for="(image, index) in 7" />
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
.video-cover-left {
  left: 0;
  width: 600px;
  height: 500px;
  margin-top: 100px;
  background: rgb(187, 158, 158);
}
=======
<template>
  <div id="app" >
    <ContactForm></ContactForm>
  </div>
</template>

<script>
import ContactForm from '@/components/ContactForm.vue'
export default {
  name: 'home',
  components: {
    ContactForm
  }
}
</script>


<style lang="scss">

>>>>>>> 9e02917da449fce6f36ae7740075fdfd6a2a48a2
</style>
