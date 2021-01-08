import * as API from './'

export default {
	list: params => {
	return API.GET('/api-activiti/Activiti/list', params)
},
add: params => {
	return API.POST(`/api-exam/paper/save`, params)
},
edit: params => {
	return API.PUT(`/api-exam/paper/update`, params)
},
  startProcess:params =>{
	return API.GET('/api-activiti/Activiti/startProcess',params)
},
remove: params=>{
	return API.GET('/api-activiti/Activiti/deletedeploy', params)
},
    listtask: params => {
        return API.GET('/api-activiti/task/queryTask', params)
    },
    listapprovetask: params => {
        return API.GET('/api-activiti/task/queryapproveTask', params)
    },
    listhistory: params => {
        return API.GET('/api-activiti/task/queryHistoryTask', params)
    },
    applytask: params => {
        return API.GET(`/api-activiti/task/applyTask`, params)
    },
    getTaskvariables: params => {
        return API.GET(`/api-activiti/task/getTaskvariables`, params)
    },
    approvatask: params => {
        return API.GET(`/api-activiti/task/approveTask`, params)
    },
}
