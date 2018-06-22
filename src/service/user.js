import {
  checkSession,
  login,
  getUserInfo as wxUserInfo,
  showModal,
  openSetting,
  chooseLocation as wxChooseLocation
} from '@/utils/wechat'
import { getToken } from '@/utils/storage'
import store from '@/store'

/**
 * 判断用户是否登录
 */
export async function checkLogin () {
  if (getToken()) {
    const result = await checkSession()
    return result
  } else {
    return false
  }
}

/**
 * 调用微信登录
 */
export async function loginByWeChat () {
  try {
    const res = await login()
    const data = await store.dispatch('loginByCode', res.code)
    return data
  } catch (err) {
  }
}

export function checkUserInfo (path) {
  if (store.getters.userInfo) {
    return store.getters.userInfo
  }
  wx.redirectTo({url: `../login/login?back=${path}`})
  return {}
}

export function isRegister (path) {
  const userInfo = checkUserInfo(path)
  if (userInfo.is_register === 0) {
    showModal({
      content: '请先注册',
      cancelText: '冇去',
      confirmText: '去啦'
    }).then((res) => {
      if (res) {
        wx.redirectTo({url: `../register/register?back=${path}`})
      } else {
        wx.navigateBack()
      }
    })
  }
}

export async function getUserInfo () {
  try {
    if (store.getters.userInfo) {
      return store.getters.userInfo
    }
    const info = await wxUserInfo()
    const data = await store.dispatch('getUserInfo', info)
    return data
  } catch (err) {
    // 拒绝授权处理
    showModal({content: '微信授权后才可继续操作', showCancel: false}).then((res) => {
      if (res) {
        openSetting().then((res) => {
          getUserInfo()
        })
      }
    })
  }
}

export async function chooseLocation () {
  try {
    const info = await wxChooseLocation()
    return info
  } catch (err) {
    if (err.errMsg === 'chooseLocation:fail auth deny') {
      // 拒绝授权
      showModal({content: '请打开使用我的地理位置'}).then((res) => {
        if (res) {
          openSetting().then((authSetting) => {
            if (authSetting['scope.userLocation']) {
              chooseLocation()
            }
          })
        }
      })
    }
  }
}
