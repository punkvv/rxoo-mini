import request from '@/utils/request'

export const getBusinessClassList = (param = null) => request({
  url: 'v1/business_class',
  data: param,
  method: 'get'
})
