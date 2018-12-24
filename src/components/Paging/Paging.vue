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
      <!--<v-app id="inspire">-->
        <!--<div class="text-xs-center">-->
          <!--<v-pagination-->
            <!--v-model="pages"-->
            <!--:length="13"-->
            <!--:oncuechange="paging(this.pages)"-->
          <!--&gt;</v-pagination>-->
        <!--</div>-->
      <!--</v-app>-->

    </div>
</template>
<script>
    import Axios from "axios";
    export default {
        name: "paging",
         data(){
            return{
              pages:1,
              list:[],
            }
         },
         methods:{
            paging (pages){
              console.log(pages);
              let _this = this;
              let api="http://192.168.3.79:9999/api/news?current="+pages;
              Axios.get(api).then((res)=>{
                if(res.status===200){
                  console.log(res);
                  _this.list=res.data.records;
                  // _this.pages=res.data.pages;
                }else {
                  // 就返回错误信息
                  _this.text=res.data.message;
                  _this.$refs.DialogClick.logClick();
                }
              },(err)=>{
                console.log(err)
              })
            },
            setPage(index){
              this.paging(index);
              console.info(index+"111");
            },
            //点击改变page
         },
         mounted(){
            this.setPage(1);
         }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .primary
    background-color #1867c0 !important
    border-color #1867c0 !important
</style>
