<style lang="scss" scoped></style>
<template>
  <div class="page">
  </div>
</template>
<script>
  import { isRegister } from '@/service/user'

  export default {
    data () {
      return {}
    },
    methods: {
      init () {
        isRegister('../publish-post/publish-post')
      }
    },
    mounted () {
      this.init()
    }
  }
</script>
