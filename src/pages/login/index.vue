<style lang="scss" scoped>
  .logo {
    background-image: url(../../images/logo2.jpg);
    height: 143px;
    width: 140px;
    margin: 0 auto 20px;
    background-size: 140px 143px;
  }

  .login-btn {

  }
</style>
<template>
  <div class="page">
    <div class="page__hd">
      <div class="logo">
      </div>
    </div>
    <div class="page__bd page__bd_spacing">
      <button open-type="getUserInfo" @getuserinfo="userInfoHandler" class="weui-btn login-btn" type="primary">微信登录
      </button>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {}
    },
    methods: {
      async userInfoHandler (handler) {
        const info = handler.mp.detail
        if (info.errMsg === 'getUserInfo:ok') {
          wx.showLoading({title: '登录中', mask: true})
          await this.$store.dispatch('getUserInfo', info)
          wx.hideLoading()
          wx.redirectTo({url: this.$root.$mp.query.back})
        }
      }
    },
    mounted () {
    }
  }
</script>
