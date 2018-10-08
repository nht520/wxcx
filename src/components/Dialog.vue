<template>
  <div  id="Dialog" v-if="isShow">
    <transition name="drop">
        <slot>
          我是弹窗
        </slot>
    </transition>
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
          }, 1500)
        },
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
    #Dialog
      padding 5% 5%
      background #797979
      border-radius 3px
      color: #ffffff
      position:absolute;  /*position:fixed;*/
      top:50%;
      left:50%;
      transform:translateX(-50%) translateY(-50%);
    .drop-enter-active {
      transition: all .5s ease;
    }
    .drop-leave-active {
      transition: all .3s ease;
    }
    .drop-enter {
      transform: translateY(-500px);
    }
    .drop-leave-active {
      transform: translateY(-500px);
    }
</style>
