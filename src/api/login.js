import request from '@/utils/request'

export const loginByCode = (code) => request({
  url: 'v1/login/login_by_code',
  method: 'post',
  data: {code: code}
})
