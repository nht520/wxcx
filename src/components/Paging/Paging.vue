<template>
    <div id="Paging">
      <!--列表-->
        <v-layout v-for="(item,id) in list" :key="item.id">
          <v-flex  xs12 sm6 offset-sm3>
            <v-card>
              <v-img
                src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
                aspect-ratio="2.75"
              ></v-img>
              <v-card-title primary-title>
                <div>
                  <h3 class="headline mb-0">{{item.newsTitle}}</h3>
                  <div>{{item.newsCreateTime}}</div>
                </div>
              </v-card-title>
            </v-card>
          </v-flex>
        </v-layout>
      <!--分业-->
      <v-app id="inspire" v-show="show">
        <div class="text-xs-center">
          <v-pagination
            v-model="page"
            :length="pages"
            @input="vtify"
            circle
          ></v-pagination>
        </div>
      </v-app>
      <!--<el-pagination-->
        <!--layout="prev, pager, next"-->
        <!--:total="38"-->
        <!--:page-count="13"-->
        <!--@current-change="current_change"-->
      <!--&gt;-->
      <!--</el-pagination>-->
    </div>
</template>
<script>
    import Axios from "axios";
    export default {
        name: "paging",
         data(){
            return{
              show:true,
              page:1,
              pages:1,
              list:[],
            }
         },
         methods:{
            paging (page){
              let _this = this;
              let api="http://192.168.3.79:9999/api/news?current="+page;
              Axios.get(api).then((res)=>{
                if(res.status===200){
                  console.log(res);
                  _this.list=res.data.records;
                  _this.pages=res.data.pages;
                  if (_this.list.length<1){
                    _this.show=false;
                    console.log(_this.list.length+"9")
                  }else {
                    _this.show=true
                  }
                }else {
                  // 就返回错误信息
                  _this.text=res.data.message;
                  _this.$refs.DialogClick.logClick();
                };
              },(err)=>{
                console.log(err)
              })
            },
            //点击获取当前page
            //  current_change(currentPage){
            //    this.paging(currentPage);
            //  }
           vtify(value){
              this.paging(value);
              console.log(value);
           }
         },
         mounted(){
            this.vtify(1);
            // this.current_change(1);
         }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #Paging
    margin-bottom 65px
  .primary
    background-color #1867c0 !important
    border-color #1867c0 !important
  #inspire
    background #ffffff
  .application--wrap
    min-height 45px
</style>
