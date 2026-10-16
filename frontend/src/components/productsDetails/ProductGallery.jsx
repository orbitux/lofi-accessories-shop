'use client'
import React, { useEffect, useState } from 'react'
import { getProductImages } from '@/api/product'

const ProductGallery = ({ product }) => {
    const [images, setImages] = useState([])
    useEffect(() => {
        const getIMagesFunc = async () => {
            const res = await getProductImages()
            setImages(res)
        }
        getIMagesFunc()
    }, [])
    if (!product) return null
    const imageData = images.find(image => image.product_id === product.id)
    if (!imageData) return null
    return (
        <div className='flex justify-end'>
            <img src={imageData.image_url} alt={imageData.alt_text} className='h-100 w-100 rounded-xl' />
        </div>
    )
}

export default ProductGallery