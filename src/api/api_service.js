import * as API from './'

export default {
  list: params => {
    return API.GET('/api-base/service', params)
  },
  remove: params => {
    return API.DELETE('/api-base/service', params)
  }
}
