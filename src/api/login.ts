import request from "@/utils/request";

export function loginUser (data: any) {
    return request.post('/users/login', data)
}

/**
 * @description 获取当前用户详情
 */
export function getUserDetailByToken () {
    return request.get('/users/detail')
}
