import Vue from 'vue'
import Vuex from 'vuex'
import {getCookie} from "@/tools/cookie";

Vue.use(Vuex)

export const store = new Vuex.Store({
  strict: true,
  //state 用于存储全局变量的数据
  state: {
    //是否登录
    isLogin: false,
    //token
    token: "",
    //用户信息
    userInfo: null || JSON.parse(window.sessionStorage.getItem("userInfo")),
    //上传文件开关
    fileUpFlag: false
  },
  //存储设置state数据的方法
  mutations: {
    setIsLogin: (state, isLogin) => {
      state.isLogin = isLogin
    },
    setToken: (state, token) => {
      state.token = token
    },
    setUserId: (state, userId) => {
      state.userId = userId
    },
    setUserInfo: (state, userInfo) => {
      state.userInfo = userInfo
    },
    setFileUpFlag: (state, fileUpFlag) => {
      state.fileUpFlag = fileUpFlag
    }
  },
  //getters 只会依赖 state 中的成员去更新
  getters: {
    getIsLogin: (state) => {
      return state.isLogin
    },
    getToken: (state) => {
      return state.token
    },
    getUserId: (state) => {
      return state.userId
    },
    getUserInfo: (state) => {
      return state.userInfo
    },
    getFileUpFlag: (state) => {
      return state.fileUpFlag
    }
  },
  //调用mutations提供的方法
  actions: {
    /**
     * @param commit  调用 mutation的方法
     * @param state 就是我们定义的 state
     * @param info  就是调用该方法时的参数
     */
    setIsLogin: (context, isLogin) => {
      context.commit("setIsLogin", isLogin)
    },
    setToken: (context, token) => {
      context.commit("setToken", token)
    },
    setUserId: (context, userId) => {
      context.commit("setUserId", userId)
    },
    setUserInfo: (context, userInfo) => {
      context.commit("setUserInfo", userInfo)
    },
    setFileUpFlag: (context, fileUpFlag) => {
      context.commit("setFileUpFlag", fileUpFlag)
    }
  }
});






