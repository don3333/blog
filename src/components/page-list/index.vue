<template>
  <div class="page-list">
    <list-item
      v-for="(item) in pageList"
      :key="item"
      style="margin-bottom: 20px;"
    ></list-item>
  </div>
</template>

<script>
import ListItem from 'com/list-item'
export default {
  data () {
    return {
      pageList: [1, 2, 3]
    }
  },
  methods: {},
  components: {
    ListItem
  }
}
</script>

<style scoped lang="scss">
  .page-list {
    width:calc(100% - 340px);
  }
</style>
