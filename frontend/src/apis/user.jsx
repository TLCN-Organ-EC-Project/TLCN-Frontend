import axios  from "./axios";

export const apiResgister=(data)=>axios({
    url:'/register',
    method:'post',
    data
})

export const apiLogin =(data)=>axios({
    url:'/login',
    method:'post',
    data
})

export const apiUpdateUser=(username,data)=>axios({
    url: `/users/${username}`,
    method:'put',
    data
})

export const apiForgotPassword =(data)=>axios({
    url:'/forgotpassword',
    method:'post',
    data
})

export const apiResetPassword =(data)=>axios({
    url:'/resetpassword',
    method:'post',
    data
})

export const apiCreateCart=(username,data)=>axios({
    url: `/users/${username}/carts`,
    method:'post',
    data
})