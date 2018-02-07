<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less">
@import './style/milletui/base/reset.less';
#app {
  height: 100%;
  color: #2c3e50;

}
</style>
