import axios from 'axios'
import { API_PROD, API_DEV } from '@/constant'
axios.defaults.baseURL = process.env.NODE_ENV === 'development'
  ? API_DEV
  : API_PROD
export default {
  API_POST: ({dispatch }, { url, data, headers }) => {
    return new Promise((resolve, reject) => {
      data = data || {}
      headers = headers || {}
      axios.post(url, data, headers)
        .then((response) => {
          resolve(response)
        })
        .catch(error => {
          let payload = { reject, error }
          dispatch('STATUS_CODE', payload)
        })
    })
  },

  API_FETCH: ({ dispatch }, { url, param, headers }) => {
    return new Promise((resolve, reject) => {
      if (param) {
        axios.get(url, { param: param }, headers)
          .then(response => { resolve(response) })
          .catch(error => { reject(error.response.data) })
        return false
      }
      axios.get(url, headers)
        .then(response => { resolve(response) })
        .catch(error => {
          let payload = { reject, error }
          dispatch('STATUS_CODE', payload)
        })
    })
  },

  STATUS_CODE: ({ state }, { reject, error }) => {
    let status = error.response.status
    let response = error.response.data
    let code = state.errorCode
    switch (status) {
      case 400: reject(code.fourHundred)
        break
      case 401: reject(response)
        break
      case 403: reject(code.four03)
        break
      case 404: reject(code.four04)
        break
      case 405: reject(code.four05)
        break
      case 409: reject(response)
        break
      case 415: reject(code.four15)
        break
      case 429: reject(code.four29)
        break
      case 500: reject(code.fiveHundred)
        break
      case 501: reject(code.five01)
        break
      case 503: reject(code.five03)
        break
      default:
        reject(error.response.data) // 422
    }
  }
}
