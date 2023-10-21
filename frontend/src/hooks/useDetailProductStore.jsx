import { useContext } from "react"
import { DetailProductContext } from "../context/DetailProductContext";

export const useDetailProductStore = () => {
    const store = useContext(DetailProductContext)

    if (!store) {
        throw new Error("Missing DetailProductProvider")
    }

    return store;
}