(function (win) {
  function appendScript (id, url) {
    const script = document.createElement('script')
    script.src = url
    script.id = id
    document.body.appendChild(script)
  }

  const config = win._MICRO_APP_CONFIG = {
    menu: [
      {
        id: 'index',
        name: '首页',
        path: '/',
        url: 'http://localhost:8080/app.js'
      },
      {
        id: 'about',
        name: '关于',
        path: '/about',
        url: 'http://localhost:8083/app.js'
      }
    ],

    addWatch: function () {
      router.beforeEach((to, from, next) => {
        const item = this.menu.find(x => x.path === to.path)
        this.load(item)
        next()
      })
    },

    loadQueen: {},
    load: function (item) {
      if (!this.loadQueen[item.id]) {
        this.loadQueen[item.id] = true
        appendScript(item.id, item.url)
      }
    }
  }

  let hash = location.hash
  if (!hash) {
    hash = '#/'
  }
  const index = hash.indexOf('?')
  const path = hash.substr(1, index > -1 ? index - 1 : undefined)
  const currentMenu = window._MICRO_APP_CONFIG.menu.find(x => x.path === path)
  config.load(currentMenu)

  window.addEventListener('DOMContentLoaded', () => {
    config.addWatch()
  })
})(window)
