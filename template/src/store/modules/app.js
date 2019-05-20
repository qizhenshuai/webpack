const app = {
  state: {
    info: ''{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  },
  mutations: {
    INFO: (state, info) => {
      state.info = info
    }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  },
  actions: {
    setInfo({ commit }, info) {
      commit('INFO', info){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

export default app{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
