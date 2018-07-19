<template>
  <div class="list-item">
    <div class="title clearfix">
      <h1 class="fl">小程序性能优化点</h1>
      <time class="fr">
        <i class="icon-calendar icon iconfont"></i>
        2018-07-17
      </time>
    </div>
    <div class="content">
      <ul class="introduction">
        <li>首屏白屏时间长</li>
        <li>加载loading时间长</li>
        <li>操作反馈慢（点击，滑动）</li>
      </ul>
      <div class="see-more clearfix">
        <i class="icon-tag iconfont icon fl tag"></i>
        <div class="tag-name fl">
          <span class="triangle_left">
          </span>
          <i></i>
          <em></em>
          小程序
        </div>
        <span class="see-more-btn fr" @click="go">查看全文 >></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  methods: {
    go () {
      this.$router.push({
        name: 'pageDetail',
        params: {
          id: 1
        }
      })
    }
  },
  components: {}
}
</script>

<style scoped lang="scss">
  .list-item {
    background: white;
    padding-bottom: 30px;
    .title {
      border-left: 5px solid #4d4d4d;
      padding: 30px 0;
      h1 {
        font-size: 26px;
        margin-left: calc(7.6923% - 5px);
      }
      time {
        margin-right: 7.6923% ;
        margin-top: 8px;
      }
    }
    .content {
      margin: 20px 7.6923% 0px;
      .introduction {
        padding: 20px 0;
        border: 1px solid #ddd;
        border:{
          left-width: 0;
          right-width: 0;
        }
        margin-bottom: 30px;
        li {
          margin-bottom: 10px;
          font-size: 14px;
        }
      }
      .see-more {
        font-size: 12px;
        .tag-name {
          background: #94635c;
          line-height: 14px;
          border-radius: 2px;
          padding: 3px 5px 3px 15px;
          color: white;
          margin-left: 15px;
          position: relative;
          em {
            width: 4px;
            height: 4px;
            position: absolute;
            left: 8px;
            top:50%;
            margin-top: -2px;
            background: white;
            border-radius: 50%;
          }
          .triangle_left {
            width:0;
            height:0;
            border-width:10px 10px 10px 0;
            border-style:solid;
            position: absolute;
            left: -9px;
            top: 0px;
            border-color:transparent #94635c transparent transparent;
          }
        }
        .tag {
           color: #999;
        }
        .see-more-btn {
          cursor: pointer;
        }
      }
    }
  }
</style>
