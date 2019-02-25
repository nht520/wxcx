<template>
    <div id="Loadmore">
      <mt-loadmore :top-method="loadTop"   ref="loadmore" >
        <ul
          ref="loadmore"
          class="list"
          :top-method="loadTop"
          v-infinite-scroll="loadMore"
          infinite-scroll-distance="10"
        >
          <slot>
            这里放内容
          </slot>
        </ul>
        <p v-show="show" class="page-infinite-loading">
          <img src="../../assets/images/Spinner.svg"/>
        </p>
        <p v-text="text"></p>
      </mt-loadmore>
    </div>
</template>
<script>
    export default {
      name: "Loadmore",
      data(){
          return{
              show: true,
              title:"我是lodmore",
              page:0,
              text:"数据加载中...",
          }
        },
        methods:{
          //下拉刷新
          loadTop(){
            this.page=1;
            console.log("loadTop"+this.page);
            this.$refs.loadmore.onTopLoaded();
            this.$emit('ldmore');
          },
          //加载更多
          loadMore() {
            console.log("ldmore"+this.page);
            ++this.page;
            this.$emit('ldmore');
          }
        },
        mounted(){
          this.list=this.$store.state.lodlist.title;
          console.log(this.list)
        }
    }
</script>
<style lang="stylus" rel="stylesheet/stylus">

  .page-infinite-loading
    width 35px
    height 35px
    text-align center
    display inline-block
    vertical-align middle
    margin-right 5px


</style>
