<template>
  <div class="header">
    <!--盒子-->
    <div class="box">

      <!--左侧-->
      <div class="left">
        <!--图片-->
        <img src="../../assets/header/logo.jpg">
        <img src="../../assets/header/wyxjava.jpg">
      </div>

      <!--中间-->
      <div class="center">
        <div class="home now">
          首页
        </div>
        <div class="course">
          课程
        </div>
        <div class="nav">
          导航
        </div>
      </div>

      <!--右侧-->
      <div class="right">
        <!--搜索框-->
        <div class="search">
          <Input
            search
            size="large"
            style="width: 270px"/>
        </div>
        <!--登录-->
        <div class="login">
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
    box-shadow: 0px 2px 5px #888888;
  }

  /*头部*/
  .header .box {
    width: 1200px;
    height: 70px;
    margin: 0 auto;
  }

  /*左侧*/
  .header .box .left {
    float: left;
    height: 100%;
  }

  /*中间*/
  .header .box .center {
    float: left;
    height: 100%;
    margin-left: 200px;
  }

  /*首页 课程 导航*/
  .header .box .center .home,
  .header .box .center .course {
    float: left;
    width: 100px;
    font-size: 18px;
    font-weight: lighter;
    line-height: 70px;
    text-align: center;
    margin-right: 40px;
  }

  .header .box .center .home:hover {
    color: #dddddd;
    background-color: #666;
  }

  .header .box .center .nav {
    float: left;
    width: 100px;
    font-size: 18px;
    font-weight: lighter;
    line-height: 70px;
    text-align: center;
  }

  .header .box .center .now {
    float: left;
    width: 100px;
    color: #FF0000;
    font-size: 18px;
    font-weight: bolder;
    line-height: 70px;
    text-align: center;
  }

  /*右侧*/
  .header .box .right {
    float: right;
    height: 100%;
  }

  .header .box .right .search {
    float: left;
    margin: 14px 20px 0px 0px;
  }

  .header .box .right .login {
    float: right;
    width: 100px;
    font-size: 18px;
    font-weight: lighter;
    line-height: 70px;
    text-align: center;
  }
</style>
