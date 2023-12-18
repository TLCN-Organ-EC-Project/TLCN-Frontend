import { useQuery } from "react-query"
import { getAllProductByCategory,getAllProductFromCart,getListProvider,getAllOrderByUsername,getProductById, getFeedBackById } from "../services/product-service"

export const useProductsByCategory = (cid,page_id) => {
    return useQuery(["products-data,", cid,page_id], () => getAllProductByCategory(cid,page_id), {
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

export const useFeedBackProductById=(pid)=>{
    return useQuery(["products-dataFeedBack",pid],()=>getFeedBackById(pid),{
        staleTime: 5 * 60 * 1000,
        retry: false
    })
}

export const useGetListProvider=()=>{
    return useQuery(["provider-data"],()=>getListProvider(),{
        staleTime: 5 * 60 * 1000,
        retry: false
    })
}