<template>
  <div id="app">
<<<<<<< HEAD
    <img src="./assets/logo.png">
    <div>
      <p>
        If Element is successfully added to this project, you'll see an
        <code v-text="'<el-button>'"></code>
        below
      </p>
      <el-button>el-button</el-button>
    </div>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
=======
    <div id="nav">
      <router-link v-for="item in menu" :key="item.path" :to="item.path">{{ item.name }}</router-link>
    </div>
    <router-view ref="route" />
>>>>>>> 0edfe452eeaf0d10c3be6879d7567523080567cc
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
<<<<<<< HEAD
  name: 'app',
  components: {
    HelloWorld
=======
  name: 'root',

  data () {
    return {
      menu: window._MICRO_APP_CONFIG.menu
    }
  },

  created () {
  },

  methods: {
    async show () {
      await this.$msgbox({
        message: '我来自 parent',
        confirmButtonText: '调用 child'
      })
      this.$refs.route.show()
    }
>>>>>>> 0edfe452eeaf0d10c3be6879d7567523080567cc
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
