<template>
    <div id="Banner">
      <v-carousel hide-controls>
        <v-carousel-item
          v-for="(item,i) in banner"
          :key="i"
          :src="item.src"
        ></v-carousel-item>
      </v-carousel>
    </div>
</template>
<script>
    export default {
        name: "Banner",
        props: {
          banner:{
              // type:String,
              // default:[],
            },
          },
        data(){
          return{
            Banner: [
              {
                src: require('../../assets/images/zsm.jpg'),
              },
              {
                src: require('../../assets/images/201607121004101585411670.jpg'),
              },
              {
                src: require('../../assets/images/201607181113551042845401.jpg'),
              },
              {
                src: require('../../assets/images/201607181113561275962470.jpg'),
              }
            ]
          }
        },
        methods:{

        },
        mounted(){

        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #Banner .v-carousel
   height 200px
   box-shadow none
   & .v-carousel__controls
     background none
     height 20px
   & .v-btn--icon.v-btn--small
     width 0px
   & .v-btn .v-btn__content .v-icon
     font-size 8px !important
  #v-carousel img
   height 200px
   background-size 100%
</style>
