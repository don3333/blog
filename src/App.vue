<template>
  <div id="app" class="app clearfix">
    <side-bar class="side-bar fl"></side-bar>
    <router-view class="content fl"/>
  </div>
</template>

<script>
import SideBar from 'com/side-bar'
export default {
  data () {
    return {
      name: ''
    }
  },
  components: {
    SideBar
  }
}
</script>

<style lang="scss" scoped>
  .app {
    height: 100%;
    .side-bar {
    }
    .content {
      margin: 20px 20px 20px 320px;
    }
  }
</style>
