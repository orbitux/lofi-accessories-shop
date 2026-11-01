'use client'
import { getProductBySlug } from '@/api/product'
import React, { useEffect, useState } from 'react'
import ProductDetails from './ProductDetails'
import ProductVariant from './ProductVariant'
import ProductGallery from './ProductGallery'
import ProductDetailsSkeleton from './ProductDetailsSkeleton'
import RelatedProducts from './RelatedProducts'

const ProductsInfo = ({ product }) => {
    return (
        <div className='container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 my-10 px-4'>
            <div className='border border-mauve-200 rounded-2xl p-6'>
                <ProductDetails product={product} />
                <ProductVariant product={product} />
            </div>
            <ProductGallery product={product} />
            <RelatedProducts product={product} />
        </div>
    )
}

export default ProductsInfo