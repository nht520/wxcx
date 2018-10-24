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
                <v-btn icon @click="logout()">
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
              <datetime ref="dateone"></datetime>
            </v-flex>
            <v-flex xs1>
              <v-card-text class="px-0">至</v-card-text>
            </v-flex>
            <v-flex xs4>
              <datetime ref="datetwo"></datetime>
            </v-flex>
            <v-flex xs3>
              <button @click="inquire()">查询</button>
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
              <v-card-text><span> {{item.aid}}</span>盒</v-card-text>
            </v-flex>
            <v-flex xs7>
              <v-card-text>实收：<span class="official">{{item.aid}}</span></v-card-text>
            </v-flex>
            <v-flex xs5>
              <v-card-text>应收：<span>{{item.catid}}</span></v-card-text>
            </v-flex>
            <v-flex xs12>
              <v-card-text>毛利：<span>{{item.dateline}}</span></v-card-text>
            </v-flex>
          </v-layout>
        </v-layout>
      </div>
    </div>
</template>
<script>
  import Axios from 'axios'
  import storge from '../storage/storage'
  import Datetime from "./Datetime";
  export default {
        name: "Home",
        components: {
          Datetime
        },
        data () {
          return {
            HomeLise:[],
            dateone:'',
            datetwo:''
          }
        },
        methods:{
          //点击清空rsessionStorage里面的user,退出登录
          logout(){
            storge.remove("user");
            this.$router.push({path:'/'});
          },
          //如果在首页user为空  那么就跳转到登录页，反之留在Home页
          home(){
            var user = storge.get("user");
            if(user==null){
              this.$router.push({path:'/'})
            }else{
              this.$router.push({path:'Home'})
            }
          },
          //查询方法
          inquire(){
            let _this = this;
            //_this.$refs.date.value1获取子组件传过来的时间值，把值传给后台
            const _date = new URLSearchParams();
                  _date.dateone=_this.$refs.dateone.value1;
                  _date.datetwo=_this.$refs.datetwo.value1;
                  console.log(_date.date)
                  // console.log(_date.date1)
            let api="http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1";
            Axios.post(api,_date)
              .then((res)=>{
                console.log(res);
                _this.HomeLise=res.data.result;
              },(err)=>{
                console.log(err)
              })

          }
        },
        mounted(){
          this.home();
          //进入页面默认显示当天的记录
          this.inquire();
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
