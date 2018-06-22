import { loginByCode } from '@/api/login'
import { getUserInfo } from '@/api/user'
import {
  getToken,
  setToken,
  getUserId,
  setUserId,
  getUserInfo as getStorageUserInfo,
  setUserInfo
} from '@/utils/storage'

const user = {
  state: {
    token: getToken(),
    id: getUserId(),
    info: getStorageUserInfo()
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_ID: (state, id) => {
      state.id = id
    },
    SET_INFO: (state, info) => {
      state.info = info
    }
  },
  actions: {
    // 登录
    loginByCode ({commit}, code) {
      return new Promise((resolve, reject) => {
        loginByCode(code).then(data => {
          const token = data.token
          const id = data.id
          commit('SET_TOKEN', token)
          commit('SET_ID', id)
          setToken(token)
          setUserId(id)
          resolve(data)
        }).catch(error => {
          reject(error)
        })
      })
    },
    getUserInfo ({commit, state}, info) {
      return new Promise((resolve, reject) => {
        getUserInfo(state.id, info).then(data => {
          commit('SET_INFO', data)
          setUserInfo(data)
          resolve(data)
        }).catch(error => {
          reject(error)
        })
      })
    }
  },
  getters: {
    userInfo: state => state.info
  }
}

export default user
