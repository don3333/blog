<template>
  <div class="side-bar">
    <div class="top"></div>
    <div class="bottom">
      <div class="logo-box">
        <span class="logo"></span>
      </div>
      <div class="name">Stan</div>
      <div class="motto">既然大家都没本事，各走各路才是现实</div>
      <div class="homepage">主页</div>
      <div class="essay">随笔</div>
      <div class="about-me">
        <span>所有文章</span>/<span>关于我</span>
      </div>
      <div>
        <span></span>
        <span></span>
      </div>
      <ul class="clearfix contact-list">
        <li>
          <i class="icon-github icon iconfont"></i>
        </li>
        <li>
          <i class="iconfont icon icon-zhihu0"></i>
        </li>
        <li>
          <i class="iconfont icon icon-qq"></i>
        </li>
        <li>
          <i class="iconfont icon icon-weibo"></i>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
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
