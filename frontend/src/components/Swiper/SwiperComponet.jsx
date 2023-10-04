import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow'
import { Navigation, Pagination,EffectCoverflow } from 'swiper/modules';
import slide_image1 from '../../assets/anh1.jpg'
import slide_image2 from '../../assets/anh2.jpg'
import slide_image3 from '../../assets/anh3.jpg'
import slide_image4 from '../../assets/anh5.jpg'
import slide_image5 from '../../assets/anh4.jpg'
import '../../styles/swiper.css'

const SwiperComponet = () => {
  return (
    <div className="w-main border border-b-gray-300  border-t-gray-100 border-l-gray-100 border-r-gray-100 mb-5">
        <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={'auto'}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            coverflowEffect={
                {
                    rotate:0,
                    stretch:0,
                    depth:100,
                    modifier:2.5
                }
            }
            pagination={{el:'',clickable:true}}
            navigation={{
                nextEl:'.swiper-button-next',
                prevEl:'.swiper-button-prev',
                clickable:true,
            }}
            modules={[EffectCoverflow,Pagination,Navigation]}
            className='swiper_container'
        >
            <SwiperSlide>
                <img src={slide_image1} alt='slide_image'/>
            </SwiperSlide>
            <SwiperSlide>
                <img src={slide_image2} alt='slide_image'/>
            </SwiperSlide>
            <SwiperSlide>
                <img src={slide_image3} alt='slide_image'/>
            </SwiperSlide>
            <SwiperSlide>
                <img src={slide_image5} alt='slide_image'/>
            </SwiperSlide>
            <SwiperSlide>
                <img src={slide_image4} alt='slide_image'/>
            </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default SwiperComponet