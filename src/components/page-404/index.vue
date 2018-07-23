<template>
  <div>
    404 找不到该页面
    {{userInfo.age}}/ {{userInfo.name}} <span v-if="userInfo.a">{{userInfo.a}}</span>
    <button @click="$router.push('/home/pagelist')">跳回首页</button>
    <button @click="setUser({name: '1',age: 22})">change</button>
    <img v-lazy="img" width="100" height="100">
  </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex'
import {SETUSER} from '@/store/mutation-types'
export default {
  data () {
    return {
      img: ''
    }
  },
  methods: {
    ...mapMutations({
      setUser: SETUSER
    })
  },
  components: {},
  computed: {
    ...mapState([
      'userInfo'
    ])
  },
  created () {
    // console.log(this.$store.commit)
    setTimeout(() => {
      this.img = 'http://img3.imgtn.bdimg.com/it/u=1257232717,433788398&fm=27&gp=0.jpg'
    }, 3000)
  }
}
</script>

<style scoped lang="scss">

</style>
