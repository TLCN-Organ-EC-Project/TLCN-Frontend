import Logo from "./Logo"

const Navbar = () => {
  return (
    <div className="w-main">
        <div className="w-[73px] flex justify-between items-center py-3">
            <Logo/>
        </div>
    </div>
  )
}

export default Navbar