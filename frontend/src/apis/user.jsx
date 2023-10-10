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
