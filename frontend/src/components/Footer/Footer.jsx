import icons from '../../ultils/icons'
import bcn from '../../assets/bct.png'
import TopFooter from './TopFooter'

const {BsFacebook,AiFillGoogleCircle,AiFillInstagram,BsTiktok,MdEmail,BsFillTelephoneFill}=icons

const Footer = () => {
  return (
    <div className="w-main mt-5 border border-t-gray-300 ">
      <TopFooter/>
       <div className="flex justify-around mt-2">
          <div>
            <h3 className='text-sm uppercase tracking-wider mb-5 relative leading-6'>KENTA VN</h3>
            <div className='flex flex-col gap-2'>
            <div className='text-xs text-gray-800'>- Giới thiệu</div>
            <div className='text-xs text-gray-800'>- Kiểm tra đơn hàng </div>
            <div className='text-xs text-gray-800'>- Cách chọn size</div>
            <div className='text-xs text-gray-800'>- Thông tin liên hệ</div>
            <div className='text-xs text-gray-800'>- Câu hỏi thường gặp</div>
            <div className='text-xs text-gray-800'>- Hướng dẫn bảo quản</div>
          </div>
          </div>
          <div>
            <h3 className='text-sm uppercase tracking-wider mb-5 relative leading-6'>CHÍNH SÁCH</h3>
            <div className='flex flex-col gap-2'>
            <div className='text-xs text-gray-800'>- Hướng dẫn mua hàng</div>
            <div className='text-xs text-gray-800'>- Khách hàng thân thiết</div>
            <div className='text-xs text-gray-800'>- Chính sách đổi hàng</div>
            <div className='text-xs text-gray-800'>- Chính sách bảo mật</div>
            <div className='text-xs text-gray-800'>- Đối tác xuất bản</div>
            <div className='text-xs text-gray-800'>- Bán hàng liên kết (Affiliate)</div>
            </div>
          </div>
          <div>
            <h3 className='text-sm uppercase tracking-wider mb-5 relative leading-6'>KẾT NỐI VỚI KENTA</h3>
            <div className='flex items-center gap-3'>
              <span><BsFacebook size={24}/></span>
              <span><AiFillGoogleCircle size={24}/></span>
              <span><AiFillInstagram size={24}/></span>
              <span><BsTiktok size={24}/></span>
            </div>
            <img src={bcn} className='w-[150px] h-[57px] object-contain mt-4'/>
          </div>
          <div>
            <h3 className='text-sm uppercase tracking-wider mb-5 relative leading-6'>THÔNG TIN CỬA HÀNG</h3>
            <div className='flex items-center gap-2 mb-2'>
             <span><BsFillTelephoneFill size={22}/></span>
             <span className='text-sm text-gray-800' >Hoiline : (028) 7300 6200</span>
            </div>
            <div className='flex items-center gap-2'>
             <span><MdEmail size={22}/></span>
             <span className='text-sm text-gray-800'>Mail: kentasale@gmail.com</span>
            </div>
           
          </div>
       </div>
    </div>
  )
}

export default Footer