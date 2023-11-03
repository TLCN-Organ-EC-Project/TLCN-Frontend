import axios  from "./axios";

export const getProductByCategory=(cid,pageId = 1, pageSize = 10)=>axios({
    url:`/categories/${cid}/products`,
    method:'get',
    params: {
        page_id: pageId,
        page_size: pageSize,
    },
})

export const getProductById=(pid,pageId = 1, pageSize = 10)=>axios({
    url:`/products/${pid}`,
    method:'get',
    params: {
        page_id: pageId,
        page_size: pageSize,
    },
})

export const findProducts=(keyword,pageId = 1, pageSize = 10)=>axios({
    url:`/products/find`,
    method:'get',
    params:{
        keyword:keyword,
        page_id: pageId,
        page_size: pageSize,
    },
})

export const getListProvinces=()=>axios({
    url:'/provinces',
    method:'get',
})

export const getProvinceById=(pid)=>axios({
    url:`/provinces/${pid}`,
    method:'get',
})