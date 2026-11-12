import React from 'react'
import CategoryPageSlugHeader from './CategoryPageSlugHeader'
import CategoryProductsSlugGrid from './CategoryProductsSlugGrid'
import { getCategoriesBySlug } from '@/api/category'
import { notFound } from 'next/navigation'

const CategoryPageSlugCard = async ({ slug }) => {
    let category = null
    try {
        category = await getCategoriesBySlug(slug)
    } catch (error) {
        if (error.response?.status === 404) {
            notFound()
        }
        console.error('Failed to fetch category:', error)
    }
    if (!category) {
        return (
            <main className='container mx-auto px-4 py-16 text-center'>
                <h2 className='text-xl font-semibold mb-3'>دریافت اطلاعات دسته بندی با مشکل مواجه شد</h2>
                <p className='text-muted-foreground'>لطفا کمی بعد دوباره تلاش کنید</p>
            </main>
        )
    }
    return (
        <main>
            <CategoryPageSlugHeader category={category} />
            <CategoryProductsSlugGrid slug={slug} categoryId={category.id} />
        </main>
    )
}

export default CategoryPageSlugCard