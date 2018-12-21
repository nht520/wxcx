<template>
    <div id="List">
      <Banner :banner="Listbanner"></Banner>
      <!--九宫格-->
      <Grid></Grid>
    </div>
</template>

<script>
    import Banner from "./Banner/Banner";
    import Grid from "./Gird/Gird";
    export default {
        name: "List",
        components: {Grid, Banner},
        data(){
          return{
            Listbanner: [
              {
                src: require('../assets/images/20160831103906615621368.jpg'),
              },
              {
                src: require('../assets/images/201607121004101585411670.jpg'),
              },
              {
                src: require('../assets/images/201607181113551042845401.jpg'),
              },
              {
                src: require('../assets/images/201607181113561275962470.jpg'),
              }
            ]
          }
        },
        methods:{

        },
        mounted(){

        }
    }
</script>

<style scoped>

</style>
