import axios  from "./axios";

export const getProductByCategory=(cid,pageId = 1, pageSize = 10)=>axios({
    url:`/categories/${cid}/products`,
    method:'get',
    params: {
        page_id: pageId,
        page_size: pageSize,
    },
})