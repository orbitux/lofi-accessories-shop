'use client'
import ProductsToolbar from './ProductsToolbar'
import { getProductImages, getProducts, getProductVariants } from '@/api/product'
import ProductSkeleton from './ProductSkeleton'
import ProductsEmptyState from './ProductsEmptyState'
import ProductCard from './ProductsCard'
import { useEffect, useState } from 'react'

const ProductsGrid = ({ search }) => {
    const [products, setProducts] = useState([])
    const [images, setImages] = useState([])
    const [loading, setLoading] = useState(true)
    const [variants, setVariants] = useState([])
    useEffect(() => {

        const getProductsFunc = async () => {
            try {
                setLoading(true)
                const [productRes, imageRes, variantRes] = await Promise.all([
                    getProducts(search),
                    getProductImages(),
                    getProductVariants()
                ])

                setProducts(productRes)
                setImages(imageRes)
                setVariants(variantRes)
            } catch (error) {
                console.error('failed to fetch data', error)
            } finally {
                setTimeout(() => {
                    setLoading(false)
                }, 2000)
            }
        }
        getProductsFunc()
    }, [search])
    return (
        <>
            {!loading && products.length > 0 && (
                < ProductsToolbar products={products} />
            )}
            {loading ? (
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-10'>
                    {Array.from({ length: 8 }).map((_, index) => (
                        <ProductSkeleton key={index} />
                    ))}
                </div>
            ) : products.length === 0 ? (
                <ProductsEmptyState search={search} title={'محصولی پیدا نشد!'}/>
            ) : (
                <div className='container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 lg:gap-8 mb-10'>
                    {products.map((product) => {
                        const productImage = images.find(image => image.product_id === product.id)
                        const productVariant = variants.find(variant => variant.product_id === product.id)
                        return (
                            <ProductCard key={product.id} product={product} productImage={productImage} productVariant={productVariant} />
                        )
                    })}
                </div>
            )
            }
        </>
    )
}

export default ProductsGrid