<style>
</style>
<script>
  import { checkLogin, loginByWeChat } from '@/service/user'

  export default {
    created () {
      this.init()
    },
    methods: {
      async init () {
        const isLogin = await checkLogin()
        if (!isLogin) {
          await loginByWeChat()
        }
      }
    }
  }
</script>
