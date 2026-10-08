'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { apiUrl } from '../api'
import ProductsToolbar from './ProductsToolbar'

const ProductsGrid = () => {
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
                console.error('failt to fetch data', error)
            }
        }
        getProducts()
    }, [])
    return (
        <>
            < ProductsToolbar products={products} />
            <div className='grid grid-cols-4 gap-10 mb-10'>
                {products.map((product) => {
                    const productImage = images.find(image => image.product_id === product.id)
                    const productVariant = variants.find(variant => variant.product_id === product.id)

                    return (
                        <div key={product.id} className='bg-mauve-100 w-auto rounded-xl border border-mauve-600'>
                            <div className='flex flex-col items-center gap-5 mb-5'>
                                <img src={productImage.image_url} alt="" className='w-auto h-100 rounded-t-xl' />
                                <span className='text-xl font-bold'>{product.name}</span>
                                <span className='text-lg'>رنگ :

                                    <span className={`${productVariant.color == 'طلایی' ? 'bg-yellow-600' : 'bg-gray-500 text-white'} rounded-full px-2 ms-2`}>
                                        {productVariant.color}
                                    </span>
                                </span>
                                <span>قیمت : <span className='fa-num text-mauve-800 font-bold text-2xl'>{productVariant.price.toLocaleString('fa-IR')}</span> تومان</span>
                                <div className='flex gap-10'>
                                    <button className=' gap-2 bg-mauve-800 text-white px-2 py-1 rounded'>افزودن به سبد خرید</button>
                                    <Link href={'/'} className='bg-mauve-400 px-2 py-1 rounded'>مشاهده محصول</Link>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default ProductsGrid