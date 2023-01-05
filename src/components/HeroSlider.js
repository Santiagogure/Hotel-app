import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react'

import 'swiper/css'
import 'swiper/css/effect-fade'

import {EffectFade, Autoplay} from 'swiper'

import Img1 from '../assets/img/heroSlider/1.jpg'
import Img2 from '../assets/img/heroSlider/2.jpg'
import Img3 from '../assets/img/heroSlider/3.jpg'


const slides = [
  {
    title: 'Your luxury Hotel for Vacation',
    bg: Img1,
  },
  {
    title: 'Your luxury Hotel for Vacation',
    bg: Img2,
  },
  {
    title: 'Your luxury Hotel for Vacation',
    bg: Img3,
  }
]


const HeroSlider = () => {
  return (
    <Swiper modules={[EffectFade, Autoplay]}
     effect={'fade'}
     loop={true}
     autoplay={{delay: 3000, disableOnInteraction: false}}
     className='heroSlider h-[600px] lg:h-[860px]'
     id="menu_section">
      {slides.map((slide, index) => {
        return <SwiperSlide className='h-full bg-black 
          flex justify-center items-center' 
          key={index}>
            <div className='z-20 text-white text-center'>
          <div className='uppercase font-tertiary tracking-[6px] mb-10'>
            Just enjoy and relax
          </div>
          <h1 className='text-[20px] lg:text-[32px] max-w-[320px] font-primary uppercase tracking-[2px] lg:max-w-[920px]
             mb-20'>
            {slide.title}
            </h1>

          </div>
          <div className='absolute top-0 w-full h-full'>
            <img
             className='object-cover h-full w-full'
             src={slide.bg} 
             alt=''/>
          </div>
             <div className='absolute w-full h-full bg-black/70'></div>
          </SwiperSlide>
      })}
    </Swiper>

  )
};

export default HeroSlider;
