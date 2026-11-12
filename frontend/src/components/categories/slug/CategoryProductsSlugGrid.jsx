'use client'
import { getProductImages, getProducts, getProductVariants } from '@/api/product'
import ProductCard from '@/components/products/ProductsCard'
import ProductsEmptyState from '@/components/products/ProductsEmptyState'
import ProductSkeleton from '@/components/products/ProductSkeleton'
import ProductsPagination from '@/components/products/ProductsPagination'
import ProductsToolbar from '@/components/products/ProductsToolbar'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const CategoryProductsSlugGrid = ({ slug, categoryId }) => {
    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()
    const page = Math.max(1, Number(searchParams.get('page')) || 1)
    const sort = searchParams.get('sort') || 'newest'
    const [products, setProducts] = useState([])
    const [images, setImages] = useState([])
    const [variants, setVariants] = useState([])
    const [loading, setLoading] = useState(true)
    const [pagination, setPagination] = useState(null)
    const [error, setError] = useState(false)
    const [retryCount, setRetryCount] = useState(0)
    const handleSortChange = (newSort) => {
        const params = new URLSearchParams(searchParams.toString())
        params.set('sort', newSort)
        params.set('page', '1')
        router.push(`${pathname}?${params.toString()}`)
    }
    useEffect(() => {
        const getCategoryProducts = async () => {
            try {
                setLoading(true)
                setError(false)

                const [productRes, imageRes, variantRes] = await Promise.all([
                    getProducts({
                        categoryId: categoryId,
                        page,
                        limit: 8,
                        sort
                    }),
                    getProductImages(),
                    getProductVariants()
                ])
                setProducts(productRes.products)
                setPagination(productRes.pagination)
                setImages(imageRes)
                setVariants(variantRes)
                const totalPages = productRes.pagination.totalPages
                if (totalPages > 0 && page > totalPages) {
                    const params = new URLSearchParams(searchParams.toString())
                    params.set('page', String(totalPages))
                    router.replace(`${pathname}?${params.toString()}`)
                    return
                }
            } catch (error) {
                console.error('Failed to fetch category products:', error);
                setError(true)

            } finally {
                setLoading(false)
            }
        }
        getCategoryProducts()

    }, [slug, page, sort, retryCount])
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
    if (error) {
        return (
            <div className='container mx-auto px-4 py-16 text-center'>
                <h3 className='text-lg font-semibold mb-3'>
                    دریافت محصولات با مشکل مواجه شد
                </h3>
                <p className='text-muted-foreground mb-6'>
                    لطفا اتصال اینترنت خود را بررسی کنید و دوباره تلاش کنید
                </p>
                <button onCanPlay={() => setRetryCount(prev => prev + 1)}
                    className='px-5 py-2 rounded-md bg-primary text-primary-foreground'
                >
                    تلاش مجدد
                </button>
            </div>
        )
    }
    if (products.length === 0) {
        return (
            <ProductsEmptyState title={'محصولی در این دسته وجود ندارد!'} />
        )
    }
    if (products.length >= 1) {
        return (
            <div className='container mx-auto px-4'>
                <ProductsToolbar products={products} sort={sort} onSortChange={handleSortChange} showCategoryFilter={false} />

                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-10'>
                    {products.map(product => {
                        const productImage = images.find(image => image.product_id === product.id)
                        const productVariant = variants.find(variant => variant.product_id === product.id)
                        return (
                            <ProductCard key={product.id} product={product} productImage={productImage} productVariant={productVariant} />
                        )
                    })}
                </div>
                {products.length > 0 && pagination && (
                    <ProductsPagination
                        currentPage={page}
                        totalPages={pagination.totalPages}
                    />
                )}
            </div>

        )
    }
}

export default CategoryProductsSlugGrid