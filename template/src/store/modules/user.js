const user = {
  state: {
    token: '',
    avatar: '',
    name: '',
    roles: ''{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  },
  mutations: {
    INFO: (state, info) {
      state.avatar = info.avatar,
      state.name = info.name,
      state.roles = info.roles,
    }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  },
  actions: {
    setInfo({ commit }, info) {
      commit('INFO', info){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

export default user{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
