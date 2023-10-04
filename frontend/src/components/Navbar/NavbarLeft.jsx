import icons from "../../ultils/icons"


const { BsFillTelephoneFill, MdEmail, PiHandbagDuotone, FaUserCircle } = icons

const NavbarLeft = () => {
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
      <div>
        <PiHandbagDuotone size={24} color="#A9A9A9" />
      </div>
      <div>
        <FaUserCircle size={24} color="rose" />
      </div>
    </div>
  )
}

export default NavbarLeft