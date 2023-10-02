import axios from 'axios'

const instance=axios.create({
    baseURL :'https://gin-ec-clothing.onrender.com/api',
    timeout: 2000,
    headers: {'X-Requested-With': 'XMLHttpRequest'},
});

instance.interceptors.request.use(function (config){
    config.headers['Accept'] = 'application/json';
    config.headers['Content-Type'] = 'application/json';
    return config;
},function(error){
    return Promise.reject(error);
})


instance.interceptors.response.use(function(response){
    return response?.data;

}, function(error){
    return error?.response?.data;
})

export default instance;
