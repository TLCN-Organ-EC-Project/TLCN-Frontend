import logo from '../../assets/logo2.webp'
import { Link } from 'react-router-dom'
import Path from '../../ultils/path'
const Logo = () => {
  return (
    <Link to={`/${Path.HOME}`}>
        <img src={logo} alt='Huhu Error' className='w-[190px] h-[70px] ml-10 hidden md:block'/>
    </Link>
  )
}

export default Logo