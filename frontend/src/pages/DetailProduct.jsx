import { useState, useCallback, useEffect, memo } from "react"
import { useParams } from "react-router-dom"
import Breadcumb from "../components/BreadCumb/Breadcumb"
import { getProductById } from '../apis/products'
import CustomSlider from "../components/Slider/CustomSlider"
import CustomSliderProduct from "../components/Slider/CustomSliderProduct"

const DetailProduct = () => {
  const { pid, productname } = useParams()
  const [product, setProduct] = useState(null)


  const fecthProductById = useCallback(async (pid) => {
    const response = await getProductById(pid, 1, 10);
    if (response) {
      setProduct(response.data.product);
    }
  }, []);

  useEffect(() => {
    fecthProductById(pid)
      , [pid, productname]
  })



  return (
    <div className="w-main">
      <div className="border pl-3 h-[50px] flex items-center">
        <Breadcumb title={productname} />
      </div>
      {product && product.length > 0 && product[0].product && (
        <div className="py-4 w-[60%]">
          <div className="py-3">
               <img src={product[0].product.thumb} alt="Not Yet" className="w-[700px] h-[700px]"/>
          </div>
              <CustomSliderProduct products={product[0]?.images}/>
        </div>
      )}
    </div>
  )
}

export default memo(DetailProduct)