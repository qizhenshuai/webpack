import request from '@/utils/request'

export function fetchUser(id) {
    return request({ url: `/user/${id}` })
}

export function fetchUserList(query) {
    return request({
        url: '/user/list',
        method: 'get',
        params: query
    })
}
