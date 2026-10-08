'use client'
import axios from 'axios'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { TiTick } from "react-icons/ti";
import { FcCancel } from "react-icons/fc";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import '../../styles/slider.css'
import { apiUrl } from '../api';
const ProductCartSection = () => {
    const [products, setProducts] = useState([])
    const [images, setImages] = useState([])
    const [variants, setVariants] = useState([])
    useEffect(() => {
        const getData = async () => {
            try {
                const [productsRes, imagesRes, variantsRes] = await Promise.all([
                    apiUrl.get('/products'),
                    apiUrl.get('/product-images'),
                    apiUrl.get('/product-variants')
                ])
                setProducts(productsRes.data)
                setImages(imagesRes.data)
                setVariants(variantsRes.data)
            } catch (error) {
                console.error('Error fetching data:', error)
            }
        }
        getData()
    }, [])
    return (
        <div className='bg-mauve-300 relative rounded-2xl my-32'>
            <div className='bg-mauve-300 absolute ms-2 flex flex-col justify-center rounded-2xl my-48'>
                <p className='text-2xl'>محصولات ویژه <span className='text-mauve-600 text-3xl'>لوفی</span></p>
                <Link href={'/'} className='flex items-center gap-2 mt-5'>
                    <p>مشاهده محصولات بیشتر</p>
                    <IoMdArrowRoundBack />
                </Link>
            </div>
            <Swiper
                modules={[ Pagination, Autoplay,]}
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000, disableOnInteraction: true }}
                speed={600}
                loop={true}
                spaceBetween={10}
                slidesPerView={3}
                grabCursor
                style={{
                    "--swiper-navigation-color": "#3f3a36",
                    "--swiper-pagination-color": "#3f3a36"
                }}

                className='product-slider w-2/3'
            >
                <div>
                    {products.map(product => {
                        const productImage = images.find(image => image.product_id == product.id)
                        const productVariant = variants.find(variant => variant.product_id === product.id)

                        return (
                            <SwiperSlide key={product.id}>
                                <div className='p-4'>
                                    <div className='bg-white flex flex-col justify-center rounded-2xl w-70 h-full p-4'>
                                        <div className=' w-full'>
                                            <img src={productImage?.image_url} alt={productImage?.image_url || product.name} className='w-full h-70 rounded-lg' />
                                        </div>
                                        <div className='flex flex-col gap-10'>
                                            <p className='text-2xl text-mauve-900 font-bold'>{product.name}</p>
                                        </div>
                                        <div className='bg-yellow-700 rounded-4xl text-sm text-white text-center absolute top-0 px-2 py-1'>
                                            <span>محصول ویژه!</span>
                                        </div>
                                        <div className='flex flex-col gap-2 mt-10'>
                                            <span>رنگ : {productVariant?.color}</span>
                                            <span className='fa-num'>موجودی: {productVariant?.stock} عدد</span>
                                            <span>قیمت : <span className='fa-num font-bold'>{productVariant?.price.toLocaleString('fa-IR')}</span> <span className='text-xl font-bold text-mauve-600'>تومان</span></span>
                                            {productVariant?.stock > 0 ? <div className='flex items-center'>
                                                <TiTick size={22} className='text-blue-500' />
                                                <span>موجود در انبار</span>
                                            </div> :
                                                <div className='flex items-center'>
                                                    <FcCancel size={22} />
                                                    <span>ناموجود</span>
                                                </div>
                                            }
                                        </div>
                                        <Link href={`/products/${product.slug}`} className='bg-mauve-600 border border-mauve-600 rounded-2xl py-2 flex justify-center mt-10 text-white hover:shadow-mauve-900 hover:shadow-2xl hover:text-mauve-600 hover:bg-white hover:scale-90 transition-all'>
                                            <span>اطلاعات بیشتر محصول</span>
                                        </Link>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    })}

                </div>
            </Swiper>
        </div>


    )
}

export default ProductCartSection