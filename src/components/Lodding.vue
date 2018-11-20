<template>
  <!--加载动画-->
    <div v-if="show" class="lodding">
      <img src="../assets/images/Spinner.svg"/>
      <slot>
        我是弹窗
      </slot>
    </div>
</template>

<script>
    export default {
        name: "Lodding",
        data(){
          return{
            show:false
          }
        },
        methods:{
          logClick () {
            this.show = true;
          },
          lodClick () {
            this.show = false;
          },
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .lodding
    padding 100%
    background rgba(0, 0, 0, 0.69)
    border-radius 3px
    color #ffffff
    position absolute
    top 50%
    text-align center
    left 50%
    transform:translateX(-50%) translateY(-50%)
  .lodding img
    width 100px
</style>
