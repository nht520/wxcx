<template>
  <div class="Grid">
    <v-container grid-list-md text-xs-center>
      <v-layout row wrap >
        <v-flex v-for="(item,index) in list" xs3 :key="index">
          <v-card dark color="secondary" >
            <ul>
              <router-link :to="item.path" tag="li">
                <v-icon :style="item.yanse">{{item.icon}}</v-icon>
                <v-card-text :style="item.yanse" class="px-0">{{item.text}}</v-card-text>
              </router-link>
            </ul>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
<script>
  export default {
    name: "Grid",
    props: {
      list:{
        default: function () {
          return  [
            {
              icon:'fas fa-angry',
              text:'惹我生气',
              path:'/Sideshow',
              yanse:{
                color:'#fab132',
              }
            },
            {
              icon:'fab fa-affiliatetheme',
              text:'唯品会',
              path:'/Sideshow',
              yanse:{
                color:'#ff3353',
              }
            },
            {
              icon:'fas fa-apple-alt',
              text:'找折扣',
              path:'/Sideshow',
              yanse:{
                color:'#ff41a2',
              }
            },
            {
              icon:'fas fa-atom',
              text:'挑礼物',
              path:'/Sideshow',
              yanse:{
                color:'#1dbf0c',
              }
            },
            {
              icon:'fas fa-burn',
              text:'医药健康',
              path:'/Sideshow',
              yanse:{
                color:'#32b0fa',
              }
            },
            {
              icon:'fas fa-cannabis',
              text:'秋天到来',
              path:'/Sideshow',
              yanse:{
                color:'#7237fe',
              }
            },
            {
              icon:'fab fa-d-and-d',
              text:'龙的传人',
              path:'/Sideshow',
              yanse:{
                color:'#06e0e6',
              }
            },
            {
              icon:'fab fa-drupal',
              text:'凹凸曼',
              path:'/Sideshow',
              yanse:{
                color:'#1e4dfe',
              }
            }
          ]
        },
      },
    },
    computed: {

    },

  }
</script>
<style lang="stylus" rel="stylesheet/stylus" >
  .Grid ul
    width 100%
    padding 0px
    background #ffffff
  .Grid .theme--dark .v-icon
    /*color #f00 !important*/
    margin-top 10px
  .Grid .v-card__text
    padding 10px
  .Grid .v-card
    box-shadow none
</style>
