import { getBusinessClassList } from '@/api/businessClass'

const business = {
  state: {
    classList: []
  },
  mutations: {
    SET_CLASS_LIST: (state, classList) => {
      state.classList = classList
    }
  },
  actions: {
    getBusinessClassList ({commit, state}) {
      return new Promise((resolve, reject) => {
        getBusinessClassList().then(data => {
          commit('SET_CLASS_LIST', data)
          resolve(data)
        }).catch(error => {
          reject(error)
        })
      })
    }
  },
  getters: {
    businessClassList: state => state.classList
  }
}

export default business
