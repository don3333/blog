<template>
  <div class="home">
    <side-bar class="side-bar"></side-bar>
    <!--<transition name="toggle">-->
    <router-view class="content"/>
    <!--</transition>-->
  </div>
</template>

<script>
import SideBar from 'com/side-bar'
export default {
  data () {
    return {
      name: '',
      flag: true
    }
  },
  components: {
    SideBar
  }
}
</script>

<style lang="scss" scoped>
  .home {
    height: 100%;
    .side-bar {
    }
    .toggle-enter-active, .toggle-leave-active{
      transition: all 1s ease;
    }
    .toggle-enter, .toggle-leave-to {
      opacity: 0;
    }
    .content {
      margin: 20px 20px 20px 320px;
    }
  }
</style>
