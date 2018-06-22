import request from '@/utils/request'

export const getUserInfo = (id, info) => request({
  url: 'v1/users/info',
  data: {id: id, info: info},
  method: 'post'
})
