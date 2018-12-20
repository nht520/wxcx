<template>
    <v-card flat>
      <div id="Header">
      <v-toolbar>
          <v-btn icon>
            <v-icon  @click="back">chevron_left</v-icon>
          </v-btn>
          <v-toolbar-title class="titleText">{{headtext}}</v-toolbar-title>
        </v-toolbar>
      </div>
    </v-card>
</template>
<script>
  export default {
    name: "Header",
    components: {
    },
    data (){
      return{
        // toubu:"我是头部",
      }
    },
    props: ['headtext'], // 直接简写方式，不指定类型
    methods:{
      back(){
        this.$router.go(-1);//返回上一层
      },
    },
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  #Header
   position fixed
   width 100%
   z-index 999
   background #fff
    & .v-btn__content
      color #ffffff
  .v-toolbar__content
   background #ffffff
  .theme--light.v-toolbar
    text-align center
    color #ffffff
  .titleText
    color #f00
</style>
