<template>
  <div class="side-bar">
    <div class="top"></div>
    <div class="bottom">
      <div class="logo-box" @click="logoGo">
        <span class="logo"></span>
      </div>
      <div class="name">Stan</div>
      <div class="motto">既然大家都没本事，各走各路才是现实</div>
      <router-link tag="div" class="homepage" :to="{path: '/'}">主页</router-link>
      <div class="essay">随笔</div>
      <div class="about-me">
        <router-link :to="{name: 'allPage'}" tag="span">所有文章</router-link>/<router-link :to="{name: 'aboutMe'}" tag="span">关于我</router-link>
      </div>
      <div>
        <span></span>
        <span></span>
      </div>
      <ul class="clearfix contact-list">
        <li>
          <i class="icon-github iconfont"></i>
        </li>
        <li>
          <i class="iconfont icon-zhihu0"></i>
        </li>
        <li>
          <i class="iconfont icon-qq"></i>
        </li>
        <li>
          <i class="iconfont icon-weibo"></i>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    logoGo () {
      if (this.$route.name === 'pageList') {
        this.$router.go(0)
      } else {
        this.$router.push({
          name: 'pageList'
        })
      }
    }
  }
}
</script>

<style scoped lang="scss">
  @import "../../common/css/common.scss";
  .side-bar {
    background: white;
    height: 100%;
    width: 300px;
    position: fixed;
    top:0px;
    left: 0px;
    .top {
      height: 180px;
      background: #4d4d4d;
    }
    .bottom {
      height: calc(100% - 260px);
      position: relative;
      padding-top: 80px;
      .logo-box {
        cursor: pointer;
        position: absolute;
        width: 118px;
        height: 118px;
        left: calc(50% - 54px);
        top: -54px;
        border-radius: 50%;
        padding: 5px;
        background: white;
        .logo {
          display: inline-block;
          background: url("../../common/img/lufei.jpg") no-repeat 0 0;
          background-size: cover;
          width: 118px;
          height: 118px;
          border-radius: 50%;
        }
      }
      .name {
        font-size: 30px;
        line-height: 60px;
        display: block;
        text-align: center;
        margin-bottom: 20px;
      }
      .homepage,
      .essay,
      .about-me {
        cursor: pointer;
      }
      .motto,
      .homepage,
      .essay,
      .about-me{
        font-size: 14px;
        color: $gray-color;
        text-align: center;
        line-height: 40px;
      }
      .contact-list {
        position: absolute;
        bottom: 30px;
        left: 50%;
        text-align: center;
        width: 120px;
        margin-left: -60px;
        li {
          float: left;
          margin-left: 5px;
          &:first-child {
            margin: 0px;
          }
          i{
            cursor: pointer;
            font-size: 26px;
          }
        }
      }
    }
  }
</style>
