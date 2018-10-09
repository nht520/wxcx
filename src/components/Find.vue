<template>
  <div class="Activate">
    <!--引用头部组件-->
    <Header class="Header"  :text="text"></Header>
    <!--from input-->
    <div class="ActivateFrom">
      <form>
        <v-text-field
          type="text"
          label="请输入你的账号"
          name="username"
        ></v-text-field>
        <v-text-field
          type="text"
          label="请输入你的手机号码"
          name="username"
        ></v-text-field>

        <v-layout row wrap>
          <v-flex xs8>
            <v-card-text class="px-0">
              <v-text-field
                type="text"
                label="请输入你的验证码"
                name="username"
              ></v-text-field>
            </v-card-text>
          </v-flex>
          <v-flex xs4>
            <v-card-text class="px-0">
              <button class="verification">免费获取</button>
            </v-card-text>
          </v-flex>
        </v-layout>
        <v-text-field
          type="password"
          label="请输入你的密码"
          name="password"
        ></v-text-field>
        <button>确认</button>
      </form>
    </div>
  </div>
</template>
<script>
  import Header from "./Header";
  export default {
    name: "Activate",
    components: {
      Header
    },
    data(){
      return{
        text:'找回密码'
      }
    },
    methods:{

    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .Header
    overflow hidden
  .ActivateFrom
    width 80%
    margin 0 auto
    margin-top 70px
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
  .ActivateFrom .verification
    border 1px solid #5651ce
    background #ffffff
    color #5651ce
    line-height 25px
</style>
