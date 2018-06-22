<style lang="scss" scoped>
  .scroll-view {
    white-space: nowrap;
    background-color: rgba(255, 255, 255, .3);
  }

  .scroll-view-item {
    display: inline-block;
    color: #666;
    font-size: 16px;
    padding: 0 12px;
    height: 35px;
    line-height: 33px;
    vertical-align: top;
  }

  .scroll-view-item.current {
    color: #498BF8;
    background-image: url(../../images/item.svg);
    background-position: center 28px;
    background-repeat: no-repeat;
  }

  .gradient-r, .gradient-l {
    height: 35px;
    position: absolute;
    pointer-events: none;
    top: 0;
    width: 30px;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    -webkit-transition: opacity .2s ease-out;
    transition: opacity .2s ease-out;
  }

  .gradient-r {
    background: linear-gradient(to right, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 50%);
    right: 0;
    opacity: 1;
    width: 60px;
  }

  .gradient-l {
    background: linear-gradient(to left, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 100%);
    left: 0;
    opacity: 0;
  }

  .expand-btn {
    width: 40px;
    height: 34px;
    right: 0;
    z-index: 3;
    position: absolute;
    top: 0;
    margin-top: 4px;
  }

  .track {
    opacity: 1;
    display: block;
    margin-right: 35px;
  }

  .icon-jiantou_down, .icon-jiantou_up {
    text-align: center;
  }

  .fulllist {
    display: none;
    position: absolute;
    top: 35px;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 2;
    height: 3000px;
    background-color: rgba(0, 0, 0, .32);
    opacity: 1;
    -webkit-transition: opacity .1s ease-out;
    transition: opacity .1s ease-out;
    .top {
      color: #999;
      font-size: 14px;
      display: block;
      position: absolute;
      top: -35px;
      left: 0;
      background-color: #FFF;
      height: 35px;
      line-height: 35px;
      width: 100%;
      z-index: 1;
      text-indent: 15px;
      background-repeat: repeat-x;
    }
    .channels-area {
      background-color: #FFF;
      margin-bottom: -1px;
      .channels-bg {
        background-repeat: repeat;
        line-height: 40px;
        margin: 0 17px;
      }
      .channels-list {
        margin-left: -17px;
        margin-right: -17px;
        a {
          display: inline-block;
          text-align: center;
          width: 16.6%;
          color: #666666;
          font-size: 16px;
          text-decoration: none;
          box-sizing: border-box;
          padding: 0;
        }
        a.current {
          color: #498BF8;
        }
      }
    }
  }

  .fulllist.active {
    display: block;
    animation: hideFulllist 0.3s;
  }

  @keyframes hideFulllist {
    0% {
      opacity: 0;
      transform: translate(0, 1%)
    }
    100% {
      opacity: 1;
      transform: translate(0, 0)
    }
  }

  .creater-publish {
    position: fixed;
    z-index: 3;
    height: 52px;
    bottom: 16px;
    right: 16px;
    width: 52px;
  }

  .publish {
    position: fixed;
    display: none;
    bottom: 60px;
    right: 15px;
    .creater-post {
      .icon {
        background: url(//res.imtt.qq.com/tagapp/img/create/post.png) center no-repeat;
        background-size: 24px 30px;
      }
    }
    .creater-imgtxt {
      .icon {
        background: url(//res.imtt.qq.com/tagapp/img/create/imgtxt.png) center no-repeat;
        background-size: 27px 32px;
      }
    }
    .creater-video {
      .icon {
        background: url(//res.imtt.qq.com/tagapp/img/create/video.png) center no-repeat;
        background-size: 32px 32px;
      }
    }
    .creater {
      display: flex;
      z-index: 3;
      height: 52px;
      width: 104px;
      margin-bottom: 10px;
    }
    .icon {
      display: block;
      height: 36px;
      width: 100%;
    }
    .txt {
      font-size: 14px;
      width: 100%;
      display: block;
      color: #666;
      text-align: end;
      padding-top: 6px;
    }
  }

  .publish.active {
    display: block;
    animation: mymove 0.5s;
  }

  @keyframes mymove {
    0% {
      opacity: 0;
      transform: translate(10%, 100%)
    }
    100% {
      opacity: 1;
      transform: translate(0, 0)
    }
  }

  .creater-publish.v3-1 {
    background: url(../../images/creater-publish2.png) center center no-repeat #4c9afa;
    box-shadow: 0 4px 8px rgba(139, 139, 139, .45);
    background-size: 100% 100%;
    border-radius: 50%;
  }

  .creater-publish.v4-1 {
    background: url(//res.imtt.qq.com/tagapp/img/create/close.png) center no-repeat;
    background-size: 16px 16px;
    border-radius: 50%;
  }

  .site-header {
    display: flex;
    .weui-search-bar__box {
      margin: 0 12px;
      background-color: rgba(222, 222, 222, 0.29);
      width: 86%;
    }
    .user {
    }
  }

  .topnav {
    position: relative;
  }

</style>

<template>
  <div class="page">
    <div class="heard">
      <div class="site-header">
        <div class="weui-search-bar__box">
          <icon class="weui-icon-search_in-box" type="search" size="14"></icon>
          <input type="text"
                 class="weui-search-bar__input"
                 placeholder="输入关键字试试"/>
        </div>
        <div class="user">
          <i class="iconfont icon-geren"></i>
        </div>
      </div>
      <div class="topnav">
        <div class="track">
          <scroll-view
            class="scroll-view"
            :upper-threshold="10"
            :lower-threshold="10"
            scroll-x
            scroll-with-animation
            style="width: 100%"
            :scroll-left="scrollLeft">
            <a v-for="item in classList" :key="item.id"
               @click="changeTab(item)"
               class="scroll-view-item"
               :class="{ current : item.isActive }">{{item.name}}</a>
          </scroll-view>
        </div>
        <div class="gradient-r"></div>
        <div class="gradient-l"></div>
        <a class="expand-btn" @click="expand">
          <i :animation="animationData" class="iconfont icon-jiantou_down"></i>
        </a>
        <div class="fulllist" :class="{ active : isExpand}">
          <div class="top">换个睇睇</div>
          <div class="channels-area">
            <div class="channels-bg">
              <div class="channels-list">
                <a v-for="item in classList" :key="item.id"
                   @click="changePanel(item)"
                   :class="{ current: item.isActive }">{{item.name}}</a>
              </div>
            </div>
          </div>
          <div class="actions">
          </div>
        </div>
      </div>
    </div>

    <div v-show="!isPublish" @click="isPublish=true" class="creater-publish v3-1"></div>
    <div v-show="isPublish" @click="isPublish=false" class="creater-publish v4-1"></div>
    <div :class="{ active : isPublish}" class="publish">
      <div @click="toPublish('../publish-post/publish-post')" class="creater-post creater">
        <span class="txt">帖子</span>
        <i class="icon"></i>
      </div>
      <div class="creater-imgtxt creater">
        <span class="txt">文章</span>
        <i class="icon"></i>
      </div>
      <div class="creater-video creater">
        <span class="txt">视频</span>
        <i class="icon"></i>
      </div>
    </div>
  </div>
</template>

<script>
  const defaultItem = [
    {id: 'hot', name: '推荐', left: 0, isActive: true},
    {id: 'follow', name: '关注', left: 0, isActive: false}
  ]

  export default {
    data () {
      return {
        intoId: '',
        scrollLeft: 0,
        classList: [],
        isExpand: false,
        activeItem: null,
        animation: wx.createAnimation(),
        animationData: null,
        isPublish: false
      }
    },
    computed: {},
    components: {},
    methods: {
      changeTab (item) {
        if (item.id === this.activeItem.id) {
          // 刷新
          console.log(1)
        } else {
          this.scrollLeft = item.scrollLeft
          this.activeItem.isActive = false
          item.isActive = true
          this.activeItem = item
        }
      },
      changePanel (item) {
        this.changeTab(item)
        this.expand()
      },
      expand () {
        this.isExpand = !this.isExpand
        const rotate = this.isExpand ? 180 : 0
        this.animation.rotate(rotate).step()
        this.animationData = this.animation.export()
      },
      async getBusinessClassList () {
        const data = await this.$store.dispatch('getBusinessClassList')
        data.forEach(item => {
          item['isActive'] = false
        })
        this.classList = [...defaultItem, ...data]
        this.activeItem = this.classList[0]
        this.initTabLeft()
      },
      initTabLeft () {
        // 计算滚动距离
        const query = wx.createSelectorQuery()
        query.select('.track').boundingClientRect()
        query.selectViewport().scrollOffset()
        query.exec(res => {
          const scrollWidth = res[0].width
          query.selectAll('.scroll-view-item').boundingClientRect(rect => {
            for (let i in rect) {
              const item = rect[i]
              const left = item.left
              this.classList[i]['scrollLeft'] = left > scrollWidth / 2 ? left - scrollWidth / 2 - 13 : 0
            }
          }).exec()
        })
      },
      toPublish (url) {
        wx.navigateTo({url})
        this.isPublish = false
      }
    },
    mounted () {
      this.getBusinessClassList()
    }
  }
</script>
