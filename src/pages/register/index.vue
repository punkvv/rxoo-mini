<style lang="scss" scoped>
  .phone-btn {
    border-radius: 0px;
  }
</style>
<template>
  <div class="page">
    <div class="weui-cells weui-cells_after-title">

      <div class="weui-cell weui-cell_input">
        <div class="weui-cell__hd">
          <div class="weui-label">商家名称</div>
        </div>
        <div class="weui-cell__bd">
          <input class="weui-input" placeholder="请输入商家名称"/>
        </div>
      </div>

      <div class="weui-cell weui-cell_input weui-cell_vcode">
        <div class="weui-cell__hd">
          <div class="weui-label">联系电话</div>
        </div>
        <div class="weui-cell__bd">
          <input class="weui-input" type="number" placeholder="请输入联系电话"/>
        </div>
      </div>

      <div class="weui-cell weui-cell_select">
        <div class="weui-cell__hd weui-cell__hd_in-select-after">
          <div class="weui-label">行业分类</div>
        </div>
        <div class="weui-cell__bd">
          <picker @change="classChange" :range-key="'name'" :range="classList">
            <div class="weui-select weui-select_in-select-after">{{classObj.name}}</div>
          </picker>
        </div>
      </div>

      <div class="weui-cell weui-cell_input weui-cell_vcode">
        <div class="weui-cell__hd">
          <div class="weui-label">所在位置</div>
        </div>
        <div class="weui-cell__bd">
          <input @click="chooseLocation" class="weui-input" :value="location.name" disabled placeholder="请选择所在位置"/>
        </div>
      </div>

      <div class="weui-cell weui-cell_input weui-cell_vcode">
        <div class="weui-cell__hd">
          <div class="weui-label">详细地址</div>
        </div>
        <div class="weui-cell__bd">
          <input class="weui-input" placeholder="请输入详细地址"/>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import { chooseLocation } from '@/service/user'

  export default {
    data () {
      return {
        classList: [],
        classObj: {},
        location: {}
      }
    },
    methods: {
      async getBusinessClassList () {
        this.classList = this.$store.getters.businessClassList
      },
      classChange (e) {
        const classIndex = e.mp.detail.value
        this.classObj = this.classList[classIndex]
      },
      async chooseLocation () {
        const location = await chooseLocation()
        if (location) {
          this.location = location
        }
      }
    },
    mounted () {
      this.getBusinessClassList()
    }
  }
</script>
