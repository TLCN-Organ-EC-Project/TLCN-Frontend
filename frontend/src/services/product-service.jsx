import axios from "../apis/axios";

export const getAllProductByCategory = async (cid) => {
    try {
        const data = await axios({
            url: `/categories/${cid}/products`,
            method: 'get',
            params: {
                page_id: 1,
                page_size: 10,
            }
        }).then((res) => res?.data)
        return data;
    } catch (error) {
        throw Error(`Failed to fetch products by category: ${error}`);
    }
}

export const getAllProductFromCart = async (username) => {
    try {
        const data = await axios({
            url: `/users/${username}/carts`,
            method: 'get',
            params: {
                page_id: 1,
                page_size: 10,
            }
        }).then((res) => res?.data)
        return data;
    } catch (error) {
        throw Error(`Failed to fetch products from cart : ${error}`);
    }
}

export const getAllOrderByUsername = async (username) => {
    try {
        const data = await axios({
            url: `/users/${username}/orders`,
            method: 'get',
            params: {
                page_id: 1,
                page_size: 10,
            }
        }).then((res) => res?.data)
        return data;
    } catch (error) {
        throw Error(`Failed to fetch products by category: ${error}`);
    }
}

export const getProductById = async (pid) => {
    try {
        const data = await axios({
            url: `/products/${pid}`,
            method: 'get',
            params: {
                page_id: 1,
                page_size: 10,
            }
        }).then((res) => res?.data)
        return data;
    } catch (error) {
        throw Error(`Failed to fetch products by id: ${error}`);
    }
}

export const getFeedBackById=async (pid)=>{
    try {
        const data = await axios({
            url: `/products/${pid}/feedbacks`,
            method: 'get',
            params: {
                page_id: 1,
                page_size: 10,
            }
        }).then((res) => res?.data)
        return data;
    } catch (error) {
        throw Error(`Failed to fetch feedbacks product by id: ${error}`);
    }
}

export const getListProvider =async ()=>{
    try{
        const data=await axios({
            url:`/provinces`,
            method:'get',
        }).then((res)=>res?.data)
        return data;
    }catch (error){
        throw new Error(`Failded to fetch provider : ${error}`)
    }
}