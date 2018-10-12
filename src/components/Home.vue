<template>
    <div id="Home" >
      <!--头部-->
      <div class="header">
        <div class="HomeHeader">
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-toolbar>
                <!--<v-toolbar-side-icon></v-toolbar-side-icon>-->
                <v-icon>fab fa-amazon</v-icon>
                <v-toolbar-title>重庆市渝中区</v-toolbar-title>
                <v-toolbar-title>华神坨</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-btn icon>
                  退出
                </v-btn>
              </v-toolbar>
            </v-flex>
          </v-layout>
        </div>
        <!--时间筛选-->
        <div class="HomeScreen">
          <v-layout row wrap>
            <v-flex xs4>
              <datetime></datetime>
            </v-flex>
            <v-flex xs1>
              <v-card-text class="px-0">至</v-card-text>
            </v-flex>
            <v-flex xs4>
              <datetime></datetime>
            </v-flex>
            <v-flex xs3>
              <button>查询</button>
            </v-flex>
          </v-layout>
        </div>
      </div>
      <!--数据列表-->
      <div class="list">
        <v-layout class="HomeList" v-for="item in HomeLise" :key="item.id">
          <v-layout  row wrap >
            <v-flex xs9 >
              <v-card-text><span>{{item.title}}</span></v-card-text>
            </v-flex>
            <v-flex xs3>
              <v-card-text><span> {{item.quantity}}</span></v-card-text>
            </v-flex>
            <v-flex xs7>
              <v-card-text>实收：<span class="official">{{item.official}}</span></v-card-text>
            </v-flex>
            <v-flex xs5>
              <v-card-text>应收：<span>{{item.receivable}}</span></v-card-text>
            </v-flex>
            <v-flex xs12>
              <v-card-text>毛利：<span>{{item.gross}}</span></v-card-text>
            </v-flex>
          </v-layout>
        </v-layout>
      </div>
    </div>
</template>
<script>
  import Datetime from "./datetime";
  export default {
        name: "Home",
        components: {
          Datetime
        },
        data () {
          return {
            HomeLise:[
              {
                id:1,
                title:'(一品康) 宁尖牌芦荟软胶囊',
                quantity:'1.00 罐',
                official:'¥ 19.2134',
                receivable:'¥ 50.21',
                gross:'19.213',
              },
              {
                id:2,
                title:'(康美) 长生不老泉',
                quantity:'5.00 盒',
                official:'¥ 9.2134',
                receivable:'¥ 20.21',
                gross:'3.213',
              },
              {
                id:3,
                title:'(康美) 长生不老泉',
                quantity:'5.00 盒',
                official:'¥ 9.2134',
                receivable:'¥ 20.21',
                gross:'3.213',
              },
              {
                id:4,
                title:'(康美) 长生不老泉',
                quantity:'5.00 盒',
                official:'¥ 9.2134',
                receivable:'¥ 20.21',
                gross:'3.213',
              },
              {
                id:5,
                title:'(康美) 长生不老泉',
                quantity:'5.00 盒',
                official:'¥ 9.2134',
                receivable:'¥ 20.21',
                gross:'3.213',
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
  body
      background #f9fafb
  .header
      position fixed
      width 100%
      top 0
  .list
      margin-top 36%
  .HomeHeader .theme--light.v-toolbar
      background #5c57e3
      text-align center
      color #ffffff
  .HomeScreen
      padding 4% 15px
      background #ffffff
      text-align center
      line-height 41px
      & button
        border-radius 3px
        font-size 1rem
        overflow hidden
      & .xs3 button
          border 1px solid #f3930a
          color #f3930a
          border-radius 3px
          font-size 1rem
          overflow hidden
          height 41px
          width 80%
          float right
      & .v-card__text
          padding 0px
  .HomeList
      background #ffffff
      margin-top 2%
      padding 4% 15px
      & .v-card__text
         padding 3% 0%
      & .xs3
         text-align right
      & .xs9
         color #3d3d3d
         font-size 1.1rem
         font-weight bold
      & .xs5
         text-align right
  .HomeList .official
      color #f00

</style>
