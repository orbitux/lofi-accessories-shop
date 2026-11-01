'use client'

import { useEffect, useState } from 'react'
import { getProductImages, getProductsByCategory, getProductVariantsByProduct } from '@/api/product'
import ProductVariant from './ProductVariant'
import ProductSkeleton from '../products/ProductSkeleton'
import ProductCard from '../products/ProductsCard'

const RelatedProducts = ({ product }) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const getRelatedProducts = async () => {
            try {
                setLoading(true)

                const res = await getProductsByCategory(
                    product.category_slug
                )

                const relatedProducts = res.filter(
                    item => item.id !== product.id
                ).slice(0, 4)
                const productsWithDetails = await Promise.all(
                    relatedProducts.map(async product => {
                        const [images, variants] = await Promise.all([
                            getProductImages(),
                            getProductVariantsByProduct(product.id)
                        ])
                        const productImages = images.filter(image => image.product_id === product.id)
                            .sort((a, b) => a.sort_order - b.sort_order)
                        return {
                            product,
                            productImage: productImages[0] || null,
                            ProductVariant: variants[0] || null
                        }
                    })
                )
                setProducts(productsWithDetails)
            } catch (error) {
                console.error(
                    'Failed to fetch related products:',
                    error
                )
            } finally {
                setLoading(false)
            }
        }

        if (product?.category_slug) {
            getRelatedProducts()
        }
    }, [product])

    if (loading) {
        return (
            <section className='container mx-auto my-16'>
                <div className='mb-8'>
                    <h2 className='text-2xl font-bold text-mauve-900'>محصولات مرتبط</h2>
                    <p className='text-sm text-mauve-500 mt-2'>شاید این محصولات هم مورد پسند شما باشند</p>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
                    {Array.from({ length: 4 }).map((_, index) => (
                        <ProductSkeleton key={index} />
                    ))}
                </div>
            </section>
        )
    }

    if (products.length === 0) {
        return null
    }

    return (
        <section className='container mx-auto my-16'>
            <div className='mb-8'>
                <h2 className='text-2xl font-bold text-mauve-900'>محصولات مرتبط</h2>
                <p className='text-sm text-mauve-500 mt-2'>شاید این محصولات هم مورد پسند شما باشند</p>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                {products.map(
                    ({
                        product,
                        productImage,
                        productVariant
                    }) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            productImage={productImage}
                            productVariant={productVariant}
                        />
                    )
                )}
            </div>
        </section>
    )
}

export default RelatedProducts