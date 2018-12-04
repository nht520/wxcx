<template>
    <div class="bottom">
      <v-card>
        <v-bottom-nav
          :active.sync="bottomNav"
          :color="color"
          :value="true"
          absolute
          shift
        >
          <ul>
            <router-link tag="li" v-for="(item,id) in botton" :to="item.path"  :key="id">
              <v-btn dark>
                <span>{{item.title}}</span>
                <v-icon>{{item.icon}}</v-icon>
              </v-btn>
            </router-link>
          </ul>
        </v-bottom-nav>
      </v-card>
    </div>
</template>
<script>
    export default {
       name: "Bottom",
       data(){
          return{
            bottomNav: 0,
            botton:[
              {
                id:0,
                path:"/",
                title:"首页",
                icon:"fa fa-heart",
              },
              {
                id:1,
                path:"/Find",
                title:"列表",
                icon:"fa fa-heart",
              },
              {
                id:2,
                path:"/",
                title:"购物袋",
                icon:"fa fa-heart",
              },
              {
                id:3,
                path:"/About",
                title:"我的",
                icon:"fa fa-heart",
              }
            ]
          }
       },
      computed: {
        color () {
          switch (this.bottomNav) {
            case 0: return 'red';
            case 1: return 'purple';
            case 2: return 'cyan';
            case 3: return 'orange'
          }
        },
      },
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">

  .bottom
   position fixed
   z-index 999
   width 100%
   bottom 0px
  .bottom ul
   width 100%
   padding 0px
   margin 0px
  .bottom ul li
   width 25%
   float left
</style>
