<template>
  <div>
    404 找不到该页面
    {{this.userInfo.age}}/ {{this.userInfo.name}}
    <button @click="$router.push('/home/pagelist')">跳回首页</button>
    <button @click="setUser({name: '1',age: 22})">change</button>
  </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex'
import {SETUSER} from '@/store/mutation-types'
export default {
  data () {
    return {}
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
  }
}
</script>

<style scoped lang="scss">

</style>
