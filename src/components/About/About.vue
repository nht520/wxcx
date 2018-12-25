<template>
    <div id="About">
      <v-content>
        <v-container>
          <v-layout row wrap align-center>
            <v-flex xs12 md4>
              <div class="text-xs-center">
                <v-avatar size="125px">
                  <img
                    class="img-circle elevation-7 mb-1"
                    :src="imgUrl"
                  >
                </v-avatar>
                <div class="headline">John <span style="font-weight:bold">Carter</span></div>
                <div class="subheading text-xs-center grey--text pt-1 pb-3">Lorem ipsum dolor sit amet</div>
                <v-layout justify-space-between>
                  <a href="javascript:;" class="body-2">Home</a>
                  <a href="javascript:;" class="body-2">About</a>
                  <a href="javascript:;" class="body-2">Github</a>
                  <a href="javascript:;" class="body-2">Other</a>
                </v-layout>
              </div>
            </v-flex>
          </v-layout>
        </v-container>
      </v-content>
    </div>
</template>

<script>
    import url from "../../assets/images/20160831103906615621368.jpg";
    export default {
        name: "About",
        data(){
          return{
            title:"11111",
            imgUrl:url,
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
