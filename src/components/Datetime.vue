<template>
  <div>
    <mt-button @click="open('picker1')" size="large" >{{value1}}</mt-button>
    <mt-datetime-picker
      ref="picker1"
      type="date"
      v-model="value"
      year-format="{value} 年"
      month-format="{value} 月"
      date-format="{value} 日"
      @confirm="handleChange"
    >
    </mt-datetime-picker>
  </div>
</template>
<script type="text/babel">
  // import { Toast } from 'mint-ui';
  export default {
    name: 'hello',
    data () {
      return {
        value:new Date(),
        value1:"",
        /*startDate: new Date('2000/1/1'),
        endDate: new Date('2025/1/1'),*/
      }
    },
    methods: {
      open(picker) {
        this.$refs[picker].open();
      },
      handleChange(value) {
        this.value = value.getFullYear()+'-'+(value.getMonth()+1)+'-'+value.getDate();
        this.value1 = this.value;
        //this.show = true;
        // Toast({
        //   message: '已选择 ' + value.toString(),
        //   position: 'bottom'
        // });
      },
    },
    mounted(){
      //默认显示的value时间
      var  value = new Date();
      this.value1 = (value.getFullYear()-1)+'-'+(value.getMonth()+1)+'-'+(value.getDate()-1);
    },
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">

  .HomeScreen
    padding 4% 15px
    background #ffffff
    text-align center
    line-height 41px
    position fixed
    width 100%
    z-index 888
    margin-top 56px
    & button
      border-radius 3px
      font-size 1rem
      overflow hidden
    & .xs3 button
      border 1px solid #f3930a
      color #f3930a
      border-radius 3px
      font-size 1rem
      overflow hidden
      height 41px
      width 80%
      float right
    & .v-card__text
      padding 0px
  .HomeList
    background #ffffff
    margin-bottom 2%
    padding 4% 1%
    & .v-card__text
      padding 6px 10px
    & .xs3
      text-align right
    & .xs9
      color #3d3d3d
      font-size 1.1rem
      font-weight bold
    & .xs5
      text-align right
  .HomeList .official
    color #f00

</style>
