import * as API from './'

export default {
  list: params => {
    return API.GET('/api-exam/exam', params)
  },
  getToken:params =>{
    return API.GET('/api-exam/exam/getToken',params)
  },
  getpaper:params =>{
    return API.GET('/api-exam/exam/paperQuestion',params)
  },
  getpaperall:params =>{
    return API.GET('/api-exam/exam/paperall',params)
  },
    paperallonline:params =>{
        return API.GET('/api-exam/exam/paperallonline',params)
    },
  getexamonline:params =>{
    return API.GET('/api-exam/exam/examonline',params)
  },
  getTokenout:params =>{
    return API.POSTOUT('/api-exam/exam/export',params)
  },
  remove: params=>{
    return API.DELETE('/api-exam/exam', params)
  },
    listquestion: params => {
        return API.GET('/api-exam/question', params)
    },
    listpaper: params => {
        return API.GET('/api-exam/paper', params)
    },
    listanswer: params => {
        return API.GET('/api-exam/answer', params)
    },
}
