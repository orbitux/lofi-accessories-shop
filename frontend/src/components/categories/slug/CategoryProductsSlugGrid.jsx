'use client'
import { getProductImages, getProductsByCategory, getProductVariants } from '@/api/product'
import ProductCard from '@/components/products/ProductsCard'
import ProductsEmptyState from '@/components/products/ProductsEmptyState'
import ProductSkeleton from '@/components/products/ProductSkeleton'
import ProductsToolbar from '@/components/products/ProductsToolbar'
import React, { useEffect, useState } from 'react'

const CategoryProductsSlugGrid = ({ slug }) => {
    const [products, setProducts] = useState([])
    const [images, setImages] = useState([])
    const [variants, setVariants] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const getCategoryProducts = async () => {
            try {
                setLoading(true)
                const [productRes, imageRes, variantRes] = await Promise.all([
                    getProductsByCategory(slug),
                    getProductImages(),
                    getProductVariants()
                ])
                setProducts(productRes)
                setImages(imageRes)
                setVariants(variantRes)
            } catch (error) {
                console.error('Failed to fetch category products:', error);

            } finally {
                setTimeout(() => {
                    setLoading(false)
                }, 2000)
            }
        }
        getCategoryProducts()
    }, [slug])
    if (loading) {
        return (
            <div className='container mx-auto px-4'>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-10'>
                    {Array.from({ length: 8 }).map((_, index) => (
                        <ProductSkeleton key={index} />
                    ))}
                </div>
            </div>
        )
    }
    if (products.length === 0) {
        return (
            <ProductsEmptyState title={'محصولی در این دسته وجود ندارد!'}/>
        )
    }
    return (
        <div className='container mx-auto px-4'>
            <ProductsToolbar products={products} />

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-10'>
                {products.map(product => {
                    const productImage = images.find(image => image.product_id === product.id)
                    const productVariant = variants.find(variant => variant.product_id === product.id)
                    return (
                        <ProductCard key={product.id} product={product} productImage={productImage} productVariant={productVariant} />
                    )
                })}
            </div>
        </div>
    )
}

export default CategoryProductsSlugGrid