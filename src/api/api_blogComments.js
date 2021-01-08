import * as API from './'

export default {
	list: params => {
	return API.GET('/api-cms/blogComments', params)
},
add: params => {
	return API.POST(`/api-cms/blogComments/save`, params)
},
edit: params => {
	return API.PUT(`/api-cms/blogComments/update`, params)
},
getblogCommentsid:params =>{
	return API.GET('/api-cms/blogComments/listbyblogid',params)
},
    Commentsblogid:params =>{
        return API.GET('/api-cms/blogComments/Commentsblogid',params)
    },
    getblogweiguanid:params =>{
        return API.GET('/api-cms/blog/blogidweiguan',params)
    },
remove: params=>{
	return API.DELETE('/api-cms/blogComments', params)
}
}
