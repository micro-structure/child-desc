<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <el-button @click="$parent.show()">调用 parent</el-button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
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
