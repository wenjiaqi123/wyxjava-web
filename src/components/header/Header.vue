<template>
  <div class="header">
    <!--盒子-->
    <div class="box">


      <!--左侧-->
      <div class="left">
        <!--图片-->
        <div class="header-img">

        </div>
      </div>


      <!--右侧-->
      <div class="right">
        <div class="text">
          首页
        </div>
        <div class="text">
          课程
        </div>
        <div class="text">
          导航
        </div>
        <div class="text">
          登录
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    name: "",
    components: {},
    data() {
      return {}
    },
    methods: {},
    mounted() {
    }
  }
</script>

<style scoped>
  .header {
    border: 1px solid black;
  }

  .header .box{
    width: 80%;
    min-width: 1120px;
    height: 70px;
    margin: 0 auto;
    border: 1px solid red;
  }

  /*左侧*/
  .header .box .left{
    float: left;
    height: 100%;
    border: 1px solid black;
  }

  /*图片*/
  .header .box .left .header-img{
    width: 60px;
    height: 60px;
    background-image: url("../../assets/header/java.png");
    background-size: 100%;
    background-repeat: no-repeat;
  }

  .header .box .left div{
    float: left;
  }

  /*右侧*/
  .header .box .right{
    float: right;
    height: 100%;
    border: 1px solid black;
  }

  .header .box .right .text{
    float: left;
    font-size: 18px;
    margin: 0px 10px;
    line-height: 70px;
    border: 1px solid black;
  }
</style>
