import icons from "../../ultils/icons"
import { ShowModal } from "../../store/app/appSlice"
import withBase from "../../hocs/withBase"
import ModalSearch from "../Modal/ModalSearch"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import path from "../../ultils/path"
const { BsFillTelephoneFill, MdEmail, BsBag, FaUserCircle,FaSearch} = icons
const NavbarLeft = () => {
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const handleSearch =()=>{
    dispatch(ShowModal({
      isShowModal:true, 
      modalChildren:<ModalSearch/>
    }))
  }

  
  return (
    <div className="flex gap-10 pr-5 ">
      <div className="hidden md:block">
        <div className="flex gap-2 items-center">
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
      <div className="relative">
        <BsBag size={26} color="#696969" />
        <span className="text-sm absolute  top-2 ml-2">0</span>
      </div>
      <div onClick={handleSearch}>
        <FaSearch size={22} color="rose" />
      </div>
      <div 
        onClick={()=>navigate(`${path.MEMBER}`)}
      >
        <FaUserCircle size={24} color="rose" />
      </div>
    </div>
  )
}

export default withBase(NavbarLeft)