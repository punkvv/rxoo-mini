import { getToken } from './storage'
import { loginByWeChat } from '@/service/user'

const baseUrl = process.env.BASE_URL
const request = function ({url, data = {}, method = 'GET'}) {
  return new Promise(function (resolve, reject) {
    wx.request({
      url: baseUrl + url,
      data: data,
      method: method.toUpperCase(),
      header: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + getToken()
      },
      success: function (res) {
        const statusCode = res.statusCode
        if (statusCode === 200) {
          resolve(res.data)
        } else if (statusCode === 401) {
          // 未登录
          loginByWeChat().then(() => {
            request({url: url, data: data, method: method})
          })
        } else {
          reject(res.message)
        }
      },
      fail: function (err) {
        reject(err)
      }
    })
  })
}

export default request
