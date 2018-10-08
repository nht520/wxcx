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
          <v-text-field
            type="text"
            label="请输入你的验证码"
            name="username"
          ></v-text-field>
          <v-text-field
            type="password"
            label="请输入你的密码"
            name="password"
          ></v-text-field>
          <button>账号激活</button>
          <div class="FromInput">
            <v-layout row wrap>
              <v-flex xs12>
                说明：
                <br/>
                请确保您的手机号都是在真善美员工信息档案中已存
                在，若出现手机号与账号不匹配，您可以联系人力新政
                部门确认您的手机号码是否记录正确。
              </v-flex>
            </v-layout>
          </div>
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
            text:'员工激活'
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
  .FromInput
    color #3d3d3d
    & .xs12
      text-align left
      line-height 20px
      margin-top 8%
      color #797979
  .el-message
    margin-top 80%
</style>
