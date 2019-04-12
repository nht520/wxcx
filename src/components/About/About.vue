<template>
    <div id="About">
      <!--时间筛选&ndash;&gt;-->
      <v-layout row wrap>
        <!--时间筛选-->
        <div class="HomeScreen">
          <v-layout row wrap>
            <v-flex xs4>
              <Datetime ref="dateone"></Datetime>
            </v-flex>
            <v-flex xs3>
              <button @click="about()">查询</button>
            </v-flex>
          </v-layout>
        </div>
      </v-layout>
      <!---->
      <v-layout class="about" v-for="item in list" :key="item.hashId">
            <v-flex xs12 sm6 offset-sm3>
              <v-card>
<!--                <v-img-->
<!--                  :src="item.thumbnail_pic_s"-->
<!--                  aspect-ratio="2.75"-->
<!--                ></v-img>-->
                <v-card-title primary-title>
                  <div class="content">
                    <h3 class="headline mb-0">{{item.hashId}}</h3>
                    <div> {{ item.content }} </div>
                  </div>
                </v-card-title>
                <v-card-actions>
                  <v-btn flat color="orange">{{item.unixtime}}</v-btn>
                  <v-btn flat color="orange">{{item.updatetime}}</v-btn>
                </v-card-actions>
              </v-card>
            </v-flex>
      </v-layout>

    </div>
</template>
<script>
    import url from "../../assets/images/20160831103906615621368.jpg";
    import Axios from "axios";
    import Datetime from "../Datetime";
    export default {
        name: "About",
      components: {
        Datetime
      },
      data(){
          return{
            title:"11111",
            imgUrl:url,
            key:"e44efe2abe461205d5ba84c83cc649a7",
            sort:"desc",
            list:[],
          }
        },
        methods:{
          about(){
            var api = "/jock";
            var strtime = this.$refs.dateone.value1;
            this.str = Date.parse(strtime)/1000; // 方法1
            console.log(this.str);
            // this.dateTime = str.substring(0,str.length-3);
            // console.log(this.dateTime);
            // console.log(this.$refs.dateone.value1);
            const _date = new URLSearchParams();
                    _date.append("key",this.key);
                    _date.append("time",this.str);
                    _date.append("sort",this.sort);
              Axios.post(api,_date).then((res)=>{
                    console.log(res);
                    this.list=res.data.result.data;
              },(err)=>{
                   console.log(err);
              })
            }
        },
        mounted(){
            this.about();
        },
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #About
    padding 10px
    & .about
      margin-bottom 5%
      & li
        width 100%
      & .content
        overflow: hidden;
</style>
