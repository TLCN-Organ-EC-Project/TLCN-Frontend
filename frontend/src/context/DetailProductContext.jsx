import { createContext, useRef  } from "react";
import { proxy } from "valtio"

export const DetailProductContext = createContext(undefined);

export const DetailProductProvider = ({ children }) => {
    const storeRef = useRef();
    if (!storeRef.current) {
        storeRef.current = proxy({
            productId: null,
            isOpenModalCommet: false,
            provider:null,
            urlImageString:null,
            urlIdSlider:null,
            page_id:1,
        })
    }
    return (
        <DetailProductContext.Provider value={storeRef.current}>
            {children}
        </DetailProductContext.Provider>
    )
}