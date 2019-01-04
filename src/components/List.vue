<template>
    <div id="List">
      <Banner :banner="Listbanner"></Banner>
      <!--九宫格-->
      <Grid></Grid>
      <!--支付-->
      <!--<v-btn fab dark small color="pink">-->
        <!--<v-icon dark>favorite</v-icon>-->
      <!--</v-btn>-->
      <!--视频-->
      <div class="video" v-on:click="playVideo()" >
        <video :src="videoSrc" id="videoPlay" controls="controls" autoplay="autoplay">您的浏览器不支持 video 视屏播放。</video>
      </div>
    </div>
</template>

<script>
    import Banner from "./Banner/Banner";
    import Grid from "./Gird/Gird";
    export default {
        name: "List",
        components: {
          Grid,
          Banner
        },
        data(){
          return{
            videoSrc: 'https://www.html5tricks.com/demo/html5-canvas-video/BigBuckBunny_640x360.mp4',
            Listbanner: [
              {
                src: require('../assets/images/zsm.jpg'),
              },
              {
                src: require('../assets/images/201607121004101585411670.jpg'),
              },
              {
                src: require('../assets/images/201607181113551042845401.jpg'),
              },
              {
                src: require('../assets/images/201607181113561275962470.jpg'),
              }
            ]
          }
        },
        methods:{
          playVideo(){
            var vdo = document.getElementById("videoPlay");
            vdo.play();
          }
        },
        mounted(){

        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #videoPlay
   width 100%
   margin-bottom 20%
  .video
   width 92%
   margin 0 auto
</style>
