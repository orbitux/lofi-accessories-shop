'use client'
import React from 'react'
import ProductGallery from './ProductGallery'
import ProductsInfo from './ProductsInfo'

const ProductDetails = ({ product }) => {
    console.log(product);
    if (!product) return null
    return (
        <div>
            <div>
                <h2 className='uppercase english-font text-center text-2xl font-bold text-mauve-800'>lofi collection</h2>
                <div className='flex flex-col gap-3 mt-3'>
                    <span>نام محصول : <span className='text-mauve-700 text-xl font-bold'>{product.name}</span></span>
                    <span>توضیحات: <span className='text-mauve-700 text-xl font-bold'>{product.description}</span></span>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails