<template>
    <div id="List">
      <Banner :banner="Listbanner"></Banner>
      <!--九宫格-->
      <Grid></Grid>
      <button @click="deom()">111111111</button>
      <!--      支付-->
<!--      <v-btn fab dark small color="pink">-->
<!--        <v-icon dark>favorite</v-icon>-->
<!--      </v-btn>-->
<!--      视频-->
      <div class="video" @click="playVideo()" >
        <video :src="videoSrc" id="videoPlay" controls="controls" autoplay="autoplay">您的浏览器不支持 video 视屏播放。</video>
      </div>

    </div>
</template>

<script>
    import Banner from "./Banner/Banner";
    import Grid from "./Gird/Gird";
    import Axios from "axios";
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
            ],
            iphone:"15803614645",
            id:"149506",
            value:"#code#=1235231",
            key:"97cc73ebfe6fdd64651e404ddd1eaece",
          }
        },
        methods:{
          playVideo(){
            var vdo = document.getElementById("videoPlay");
            vdo.play();
          },
          deom(){
            var api = "/api";
            const _data = new URLSearchParams();
                  _data.append("mobile",this.iphone);
                  _data.append("tpl_id",this.id);
                  _data.append("tpl_value",this.value);
                  _data.append("key",this.key);

            Axios.post(api,_data).then((res)=>{
              console.log(res);
            },(err)=>{
              console.log(err)
            })
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
