'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from "swiper/modules";
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import Image from 'next/image';

const HeroSlider = () => {
    const images = [
        '/images/sliders/lofi-slider-butterfly-necklace.png',
        '/images/sliders/lofi-slider-charm-necklaces.png',
        '/images/sliders/lofi-slider-heart-necklace.png',
        '/images/sliders/lofi-slider-rings.png'
    ]
    return (
        <Swiper
            modules={[ Autoplay]}
            autoplay={{ delay: 3000 }}
            loop={true}
            spaceBetween={20}
            slidesPerView={1}
            className='h-[calc(100dvh-80px)]'
        >
            {images.map((image, index) => (
                <SwiperSlide key={index} >
                    <img src={image} alt={`Slide ${index + 1}`} className='w-full h-full object-cover' />
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default HeroSlider