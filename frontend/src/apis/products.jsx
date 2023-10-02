import axios from "axios";

export const getProductByCategory=(data)=>axios({
    url:'/categories/:id/products',
    method:'get',
    data
})
