<template>
    <div id="Login">
        <!--登录背景-->
        <div class="Loginbj">
          <img src="../assets/images/bj.png"/>
        </div>
        <!--输入-->
        <div class="LoginInput">
            <v-text-field
              type="text"
              label="请输入你的账号"
              v-model="username"
              name="username"
            ></v-text-field>
            <v-text-field
              type="password"
              label="请输入你的密码"
              v-model="password"
              name="password"
            ></v-text-field>
            <button @click="goLogin()">登陆</button>
            <!--<span ref="btcx">查询</span>-->
            <!--<button @click="chaxun()">查询</button>-->
            <div class="activate">
                <v-layout row wrap>
                  <v-flex xs5>
                      <v-card-text class="px-0">
                           <router-link tag="span" to="/Activate">账号激活？</router-link>
                      </v-card-text>
                  </v-flex>
                  <v-flex xs7>
                      <v-card-text class="px-0">
                        <router-link tag="span" to="/Find">忘记密码？</router-link>
                      </v-card-text>
                  </v-flex>
                  <v-flex xs12>
                    说明：
                    <br/>
                    首次使用门店销售数据查询系统的真善美连锁店员工
                    ，请先使用账号激活，通过身份验证后方可使用直接登陆。
                  </v-flex>
                </v-layout>
            </div>
        </div>
        <!--弹出层-->
      <transition name="fade">
        <Dialog  ref="DialogClick">
            <span v-text="text"></span>
        </Dialog>
      </transition>
      <!--加载动画-->
      <Lodding ref="lodClick">
        <span v-text="lodingtext"></span>
      </Lodding>
    </div>
</template>
<script>
  import Dialog from "./Dialog";
  import Axios from "axios";
  import storge from '../storage/storage'
  import Loading from "vux/src/components/loading/index";
  import Lodding from "./Lodding";
  export default {
    name:'Login',
    data(){
      return{
        username:'',
        password:'',
        text:'',
        lodingtext:''
      }
    },
    components: {
      Lodding,
      Loading,
      Dialog
    },
    methods: {
      // chaxun(){
      //用ref获取值
      //   this.log=this.$refs.btcx.innerHTML;
      //   console.log(this.log)
      // },
      goLogin(){
        let _this = this;
        if(_this.username ===''){
          _this.text="请输入用户名";
            //调用子组件的logClick方法
            _this.$refs.DialogClick.logClick()
        }else if(_this.password==null  || _this.password === ''){
            _this.text="请输入密码";
            _this.$refs.DialogClick.logClick()
        }else if(_this.password.length<6){
            _this.text="密码在6-12位英文数字之间";
            _this.$refs.DialogClick.logClick()
        }else{
          //把用户名  密码统一存在_param里面  把_param提交到后台
          const _param = new URLSearchParams();
                _param.append("empName",_this.username);
                _param.append("empPassword",_this.password);
          // 加载动画
          //   _this.$refs.lodClick.logClick();
          //   _this.lodingtext="数据加载中...";
          // var api ="http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1";
          var api ="http://md.9knx.com:9099/sale/login";
          Axios.post(api,_param).then((res)=>{
            console.log(res);
            if(res.status===200){
              const code = res.data.status;
              if( code === "1" ){
                //将数据存放在store
                _this.$store.commit('dtList',res.data.data);
                // this.$store.dispatch('toggleFollowPerson',{userId:this.user.userid})
                //将数据存在storage
                storge.set("user",res.data.data);
                _this.$router.push({path:'Bottom'})
              }else if( code === "0" ){
                _this.text=res.data.message;
                _this.$refs.DialogClick.logClick();
              }else if( code === "2"){
                _this.text=res.data.message;
                _this.$refs.DialogClick.logClick();
              }else{
                _this.text=res.data.message;
                _this.$refs.DialogClick.logClick();
              }
            }else{
              //如果登录失败 就返回错误信息
              _this.text=res.data.message;
              _this.$refs.DialogClick.logClick();
            }
          },(err)=>{
            console.log(err);
            _this.text=res.data.message;
            _this.$refs.DialogClick.logClick();
          });
        }
      },
      //判斷用户名是否为空 是就跳转到登录页 反之home页
      home(){
        var user = storge.get("user");
        if(user==null){
          this.$router.push({path:'/'})
        }else{
          this.$router.push({path:'Home'})
        }
      },
    },
    created() {
      //判断是否按下了回车
      var _this = this;
      document.onkeydown = function(e) {
        var key = window.event.keyCode;
        if (key === 13) {
          _this.goLogin()
        }
      }
    },
    mounted(){
      this.home();
    }
  }

</script>
<style lang="stylus" rel="stylesheet/stylus">
   .Loginbj img
      width 100%
      background-size 100%
   .LoginInput
      width 80%
      margin 0 auto
      margin-top 8%
      & button
        margin-top 10%
        width 100%
        background-color  #5651ce
        color #ffffff
        padding 5% 0px
        border-radius 3px
        font-size 16px
      & button:hover
        background #6c66ff
        transition  1s
   .activate
      color #3d3d3d
      & .xs7
        text-align right
      & .xs12
        text-align left
        line-height 20px
        color #797979
   .el-message
      margin-top 80%
   .fade-enter-active, .fade-leave-active
     transition opacity .8s
   .fade-enter, .fade-leave-to
     opacity 0

</style>
