import { Link } from "react-router-dom"
import logo from '../../assets/logo2.webp'
import path from "../../ultils/path"
import icons from "../../ultils/icons"
import {ShowModal } from "../../store/app/appSlice"
import ModalSearch from "../Modal/ModalSearch"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import Cart from "../Cart/Cart"
import { useProductsByCart } from "../../hooks/useProductsByCategory"
import { useSelector } from "react-redux"
const { BsFillTelephoneFill, MdEmail, BsBag, FaUserCircle,FaSearch} = icons

const Navbar = () => {
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const {current}=useSelector(state=>state.user)
  const { data: productsData, isLoading: isFetchingProducts } = useProductsByCart(current?.username);
  const handleCart=()=>{
    dispatch(ShowModal({
      isShowModal:true, 
      modalChildren:<Cart/>
    }))
  }

  const handleSearch =()=>{
    dispatch(ShowModal({
      isShowModal:true, 
      modalChildren:<ModalSearch/>
    }))
  }
  return (
    <div className="w-main ">
      <div className="h-[73px] py-3">
        <div className="flex justify-between ">
          <Link to={`/${path.HOME}`}>
            <img src={logo} alt='Huhu Error' className='w-40 h-16 ml-10 ' />
          </Link>
          <div className="flex gap-10 pr-5 ">
            <div className="">
              <div className="sm:flex gap-2 items-center">
                <span>
                  <BsFillTelephoneFill size={15} color="#6495ED" />
                </span>
                <span className="font-semibold text-sm"> (+1800) 000 8808</span>
              </div>
              <div className="text-xs text-gray-700">Mon-Sat 9:00AM - 8:00PM</div>
            </div>
            <div className="hidden md:block">
              <div className="flex gap-2 items-center ">
                <MdEmail size={15} color="#6495ED" />
                <span className="font-semibold text-sm">SUPPORT@TADATHEMES.COM</span>
              </div>
              <div className="text-xs text-gray-700 flex justify-center">Online Support 24/7</div>
            </div>
            <div
              onClick={handleCart}
              className="relative">
              <BsBag size={26} color="#696969" />
              <span className="text-sm absolute  top-2 ml-2">{productsData?.carts?.reduce((sum, el) => sum + Number(el?.cart?.quantity), 0)}</span>
            </div>
            <div
              onClick={handleSearch}>
              <FaSearch size={22} color="rose" />
            </div>
            <div
              onClick={() => navigate(`${path.MEMBER}`)}
            >
              <FaUserCircle size={24} color="rose" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar