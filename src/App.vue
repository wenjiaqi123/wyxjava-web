<template>
  <div id="app">
    <!--页面导航栏-->
    <Header></Header>

    <!--页面主体部分-->
    <div class="body">
      <router-view/>
    </div>

    <!--页脚-->
    <Footer></Footer>
  </div>
</template>

<script>
  import Header from "@/components/header/Header"
  import Footer from "@/components/footer/Footer"

  export default {
    name: "APP",
    components: {
      Header, Footer
    },
    data() {
      return {}
    },
    methods: {},
    mounted() {
    }
  }
</script>

<style>
  * {
    margin: 0px;
    padding: 0px;
    text-decoration: none; /*下划线*/
    list-style: none; /* ul li 的小圆点*/
    font-family: Arial; /*字体*/
    font-size: 16px; /*文字大小*/
  }


  #app .body {
    /*限定各个路由的宽度*/
    /*width: 80%;*/
    /*min-width: 1120px;*/
    height: calc(100vh - 70px);
    margin: 0 auto;
  }
</style>
