import axios from 'axios'
const instance=axios.create({
    baseURL :'https://gin-ec-clothing.onrender.com/api',
    timeout: 2000,
});
instance.interceptors.request.use(function (config){
    config.headers['Accept'] = 'application/json';
    config.headers['Content-Type'] = 'application/json';
    let localStorageData = window.localStorage.getItem('persist:shop/user')
    if(localStorageData && typeof localStorageData==='string') 
    {
        localStorageData=JSON.parse(localStorageData)
        const accessToken=JSON.parse(localStorageData?.token)
        config.headers={authorization:`Bearer ${accessToken}`}
        return config    
    }else return config;           
},function(error){
    return Promise.reject(error);
})
instance.interceptors.response.use(function(response){
    return response;
}, function(error){
    return error?.response?.data;
})
export default instance;
