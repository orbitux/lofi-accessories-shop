import React from 'react'
import CategoryPageSlugHeader from './CategoryPageSlugHeader'
import CategoryProductsSlugGrid from './CategoryProductsSlugGrid'
import { getCategoriesBySlug } from '@/api/category'

const CategoryPageSlugCard = async ({ slug }) => {
    const category = await getCategoriesBySlug(slug)
    return (
        <main>
            <CategoryPageSlugHeader category={category} />
            <CategoryProductsSlugGrid slug={slug} />
        </main>
    )
}

export default CategoryPageSlugCard