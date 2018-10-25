<template>
  <div  id="Dialog" v-if="isShow">
      <slot>
        我是弹窗
      </slot>
  </div>
</template>
<script>
    export default {
      name:"Dialog",
      data () {
        return{
          isShow:false
        }
      },
      methods:{
        logClick () {
          this.isShow = true,
          setTimeout(() => {
            this.isShow = false
          }, 2500)
        },
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
    #Dialog
      padding 5% 5%
      background #000000c7
      border-radius 3px
      color #ffffff
      position absolute
      top 50%
      left 50%
      transform:translateX(-50%) translateY(-50%)
</style>
