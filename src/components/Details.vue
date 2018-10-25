<template>
  <div>
    <Header :toubu="toubu"></Header>
    <div id="Content">
      <h2>{{list.title}}</h2>
      <div v-html="list.content"></div>
    </div>
  </div>
</template>

<script>
  import Header from "./Header";
  export default {
    name: "Details",
    components: {
      Header
    },
    data(){
      return{
        toubu:"详情",
        list:[],
      }
    },
    mounted(){
      // console.log(this.$route.params)
      //  获取git传值
      //   console.log(this.$route.query);
      var aid=this.$route.params.aid;
      //调用this方法
      this.requestData(aid);
      console.log(aid)
    },
    methods:{
      requestData(aid){
        var api='http://www.phonegap100.com/appapi.php?a=getPortalArticle&aid='+aid;
        this.$http.get(api).then((res)=>{
          // console.log(res);
          this.list=res.body.result[0];
        }).catch(err=>{
          console.log(err)
        })
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #Content
    margin-top 20%
    width 100%
    text-align center
    padding 0% 3%
  #Content img
    width 90%

</style>
