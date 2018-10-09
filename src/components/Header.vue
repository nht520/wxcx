<template>
  <div id="Header">
    <v-card flat>
      <div class="Headerone">
        <v-toolbar>
          <v-btn icon>
            <v-icon  @click="back">chevron_left</v-icon>
          </v-btn>
          <v-toolbar-title class="titleText">{{text}}</v-toolbar-title>
          <v-spacer></v-spacer>
          <!--<v-btn icon>-->
            <!--<v-icon >more_vert</v-icon>-->
          <!--</v-btn>-->
        </v-toolbar>
      </div>
      <!--弹出层-->
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
      }
    },
    props: ['text'], // 直接简写方式，不指定类型
    methods:{
      back(){
        this.$router.go(-1);//返回上一层
      },
    },
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .Headerone
    position fixed
    width 100%
    z-index 999
    background #fff
    overflow hidden
    & .v-btn__content
      color #ffffff
  .theme--light.v-toolbar
    background #5c57e3
    text-align center
    color #ffffff
  .titleText
    margin-left 95px!important
</style>
