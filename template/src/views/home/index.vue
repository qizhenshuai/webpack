<template>
<div class="wrap">
  <p>基于element-ui框架的vue PC端项目初始化脚手架</p>
</div>
</template>
<script>

import { HelloWorld } from '../../components';

export default {
  name: 'IndexPage',
  data{{#unless_eq lintConfig "airbnb"}} {{/unless_eq}}() {
    return {
      msg: 'Welcome to Your Vue.js App'{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
    }{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  },
  components:{
    HelloWorld{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}

}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
</script>
<style lang="scss" scoped>
.wrap {
  width:100%;
  p {
    font-size:16px;
  }
}
</style>