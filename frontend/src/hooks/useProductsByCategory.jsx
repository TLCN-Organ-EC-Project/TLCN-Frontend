import { useQuery } from "react-query"
import { getAllProductByCategory,getAllProductFromCart,getAllOrderByUsername,getProductById } from "../services/product-service"

export const useProductsByCategory = (cid) => {
    return useQuery(["products-data,", cid], () => getAllProductByCategory(cid), {
        staleTime: 5 * 60 * 1000,
        retry: false
    })
}

export const useProductsByCart=(username)=>{
    return useQuery(["products-dataCart", username], () => getAllProductFromCart(username), {
        staleTime: 5 * 60 * 1000,
        retry: false
    })
}

export const useListOrderByUserName= (username) => {
    return useQuery(["order-data,", username], () => getAllOrderByUsername(username), {
        staleTime: 5 * 60 * 1000,
        retry: false
    })
}

export const useProductsById = (pid) => {
    return useQuery(["products-dataByID", pid], () => getProductById(pid), {
        staleTime: 5 * 60 * 1000,
        retry: false
    })
}