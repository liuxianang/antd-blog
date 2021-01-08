import * as API from './'

export default {
  list: params => {
    return API.GET('/api-admin/common/generator/list', params)
  },
  generation:params =>{
    return API.GET('/api-admin/common/generator/code/cms_file',params)
  },
  getblogall:params =>{
    return API.GET('/api-cms/blog/blogall',params)
  },
  getblogid:params =>{
    return API.GET('/api-cms/blog/blogid',params)
  },
  remove: params=>{
    return API.DELETE('/api-cms/blog', params)
  }
}
