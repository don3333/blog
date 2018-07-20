<template>
  <div>
    <Son>
      <template slot-scope="scope">
        <em v-for="(item, index) in scope.list" :key="index">
          {{item}}
        </em>
      </template>
    </Son>
  </div>
</template>

<script>
import Son from './son'
export default {
  data () {
    return {}
  },
  methods: {},
  components: {
    Son
  }
}
</script>

<style scoped lang="scss">

</style>
