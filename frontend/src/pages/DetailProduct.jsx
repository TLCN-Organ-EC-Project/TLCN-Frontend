import { useState, useCallback, useEffect, memo } from "react"
import { useParams } from "react-router-dom"
import Breadcumb from "../components/BreadCumb/Breadcumb"
import { getProductById } from '../apis/products'
import { formatNumber } from '../ultils/helper'
import CustomSliderProduct from "../components/Slider/CustomSliderProduct"
import { size } from '../ultils/contants'
import SelectQuality from "../components/SelectOption/SelectQuality"
import { ButtonBack } from "../components/Button/ButtonBack"
import Button from "../components/Button/Button"
import bang from '../assets/bang.jpg'

const DetailProduct = () => {
  const [first, setfirst] = useState(size[0].id)
  const { pid, productname } = useParams()
  const [product, setProduct] = useState(null)
  const [quantily, setQuantity] = useState(1)


  const fecthProductById = useCallback(async (pid) => {
    const response = await getProductById(pid, 1, 10);
    if (response) {
      setProduct(response.data.product);
    }
  }, []);
  const handleQuantily = useCallback((number) => {
    if (!Number(number) || Number(number) < 1) {
      return
    } else {
      setQuantity(number)
    }
  }, [quantily])
  const handleChangeQuantity = useCallback((flag) => {
    if (flag === 'minus' && quantily === 1) return
    if (flag === 'minus') setQuantity(prev => +prev - 1)
    if (flag === 'plus') setQuantity(prev => +prev + 1)
  }, [quantily])
  useEffect(() => {
    fecthProductById(pid)
      , [pid, productname]
  })
  const handleClick=()=>{

  }


  return (
    <div className="w-main">
      <div className="border pl-3 h-[50px] flex items-center">
        <Breadcumb title={productname} />
      </div>
      <div className="flex">
        {product && product.length > 0 && product[0].product && (
          <div className="py-4 w-[60%]">
            <div className="py-3">
              <img src={product[0].product.thumb} alt="Not Yet" className="w-[700px] h-[700px]" />
            </div>
            <CustomSliderProduct products={product[0]?.images} />
          </div>
        )}
        {product && product.length > 0 && product[0].product && (
          <div className="mt-7 w-[40%] mr-40">
            <div className="border border-b-gray-300 border-t-gray-100 border-l-gray-100 border-r-gray-100">
              <div className="flex justify-start text-lg font-semibold ">{productname}</div>
              <div className="text-xs font-light py-2">SKU: AKN0175MMDE</div>
            </div>
            <div className="py-2 border border-b-gray-300 border-t-gray-100 border-l-gray-100 border-r-gray-100">
              <div className="text-lg font-semibold">{`${formatNumber(product[0].product.price)}₫`}</div>
            </div>
              <div className='flex justify-start py-3 gap-3 border border-b-gray-300 border-r-gray-100 border-l-gray-100'>
                {size.map((el) => (
                  <div
                    onClick={() => { setfirst(el.id) }}
                    key={el.id}
                    className={`${first === el.id ? "bg-black text-white" : "hover:text-gray-500"
                      } bg-white text-gray border flex text-sm transition font-light items-center justify-center w-10 h-10 cursor-pointer
                  `}
                  >
                    {el.size}
                  </div>
                ))}
              </div>
              <div className="py-4">
              <SelectQuality quantily={quantily} handleQuantily={handleQuantily} handleChangeQuantity={handleChangeQuantity} />
              </div>
              <div className="py-5 border border-b-gray-300 border-t-gray-100 border-l-gray-100 border-r-gray-100">
                    <Button children='ADD TO CART' buttonAdd handleOnClick={handleClick}/>
              </div>
              <div  className="py-5 border border-b-gray-300 border-t-gray-100 border-l-gray-100 border-r-gray-100">
                   <div className="text-sm font-medium underline">
                      Description
                   </div>
                   <ul className="text-sm">
                    <li>
                     + {product[0].descriptions_product.gender}
                    </li>
                    <li>
                     + {product[0].descriptions_product.material}
                    </li>
                    <li>
                     + {product[0].descriptions_product.size}
                    </li>
                    <li>
                     + {product[0].descriptions_product.size_of_model}
                    </li>
                   </ul>
              </div>
              <div className="py-5">
                      <img src={bang}/>
              </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default memo(DetailProduct)