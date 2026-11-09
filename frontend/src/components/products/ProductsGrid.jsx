'use client'
import ProductsToolbar from './ProductsToolbar'
import { getProductImages, getProducts, getProductVariants } from '@/api/product'
import ProductSkeleton from './ProductSkeleton'
import ProductsEmptyState from './ProductsEmptyState'
import ProductCard from './ProductsCard'
import { useEffect, useState } from 'react'
import ProductsPagination from './ProductsPagination'
import { usePathname, useRouter } from 'next/navigation'

const ProductsGrid = ({ search, page }) => {
    const [products, setProducts] = useState([])
    const [images, setImages] = useState([])
    const [loading, setLoading] = useState(true)
    const [variants, setVariants] = useState([])
    const [pagination, setPagination] = useState(null)
    const [error, setError] = useState(false)
    const router = useRouter()
    const pathname = usePathname()
    useEffect(() => {

        const getProductsFunc = async () => {
            try {
                setLoading(true)
                setError(false)
                const [productRes, imageRes, variantRes] = await Promise.all([
                    getProducts({ search, page, limit: 8 }),
                    getProductImages(),
                    getProductVariants()
                ])
                const totalPages = productRes.pagination.totalPages
                if (totalPages > 0 && page > totalPages) {
                    const params = new URLSearchParams(window.location.search)
                    params.set('page', String(totalPages))
                    router.replace(`${pathname}?${params.toString()}`)
                }
                setProducts(productRes.products)
                setPagination(productRes.pagination)
                setImages(imageRes)
                setVariants(variantRes)
            } catch (error) {
                console.error('failed to fetch data', error)
                setError(true)
            } finally {
                setLoading(false)
            }
        }
        getProductsFunc()
    }, [page, pathname, router, search])
    return (
        <>
            {!loading && !error && products.length > 0 && (
                <>
                    <ProductsToolbar products={products} />
                    <ProductsPagination currentPage={page} totalPages={pagination?.totalPages ?? 1} />
                </>
            )}
            {error ? (
                <ProductsEmptyState title={'مشکلی در دریافت محصول پیش آمد'} />
            ) :
                loading ? (
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-10'>
                        {Array.from({ length: 8 }).map((_, index) => (
                            <ProductSkeleton key={index} />
                        ))}
                    </div>
                ) : products.length === 0 ? (
                    <ProductsEmptyState search={search} title={'محصولی پیدا نشد!'} />
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