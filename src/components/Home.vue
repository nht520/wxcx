<template>
    <div id="Home">
      <!--头部-->
      <div class="HomeHeader">
        <v-layout row>
          <v-flex xs12 sm6 offset-sm3>
            <v-card>
              <v-toolbar>
                <!--<v-toolbar-side-icon></v-toolbar-side-icon>-->
                <v-icon>fab fa-amazon</v-icon>
                <v-toolbar-title>重庆市渝中区</v-toolbar-title>
                <v-toolbar-title>华神坨</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-btn icon>
                  退出
                </v-btn>
              </v-toolbar>
            </v-card>
          </v-flex>
        </v-layout>
      </div>
      <!--时间筛选-->
      <div class="HomeScreen">
        <v-layout row wrap>
          <v-flex xs4>
              <v-card-text class="px-0">2018-05-03</v-card-text>
          </v-flex>
          <v-flex xs1>
              <v-card-text class="px-0">至</v-card-text>
          </v-flex>
          <v-flex xs4>
              <v-card-text class="px-0">2018-05-03</v-card-text>
          </v-flex>
          <v-flex xs3>
              <v-card-text class="px-0">
                <button>查询</button>
              </v-card-text>
          </v-flex>
        </v-layout>
      </div>
      <!---->
    </div>
</template>
<script>
    export default {
        name: "Home",
        data () {
          return {

          }
        }
    }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .HomeHeader .theme--light.v-toolbar
      background #5c57e3
      text-align center
      color #ffffff
  .HomeScreen
      background #ffffff
      text-align center
</style>
