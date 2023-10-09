import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { ShowModal } from '../../store/app/appSlice';
import { useState } from 'react';


const ProductModalFind = ({productsData}) => {

    const [first, setfirst] = useState(false)
  const dispatch=useDispatch()
  const navigate=useNavigate();

  const handleItemClick = () => {
    setfirst(true)
    navigate(`/${productsData?.id}/${productsData?.product_name}`);
    dispatch(ShowModal({
      isShowModal: false,
      modalChildren: null,
    }));
    setfirst(false)
  };
  return (
    <div
    onClick={handleItemClick} 
    className='flex cursor-pointer justify-between border border-b-gray-300 border-t-white border-l-white border-r-white'>
        <div>
             <div className='text-xs pb-2'>{productsData?.product_name}</div>
             <div className='text-xs'>{productsData?.price}</div>
        </div>
        <div>
            <img src={productsData?.thumb} className='w-[50px] h-[50px] object-cover'/>
        </div>
    </div>
  )
}
export default ProductModalFind