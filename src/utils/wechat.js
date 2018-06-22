/**
 * 小程序
 */

export function login () {
  return new Promise(function (resolve, reject) {
    wx.login({
      success: function (res) {
        if (res.code) {
          resolve(res)
        } else {
          reject(res)
        }
      },
      fail: function (err) {
        reject(err)
      }
    })
  })
}

export function getUserInfo (withCredentials = true) {
  return new Promise(function (resolve, reject) {
    wx.getUserInfo({
      withCredentials: withCredentials,
      success: function (res) {
        resolve(res)
      },
      fail: function (err) {
        reject(err)
      }
    })
  })
}

/**
 * 检查微信会话是否过期
 */
export function checkSession () {
  return new Promise(function (resolve, reject) {
    wx.checkSession({
      success: function () {
        resolve(true)
      },
      fail: function () {
        resolve(false)
      }
    })
  })
}

export const getStorageSync = (key) => {
  return wx.getStorageSync(key)
}

export const setStorageSync = (key, data) => {
  wx.setStorageSync(key, data)
}

export const showModal = ({title = '', content = '', showCancel = true, cancelText = '取消', cancelColor = '#000000', confirmText = '确认', confirmColor = '#3CC51F'}) => {
  return new Promise(function (resolve, reject) {
    wx.showModal({
      title: title,
      content: content,
      showCancel: showCancel,
      cancelText: cancelText,
      cancelColor: cancelColor,
      confirmText: confirmText,
      confirmColor: confirmColor,
      success: function (res) {
        if (res.confirm) {
          resolve(true)
        } else if (res.cancel) {
          resolve(false)
        }
      },
      fail: function (err) {
        reject(err)
      }
    })
  })
}

/**
 * 调起客户端小程序设置界面，返回用户设置的操作结果。
 */
export const openSetting = () => {
  return new Promise(function (resolve, reject) {
    wx.openSetting({
      success: (res) => {
        resolve(res.authSetting)
      },
      fail: (err) => {
        reject(err)
      }
    })
  })
}

/**
 * 打开地图选择位置
 */
export const chooseLocation = () => {
  return new Promise(function (resolve, reject) {
    wx.chooseLocation({
      success: (res) => {
        resolve(res)
      },
      fail: (err) => {
        reject(err)
      }
    })
  })
}
