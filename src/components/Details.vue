<template>
  <div>
    <Header :headtext="list.title"></Header>
    <div id="Content">
      <h2>{{list.title}}</h2>
      <div v-html="list.content"></div>
    </div>
    <!--记载动画-->
    <Lodding ref="lodClick">
      <span v-text="lodingtext"></span>
    </Lodding>
  </div>
</template>

<script>
  import Header from "./Header";
  import Lodding from "./Lodding";
  export default {
    name: "Details",
    components: {
      Lodding,
      Header
    },
    data(){
      return{
        title:"",
        lodingtext:"",
        list:[],
      }
    },
    mounted(){
      // console.log(this.$route.params)
      //  获取git传值
      //   console.log(this.$route.query);
      var aid=this.$route.params.aid;
      //调用requestData方法
      this.requestData(aid);
      // console.log(aid)
    },
    methods:{
      requestData(aid){
        let _this = this;
        _this.$refs.lodClick.logClick();
        _this.lodingtext="数据加载中...";
        var api=window.g.ParentPage.DeteailsApi+aid;
        this.$http.get(api).then((res)=>{
          console.log(res);
          _this.$refs.lodClick.lodClick();
          this.list=res.body.result[0];
        }).catch(err=>{
          console.log(err)
        })
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  body
    background #ffffff
  #Content
    width 100%
    text-align center
    padding 20% 3% 0% 3%
  #Content img
    width 90%

</style>
