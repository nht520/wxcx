<template>
  <div class="Activate">
    <!--引用头部组件-->
    <Header class="Header"  :headtext="title"></Header>
    <!--from input-->
    <div class="ActivateFrom">
        <v-text-field
          type="text"
          label="请输入你的账号"
          name="username"
          v-model="username"
        ></v-text-field>
        <v-text-field
          type="text"
          label="请输入你的手机号码"
          name="iphone"
          v-model="iphone"
        ></v-text-field>

        <v-layout row wrap>
          <v-flex xs8>
            <v-card-text class="px-0">
              <v-text-field
                type="text"
                label="请输入你的验证码"
                name="activ"
                v-model="activ"
              ></v-text-field>
            </v-card-text>
          </v-flex>
          <v-flex xs4>
            <v-card-text class="px-0">
              <button class="verification" v-show="show" @click="acquire()" v-text="huoqu"></button>
              <button class="verification" v-show="!show"  v-text="time"></button>
            </v-card-text>
          </v-flex>
        </v-layout>
        <v-text-field
          type="password"
          label="请设置你的新密码"
          name="password"
          v-model="password"
        ></v-text-field>
        <v-text-field
          type="password"
          label="请确认你的新密码"
          name="affirm"
          v-model="affirm"
        ></v-text-field>
        <button @click="activate()">确认</button>
    </div>
    <!--弹出层-->
    <Dialog ref="DialogClick">
      <span v-text="text"></span>
    </Dialog>
  </div>
</template>
<script>
  import Header from "./Header";
  import Dialog from "./Dialog";
  export default {
    name: "Find",
    components: {
      Dialog,
      Header
    },
    data(){
      return{
        title:'找回密码',
        huoqu:"免费获取",
        username:'',
        iphone:'',
        activ:'',
        password:'',
        affirm:"",
        text:'',
        show:true,
        time:"",
      }
    },
    created() {
      //判断是否按下了回车
      var _this = this;
      document.onkeydown = function(e) {
        var key = window.event.keyCode;
        if (key == 13) {
          _this.activate()
        }
      }
    },
    methods:{
      acquire(){
        let _this = this;
        if (_this.iphone === ""){
          _this.text="请输入手机号"
          //调用子组件的logClick方法
          _this.$refs.DialogClick.logClick()
        }else if(_this.iphone.length < 11){
          _this.text="手机号码错误"
          _this.$refs.DialogClick.logClick()
        } else if(_this.iphone.length === 11){
          this.show=false;
          this.time=6;
          var auth_time = setInterval(()=>{
            this.time--;
            if(this.time<=0){
              this.show=true;
              //清除定时器
              this.huoqu="重新获取";
              clearInterval(auth_time);
            }
          },1000);
        }
      },
      activate(){
        let _this = this;
        if (_this.username ===""){
            _this.text="请输入账号"
            //调用子组件的logClick方法
            _this.$refs.DialogClick.logClick()
        } else if (_this.iphone ==="") {
            _this.text="请输入手机号"
            _this.$refs.DialogClick.logClick()
        }else if(_this.iphone.length < 11) {
          _this.text = "手机号码错误"
          _this.$refs.DialogClick.logClick()
        }else if (_this.activ ===""){
            _this.text="请输入验证码"
            _this.$refs.DialogClick.logClick()
        } else if (_this.password ===""){
            _this.text="请输入密码"
            _this.$refs.DialogClick.logClick()
        }else if(/^[\d\D]{6,12}$/.test(_this.password) === false){
          _this.text="密码在6-12位英文数字之间"
          _this.$refs.DialogClick.logClick()
        }else if(_this.affirm === "" ) {
          _this.text = "请在次输入密码"
          _this.$refs.DialogClick.logClick()
        }else if(_this.affirm !== _this.password ){
          _this.text="两次密码输入不一至"
          _this.$refs.DialogClick.logClick()
        } else if(_this.affirm === _this.password ){
          _this.text="修改成功"
          _this.$refs.DialogClick.logClick()
        }
      }
    },
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .ActivateFrom
    width 80%
    margin 0 auto
    padding-top 67px
    & button
      margin-top 10%
      width 100%
      background-color  #5651ce
      color #ffffff
      padding 5% 0px
      border-radius 3px
      font-size 16px
  .el-message
    margin-top 80%
  .ActivateFrom
    /*margin-top 45px*/
  .ActivateFrom .verification
    border 1px solid #5651ce
    background #ffffff
    color #5651ce
    line-height 25px
</style>
