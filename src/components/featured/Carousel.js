import React from 'react';
import Slider from 'react-slick';
import Slide_one from '../../resources/images/E1.jpg';
import Slide_two from '../../resources/images/E2.jpg';
import Slide_three from '../../resources/images/E3.jpg';

const Carousel = ()=>{
    const settings ={
        dots:false,
        infinite:true,
        autoplay:true,
        speed:500
    };
    return (
        <div className="carusel_wrapper"
         style={{
             height:`${window.innerHeight}px`,
             overflow:'hidden'
            }}>
                <Slider {...settings}>
                    <div>
                        <div className='carusel_image' style={{
                            background:`url(${Slide_one})`,
                            height:`${window.innerHeight}px`
                        }} />
                    </div>
                    <div>
                        <div className='carusel_image' style={{
                            background:`url(${Slide_two})`,
                            height:`${window.innerHeight}px`
                        }} />
                    </div>
                    <div>
                        <div className='carusel_image' style={{
                            background:`url(${Slide_three})`,
                            height:`${window.innerHeight}px`
                        }} />
                    </div>
                </Slider>
                
            </div>
        
    )
}
export default Carousel;