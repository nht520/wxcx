<template>
    <div id="Home" >
      <!--头部-->
      <div class="HomeHeader">
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-toolbar>
                <!--<v-toolbar-side-icon></v-toolbar-side-icon>-->
                <v-icon>fab fa-amazon</v-icon>
                <v-toolbar-title>{{realName}}</v-toolbar-title>
                <v-toolbar-title>{{deptName}}</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-btn icon @click="logout()">
                  退出
                </v-btn>
              </v-toolbar>
            </v-flex>
          </v-layout>
        </div>
      <v-layout row wrap>
        <!--时间筛选-->
        <div class="HomeScreen">
          <v-layout row wrap>
            <v-flex xs4>
              <Datetime ref="dateone"></Datetime>
            </v-flex>
            <v-flex xs1>
              <v-card-text class="px-0" ref="222">至</v-card-text>
            </v-flex>
            <v-flex xs4>
              <Datetime ref="datetwo"></Datetime>
            </v-flex>
            <v-flex xs3>
              <button @click="inquire()">查询</button>
            </v-flex>
          </v-layout>
        </div>
      </v-layout>
      <!--数据列表-->
        <v-layout row wrap>
          <v-flex xs12>
            <div class="hlist">
              <mt-loadmore :top-method="loadTop"   ref="loadmore" >
                <ul
                  ref="loadmore"
                  :top-method="loadTop"
                  v-infinite-scroll="loadMore"
                  infinite-scroll-disabled="loading"
                  infinite-scroll-distance="10"
                >
                  <li>
                    <v-layout class="HomeList"  v-for="(item,aid) in list" :key="item.aid"  >
                      <router-link :to="'/Details/'+item.aid" tag="li">
                        <v-layout  row wrap >
                          <v-flex xs9 >
                            <v-card-text><span>{{item.title}}</span></v-card-text>
                          </v-flex>
                          <v-flex xs3>
                            <v-card-text><span> {{item.catid}}</span>盒</v-card-text>
                          </v-flex>
                          <v-flex xs7>
                            <v-card-text>实收：<span class="official">{{item.dateline}}</span></v-card-text>
                          </v-flex>
                          <v-flex xs5>
                            <v-card-text>应收：<span>{{item.catid}}</span></v-card-text>
                          </v-flex>
                          <v-flex xs12>
                            <v-card-text>毛利：<span>{{item.aid}}</span></v-card-text>
                          </v-flex>
                        </v-layout>
                      </router-link>
                    </v-layout>
                  </li>
                </ul>
              </mt-loadmore>
            </div>
          </v-flex>
        </v-layout>
      <!--数据加载中-->
      <Lodding ref="lodClick">
        <span v-text="lodingtext"></span>
      </Lodding>
      <!--提示-->
      <transition name="fade">
        <Dialog  ref="DialogClick">
          <span v-text="retext"></span>
        </Dialog>
      </transition>
    </div>
</template>
<script>
  import Axios from 'axios';
  import storge from '../storage/storage';
  import Datetime from "./Datetime";
  import Lodding from "./Lodding";
  import Dialog from "./Dialog";
  export default {
        name: "Home",
        components: {
          Dialog,
          Lodding,
          Datetime
        },
        data () {
          return {
            request:false,
            lodingtext:'',
            retext:"",
            deptName:"",
            realName:"",
            active:'',
            list:[],
            page: 1,
            dateone:'',
            curHeight:0,
            datetwo:''
          }
        },
        methods:{
          //触发 store
          loadTop () { //组件提供的下拉触发方法
            //下拉刷新
            this.inquire();
            //反转数据：
            // this.list.reverse();
            this.$refs.loadmore.onTopLoaded();// 固定方法，查询完要调用一次，用于重新定位
          },
          loadMore() {
            this.inquire();
          },
          //点击清空rsessionStorage里面的user,退出登录
          logout(){
            storge.remove("user");
            this.$router.push({path:'/'});
          },
          //查询方法
          inquire(){
            //获取屏幕高度
            let _this = this;
            this.request = true; //请求数据的开关
            //_this.$refs.date.value1获取子组件传过来的时间值，把值传给后台
            const _date = new URLSearchParams();
                  _date.append("startTime",_this.$refs.dateone.value1);
                  _date.append("endTime",_this.$refs.datetwo.value1);
                  _this.$refs.lodClick.logClick();
                  _this.lodingtext="数据加载中...";
            let api="http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page="+this.page;
            Axios.post(api,_date)
              .then((res)=>{
                console.log(res.data.result.length);
                _this.$refs.lodClick.lodClick();
                // //点击刷新的时候追加数据
                ++this.page;
                _this.list = this.list.concat(res.data.result);
                if(res.data.result.length<=0){
                  this.request = true; //true 请求终止
                  _this.$refs.DialogClick.logClick();
                  _this.retext="已经没有数据了哦！";
                }else{
                  this.request = false;//false 继续请求
                }
              },(err)=>{
                console.log(err)
              })

          },
          home(){
            //刷新的时候如果get user为空 为空  那么就跳转到登录页，反之留在Home页
            //获取storage存储的数据放在页面
            this.user = storge.get("user");
            this.realName=this.user.realName;
            this.deptName=this.user.deptName;
            if(this.user==null){
                this.$router.push({path:'/'})
              }else{
                this.$router.push({path:'Home'})
              }
            },
        },
        mounted(){
          //从vuex store里获取数据
          // this.list=this.$store.state.list;
          // console.log(this.spList)
          this.home();
          //进入页面默认显示当天的记录
          // this.inquire();
        }
    }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  #Home
    background #f1f1f1
  .active
    border 1px solid #fd7522
    color #fff
  .header
      position fixed
      width 100%
      top 0
  .hlist
      margin-top 36%
  .hlist ul
      padding 0
  .list
      margin-top 36%
  .HomeHeader
     position fixed
     width 100%
     z-index 998
  .HomeHeader .theme--light.v-toolbar
      /*background #F00*/
      /*text-align center*/
      color #f00
  .theme--light.v-toolbar
      background #ffffff
      -webkit-box-shadow 0 2px 4px -1px rgba(0,0,0,0.05), 0 4px 5px 0 rgba(0, 0, 0, 0.02), 0 1px 10px 0 rgba(0, 0, 0, 0.1)
      box-shadow 0 2px 4px -1px rgba(0,0,0,0.08), 0 4px 5px 0 rgba(0, 0, 0, 0.08), 0 1px 10px 0 rgba(0,0,0,0)
  .HomeScreen
      padding 4% 15px
      background #ffffff
      text-align center
      line-height 41px
      position fixed
      width 100%
      z-index 888
      margin-top 56px
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
      margin-bottom 2%
      padding 4% 1%
      & .v-card__text
         padding 6px 10px
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
