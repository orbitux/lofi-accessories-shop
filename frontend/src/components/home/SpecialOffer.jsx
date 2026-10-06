'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { BiSolidOffer } from "react-icons/bi";
import { apiUrl } from '../api';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
const SpecialOffer = () => {
    const [products, setProducts] = useState([])
    const [images, setImages] = useState([])
    const [variants, setVariants] = useState([])
    useEffect(() => {
        const getProducts = async () => {
            try {
                const [productRes, imageRes, variantRes] = await Promise.all([
                    apiUrl.get('/products'),
                    apiUrl.get('/product-images'),
                    apiUrl.get('/product-variants')
                ])
                setProducts(productRes.data)
                setImages(imageRes.data)
                setVariants(variantRes.data)
            } catch (error) {
                console.error('Error fetching data:', error)
            }
        }
        getProducts()
    }, [])
    return (
        <div className='grid grid-cols-2 container mx-auto'>
            <div className='flex flex-col items-center gap-10 '>
                <span className='text-6xl text-olive-800'>special offer</span>
                <div className='flex items-center'>
                    <span className='text-4xl'>تا <span className='text-5xl font-bold text-olive-700'>30%</span>تخفیف</span>
                    <BiSolidOffer size={32} />
                </div>
                <span className='text-2xl'>روی محصولات منتخب لوفی</span>
                <div className='flex justify-center'>
                    <Link href={'/'} className='bg-mauve-600 rounded-full text-white border border-mauve-800 px-3 py-2'>مشاهده محصولات تخفیفی</Link>
                </div>
            </div>
            <div className='border border-mauve-400 bg-mauve-300 rounded-2xl w-full '>
                <Swiper
                    modules={[Autoplay, Pagination]}
                    pagination={{ clickable: true }}
                    direction='vertical'
                    autoplay={{ delay: 3000 }}
                    loop={true}
                    spaceBetween={20}
                    slidesPerView={2}
                    className='h-125'
                >

                    {products.map((product) => {
                        const productImage = images.find(image => image.product_id === product.id)
                        const productVariant = variants.find(variant => variant.product_id === product.id)

                        return (
                            <SwiperSlide key={product.id}>
                                <div className=' flex justify-center items-center h-full w-full'>
                                    <div className='relative  bg-mauve-400 flex flex-col items-center justify-center w-1/2 rounded-xl py-2'>
                                        <div className='absolute right-0 top-0 bg-red-600 text-white rounded-full p-1 fa-num'>30% تخفیف</div>
                                        <img src={productImage?.image_url} alt={productImage?.image_url} className='h-full w-20 object-contain rounded' />
                                        <span>{product.name}</span>
                                        <div className='flex flex-col items-center justify-center'>
                                            <span>رنگ : <span className='font-bold text-lg'>{productVariant?.color}</span></span>
                                            <span>قیمت : <span className='fa-num text-mauve-800 font-bold text-xl'>{productVariant?.price.toLocaleString('fa-IR')}  </span> تومان </span>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
        </div>
    )
}

export default SpecialOffer

// absolute top-0 right-10