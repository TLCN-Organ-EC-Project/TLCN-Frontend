import { useState, useCallback, useEffect, memo } from "react"
import { size } from '../ultils/contants'
import { apiCreateCart } from '../apis/user'
import { useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { useQueryClient } from 'react-query';
import { useProductsById } from "../hooks/useProductsByCategory"
import { useDetailProductStore } from "../hooks/useDetailProductStore";
import { useSnapshot } from "valtio"
import { useParams } from "react-router-dom"
import { formatNumber } from '../ultils/helper'
import Breadcumb from "../components/BreadCumb/Breadcumb"
import CustomSliderProduct from "../components/Slider/CustomSliderProduct"
import SelectQuality from "../components/SelectOption/SelectQuality"
import Button from "../components/Button/Button"
import bang from '../assets/bang.jpg'
import clsx from 'clsx'
import Comment from "../components/comment/Comment"
import path from "../ultils/path"
import Swal from 'sweetalert2'
import LoadingDetail from "../components/Loading/LoadingDetail"

const DetailProduct = () => {
  const detailProductStore = useDetailProductStore();
  const snapDetailProductStore = useSnapshot(detailProductStore)
  const { current } = useSelector(state => state.user)
  const queryClient = useQueryClient();
  const navigate = useNavigate()
  const [first, setfirst] = useState(size[0].size)
  const { pid, productname } = useParams()
  const [quantily, setQuantity] = useState(1)

  const { data: product, isLoading: isFetchingProducts } = useProductsById(pid);
  useEffect(() => {
    if (pid) {
      detailProductStore.productId = pid;
    }
  }, [])
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


  const handleAddtoCart = async () => {
    if (!current) {
      return Swal.fire({
        title: 'Almost...',
        text: 'Please login first!',
        icon: 'info',
        cancelButtonText: 'Not now!',
        showCancelButton: true,
        confirmButtonText: 'Go login page '
      }).then((rs) => {
        if (rs.isConfirmed) navigate(`/${path.LOGIN}`)
      })
    }
    const response = await apiCreateCart(current?.username, {
      product_id: +pid,
      quantity: +quantily,
      size: first,
    })
    if (response?.data) {
      queryClient.invalidateQueries(['products-dataCart', current?.username])
      toast.success('Success')
    } else {
      toast.error('Cant not AddtoCart')
    }
  }
  const handleImageRender =(src)=>{
    if(detailProductStore.urlImageString===null){
      src=product?.product[0]?.product?.thumb
    }else{
      src=detailProductStore.urlImageString
    }
    return src
  }
  return (
    <div className="w-main">
      <div className="border pl-20 h-[50px] flex items-center bg-gray-200">
        <Breadcumb title={productname} />
      </div>
      {
        isFetchingProducts
          ?
          <LoadingDetail />
          :
          <div className=" flex lg:flex-row sm:flex-col">
            <div className="py-4 w-[60%] pl-20">
              <div className="py-3">
                <img src={handleImageRender()} alt="Not Yet" className="lg:w-[700px] lg:h-[700px] object-cover sm:w-[200px] sm:h-[200px]" />
              </div>
                <CustomSliderProduct products={product?.product[0]?.images} />
            </div>
            <div className="mt-7 w-[40%] mr-40">
              <div className="border border-b-gray-300 border-t-gray-100 border-l-gray-100 border-r-gray-100">
                <div className="flex justify-start text-lg font-semibold ">{productname}</div>
                <div className="text-xs font-light py-2">SKU : AKN0175MMDE</div>
              </div>
              <div className="py-2 border border-b-gray-300 border-t-gray-100 border-l-gray-100 border-r-gray-100">
                <div className="text-lg font-semibold">{`${formatNumber(product?.product[0]?.product?.price)}₫`}</div>
              </div>
              <div className='flex justify-start py-3 gap-3 border border-b-gray-300 border-r-gray-100 border-l-gray-100'>
                {product?.product[0]?.stores?.map((el) => (
                  <div
                    onClick={() => { setfirst(el.size) }}
                    key={el.size}
                    className={clsx(
                      { '!bg-gray-800': first === el.size, 'text-white': first === el.size },
                      { 'bg-white': first !== el.size, 'text-gray': first !== el.size },
                      'border', 'flex', 'text-sm', 'transition', 'font-light',
                      'items-center', 'justify-center', 'w-10', 'h-10', 'cursor-pointer'
                    )}
                  >
                    {el.size}
                  </div>
                ))}
              </div>
              <div className="py-4">
                       <SelectQuality select quantily={quantily} handleQuantily={handleQuantily} handleChangeQuantity={handleChangeQuantity} />
              </div>
              <div className="py-5 border border-b-gray-300 border-t-gray-100 border-l-gray-100 border-r-gray-100">
                <Button children='ADD TO CART' buttonAdd handleOnClick={handleAddtoCart} />
              </div>
              <div className="py-5 border border-b-gray-300 border-t-gray-100 border-l-gray-100 border-r-gray-100">
                <div className="text-sm font-medium underline">
                  Description
                </div>
                <ul className="text-sm">
                  <li>
                    + {product?.product[0]?.descriptions_product?.gender}
                  </li>
                  <li>
                    + {product?.product[0]?.descriptions_product?.material}
                  </li>
                  <li>
                    + {product?.product[0]?.descriptions_product?.size}
                  </li>
                  <li>
                    +{product?.product[0]?.descriptions_product?.size_of_model}
                  </li>
                </ul>
              </div>
              <div className="py-5">
                <img src={bang} />
              </div>
            </div>
          </div>
      }
      <div>
        <Comment />
      </div>
    </div>
  )
}
export default memo(DetailProduct)