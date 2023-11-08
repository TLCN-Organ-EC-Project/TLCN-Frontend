import { Link } from "react-router-dom"
import path from "../../ultils/path"
import withBase from "../../hocs/withBase"
import icons from '../../ultils/icons'
import { useSelector } from "react-redux"
import { logout } from '../../store/user/userSlice'
const {AiOutlineLogout}=icons

const Header = ({dispatch, navigate}) => {
  const {isLoggedIn,current}=useSelector(state=>state.user)
  return (
    <div className="bg-gray-500 w-main  h-7 hidden xl:block py-1">
      <div className="flex justify-between space-x-1 text-sm font-main items-center ">
        <div className="pl-4">
          <span>Saigon : 173 Huynh Van Banh - Dist. Phu Nhuan  - 0773 648 867</span>
        </div>
        {
          isLoggedIn && current ? 
          <div className='flex text-center gap-3 justify-center text-white'>
              <span className="text-blue-300">
                  {`Welcome , ${current?.username}`}
              </span>
              <span 
                  title="Logout"
                  className="pr-5 hover:text-black transition"
                  onClick={()=>{dispatch(logout()),  navigate(`${path.LOGIN}`)}}>
                  <AiOutlineLogout  fontSize={18}/>
                </span>              
              </div> 
              :
              <div className="pr-10">
              <Link to={`/${path.LOGIN}`} className="text-white hover:text-gray-800 transition cursor-pointer">Login and Create account</Link>
            </div>
        }
       
      </div>
    </div>
  )
}

export default withBase(Header)