import axios from 'axios'

const instance=axios.create({
    baseURL :'https://gin-ec-clothing.onrender.com/api',
    timeout: 2000,
});

instance.interceptors.request.use(function (config){
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
