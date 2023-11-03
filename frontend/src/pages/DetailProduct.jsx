import { useState, useCallback, useEffect, memo } from "react"
import { useParams } from "react-router-dom"
import Breadcumb from "../components/BreadCumb/Breadcumb"
import { formatNumber } from '../ultils/helper'
import CustomSliderProduct from "../components/Slider/CustomSliderProduct"
import { size } from '../ultils/contants'
import SelectQuality from "../components/SelectOption/SelectQuality"
import Button from "../components/Button/Button"
import bang from '../assets/bang.jpg'
import clsx from 'clsx'
import Swal from 'sweetalert2'
import { apiCreateCart } from '../apis/user'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom"
import path from "../ultils/path"
import { toast } from "react-toastify"
import { useQueryClient } from 'react-query';
import LoadingDetail from "../components/Loading/LoadingDetail"
import { useProductsById } from "../hooks/useProductsByCategory"
import Comment from "../components/comment/Comment"
import { useDetailProductStore } from "../hooks/useDetailProductStore";
import { useSnapshot } from "valtio"

const DetailProduct = () => {
  const detailProductStore = useDetailProductStore();
  const snapDetailProductStore = useSnapshot(detailProductStore)

  const { current } = useSelector(state => state.user)
  const queryClient = useQueryClient();
  const navigate = useNavigate()
  const dispatch = useDispatch()
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
  return (
    <div className="w-main">
      <div className="border pl-3 h-[50px] flex items-center bg-gray-200">
        <Breadcumb title={productname} />
      </div>
      {
        isFetchingProducts
          ?
          <LoadingDetail />
          :
          <div className="flex">
            <div className="py-4 w-[60%]">
              <div className="py-3">
                <img src={product?.product[0]?.product?.thumb} alt="Not Yet" className="w-[700px] h-[700px]" />
              </div>
              <CustomSliderProduct products={product?.product[0]?.images} />
            </div>
            <div className="mt-7 w-[40%] mr-40">
              <div className="border border-b-gray-300 border-t-gray-100 border-l-gray-100 border-r-gray-100">
                <div className="flex justify-start text-lg font-semibold ">{productname}</div>
                <div className="text-xs font-light py-2">SKU: AKN0175MMDE</div>
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
                    + {product?.product[0]?.descriptions_product?.size_of_model}
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