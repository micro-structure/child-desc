<template>
  <div class="home">
    <el-button @click="$parent.show()">调用 parent</el-button>
  </div>
</template>

<script>
export default {
  name: 'home',
  components: {
  },
  created () {
    // console.log(this.$parent)
  },
  methods: {
    show () {
      this.$message.success('调用 child 成功')
    }
  }
}
</script>
