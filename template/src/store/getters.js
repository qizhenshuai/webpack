const getters = {
  info: state => state.app.info,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  roles: state => state.user.roles{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
export default getters{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  