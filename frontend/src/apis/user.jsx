import axios from "./axios";

export const apiResgister = (data) => axios({
    url: '/register',
    method: 'post',
    data
})

export const apiLogin = (data) => axios({
    url: '/login',
    method: 'post',
    data
})

export const apiUpdateUser = (username, data) => axios({
    url: `/users/${username}`,
    method: 'put',
    data
})

export const apiForgotPassword = (data) => axios({
    url: '/forgotpassword',
    method: 'post',
    data
})

export const apiResetPassword = (data) => axios({
    url: '/resetpassword',
    method: 'post',
    data
})

export const apiCreateCart = (username, data) => axios({
    url: `/users/${username}/carts`,
    method: 'post',
    data
})

export const getListCart = (username, pageId = 1, pageSize = 10) => axios({
    url: `/users/${username}/carts`,
    method: 'get',
    params: {
        page_id: pageId,
        page_size: pageSize,
    },
})

export const deleteItemCart = (username, cid) => axios({
    url: `/users/${username}/carts/${cid}`,
    method: 'delete',
})
export const deleteOrder=(username, bookingid)=>axios({
    url:`/users/${username}/orders/${bookingid}/cancel`,
    method:'delete',
})

export const createOrder = (username, data) => axios({
    url: `/users/${username}/orders`,
    method: 'post',
    data
})

export const deleteAllCart = (username) => axios({
    url: `/users/${username}/carts`,
    method: 'delete',
})

export const createFeedback = (username, pid, data) => axios({
    url: `/users/${username}/feedbacks/${pid}`,
    method: 'post',
    data
})

export const deleteFeedBack=(id,username,productCommented)=>axios({
    url:`/users/${username}/feedbacks/${productCommented}/${id}`,
    method:'delete'
})

export const apiRefreshToken = (data)=>axios({
    url:'/tokens/renew_access',
    method:'post',
    data
})