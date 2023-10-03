import React,{memo} from 'react'
import Slider from 'react-slick'
import Product from '../Product/Product';


var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    lazyLoad: true,
    slidesToScroll: 1
  };


const CustomSlider = ({products}) => {
 
  return (
    <div className='w-main'>
        {products && <Slider className='custom-slider' {...settings}>
         {products?.map((el,index)=>(
             <Product
             key={index} 
             productData={el} 
             pid={el.id}
             />
             ))}
         </Slider>}
    </div>
  )
}

export default memo(CustomSlider)