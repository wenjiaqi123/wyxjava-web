import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Home'
import Header from '@/components/header/Header'
import Footer from '@/components/footer/Footer'

Vue.use(Router)

export default new Router({
  //TODO 正式服务将 history注释 取消掉
  mode:"history",
  routes: [
    {path: '/',name: 'Home',component: Home},
    {path: '/header',name: 'Header',component: Header},
    {path: '/footer',name: 'Footer',component: Footer},
  ]
})
