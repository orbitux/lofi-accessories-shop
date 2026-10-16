'use client'
import React, { useEffect, useState } from 'react'
import { apiUrl } from '../../api/api'
import ProductGallery from './ProductGallery'
import ProductDetails from './ProductDetails'
import ProductVariant from './ProductVariant'
import { getProducts } from '@/api/product'

const ProductsInfo = ({ slug }) => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        const getProductsFunc = async () => {
            const res = await getProducts()
            setProducts(res)
        }
        getProductsFunc()
    }, [])
    const product = products.find(product => product.slug === slug)
    return (
        <div className='container mx-auto grid grid-cols-2 my-10'>
            <div className='border border-mauve-300 rounded p-4 h-full flex flex-col gap-3'>
                <ProductDetails product={product} />
                <ProductVariant product={product} />
            </div>
            <ProductGallery product={product} />
        </div>
    )
}

export default ProductsInfo