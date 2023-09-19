
const Header = () => {
  return (
    <div className="bg-header w-main  h-7 hidden xl:block py-1">
      <div className="flex justify-between space-x-1 text-sm font-main items-center ">
        <div className="pl-4">
          <span>Saigon : 173 Huynh Van Banh - Dist. Phu Nhuan  - 0773 648 867</span>
        </div>
        <div className="pr-10">
          <span className="text-white hover:text-gray-800 transition cursor-pointer">Login and Create account</span>
        </div>
      </div>
    </div>
  )
}

export default Header