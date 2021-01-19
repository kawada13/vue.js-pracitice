export default {
  install(vue, options) {
    console.log(`${options.hello}${options.world}!`)
    vue.mixin({
      data() {
        return {
          first: '最初'
        }
      },
    })
  }
}