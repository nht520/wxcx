<template>
  <div id="Header">
    <v-card flat>
      <div class="Headerone">
        <v-toolbar>
          <v-btn icon>
            <v-icon  @click="back">chevron_left</v-icon>
          </v-btn>
          <v-toolbar-title class="titleText">{{headtext}}</v-toolbar-title>
        </v-toolbar>
      </div>
    </v-card>
  </div>
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
  .Headerone
    width 100%
    background #fff
    overflow hidden
    position fixed
    top 0
    & .v-btn__content
      color #ffffff
  .theme--light.v-toolbar
    background #5c57e3
    text-align center
    color #ffffff
  .titleText
    margin-left 95px!important
</style>
