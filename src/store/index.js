import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    routeNav: [
      {
        fullPath: "/v1/a",
        name: "a"
      },
      {
        fullPath: "/v1/b",
        name: "b"
      },
      {
        fullPath: "/v1/c",
        name: "c"
      },
      {
        fullPath: "/v1/d",
        name: "d"
      },
      {
        fullPath: "/v1/e",
        name: "e"
      },
    ],
  },
  mutations: {
    setaddrouteNav(state, data) {
      if (state.routeNav.some(item => item.fullPath === data.fullPath)) {
        return
      }
      state.routeNav.push({
        fullPath: data.fullPath,
        name: data.name
      })
    },
    closerouteNav(state, data) {
      state.routeNav = state.routeNav.filter(item => item.fullPath !== data.fullPath)
    }, 
  },
  actions: {
  },
  modules: {
  }
})
