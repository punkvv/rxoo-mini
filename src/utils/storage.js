import { getStorageSync, setStorageSync } from './wechat'

const TokenKey = 'token'
const UserInfoKey = 'userInfo'
const UserId = 'userId'

export const getToken = () => {
  return getStorageSync(TokenKey)
}

export const setToken = (token) => {
  return setStorageSync(TokenKey, token)
}

export const getUserInfo = () => {
  return getStorageSync(UserInfoKey)
}

export const setUserInfo = (info) => {
  return setStorageSync(UserInfoKey, info)
}

export const getUserId = () => {
  return getStorageSync(UserId)
}

export const setUserId = (id) => {
  return setStorageSync(UserId, id)
}

