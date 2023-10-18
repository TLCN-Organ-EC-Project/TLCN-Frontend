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
