import Vue from 'vue'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import Vuex from 'vuex'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import app from './modules/app'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import user from './modules/user'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import getters from './getters'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

Vue.use(Vuex){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

const store = new Vuex.Store({
  modules: {
    app,
    user{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  },
  getters{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

export default store{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
