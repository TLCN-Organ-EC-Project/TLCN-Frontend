import Logo from "./Logo"
import NavbarLeft from "./NavbarLeft"

const Navbar = () => {
  return (
    <div className="w-main shadow-lg">
        <div className="h-[73px] py-3">
          <div className="flex justify-between ">
            <Logo/>
            <NavbarLeft/>
          </div>
        </div>
    </div>
  )
}

export default Navbar