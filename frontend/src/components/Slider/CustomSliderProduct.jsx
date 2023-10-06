import React,{memo} from 'react'
import Slider from 'react-slick'
import ProductImage from '../Product/ProductImage';


var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    lazyLoad: true,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
  };



const CustomSliderProduct = ({products}) => {
    return (
        <div className='w-[700px]'>
            {products && <Slider className='custom-slider' {...settings}>
             {products?.map((el,index)=>(
                 <ProductImage
                 key={index} 
                 productData={el?.image} 
                 pid={el?.id}
                 />
                 ))}
             </Slider>}
        </div>
      )
}

export default memo(CustomSliderProduct)