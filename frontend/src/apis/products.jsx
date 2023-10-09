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
    url:`/find/${keyword}`,
    method:'get',
    params:{
        page_id: pageId,
        page_size: pageSize,
    },
})