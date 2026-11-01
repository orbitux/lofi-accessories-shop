'use client'
import React from 'react'
import ProductGallery from './ProductGallery'
import ProductsInfo from './ProductsInfo'

const ProductDetails = ({ product }) => {
    if (!product) return null
    return (
        <div className='flex flex-col gap-5'>
            {/* collection */}
            <div className='text-center'>
                <span className='english-font text-sm tracking-[0.3em] text-mauve-500 uppercase'>lofi collection</span>
            </div>
            {/* Product name */}
            <h1 className='text-2xl md:text-3xl font-bold text-mauve-900 text-center leading-relaxed'>{product.name}</h1>
            {product.description && (
                <div className='flex flex-col gap-2'>
                    <h2 className='text-base font-bold text-mauve-800'>توضیحات محصولات</h2>
                    <p className='text-sm md:text-base leading-8 text-mauve-600'>{product.description}</p>
                </div>
            )}
            <div className='h-px bg-mauve-200' />
        </div>
    )
}

export default ProductDetails