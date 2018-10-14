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
        //this.show = true;
        // Toast({
        //   message: '已选择 ' + value.toString(),
        //   position: 'bottom'
        // });
      },
    },
    mounted(){
      // 这个不是在这调用 别瞎搞
      var value = new Date();
      this.value1 = value.getFullYear()+'-'+(value.getMonth()+1)+'-'+value.getDate();
    },
  }
</script>
