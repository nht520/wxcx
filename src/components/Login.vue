<template>
    <div id="Login">
        <!--登录背景-->
        <div class="Loginbj">
          <img src="../assets/images/bj.png"/>
        </div>
        <!--输入-->
        <div class="LoginInput">
          <form>
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
            <div class="activate">
                <v-layout row wrap>
                  <v-flex xs5>
                      <v-card-text class="px-0">
                           <router-link tag="span" to="/Activate">账号激活？</router-link>
                      </v-card-text>
                  </v-flex>
                  <v-flex xs7>
                      <v-card-text class="px-0">
                        <router-link tag="span" to="/register">忘记密码？</router-link>
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
          </form>
        </div>
        <!--弹出层-->
        <Dialog  ref="DialogClick">
            <span v-text="text"></span>
        </Dialog>
    </div>
</template>
<script>
  import Dialog from "./Dialog";
  export default {
    name:'Login',
    data(){
      return{
        username:'',
        password:'',
        userInfo:{},
        text:''
      }
    },
    components: {
      Dialog
    },
    methods: {
      goLogin(){
        let _this = this;
        if(_this.username ==''){
          _this.text="请输入用户名"
          //调用子组件的logClick方法
          _this.$refs.DialogClick.logClick()
        }else if(_this.password == ''){
          _this.text="请输入密码"
          //调用子组件的logClick方法
          _this.$refs.DialogClick.logClick()
        }else{
          _this.$http.post('/login',{
            loginName:_this.username,
            loginPawd:_this.password,
          }).then((res)=>{
            console.log(_this.password);
            if(res.status == 200){
              _this.userInfo = res.data;
              if(_this.userInfo.status == 1){
                //LOGIN success
                window.sessionStorage.userInfo = JSON.stringify(_this.userInfo);
                console.log(_this.$store);
                _this.$store.dispatch('setUserInfo', userInfo);
                let redirect = decodeURIComponent(_this.$route.query.redirect || '/');
                _this.$router.push({
                  path: redirect
                });
              }else{
                alert(_this.userInfo.msg);
              }
            }else{
              alert('请求出现错误');
            }
            console.log(res);
          },(err)=>{
            console.log(err);
          });
        }
      },
      //弹出层
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
</style>
