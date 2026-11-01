import Link from 'next/link'
import React from 'react'

const CategoryCardPage = ({ category }) => {
    return (
        <Link href={`/categories/${category.slug}`} className='group'>
            <div className='flex items-center justify-between overflow-hidden rounded-xl bg-linear-to-r from-mauve-600 to-mauve-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg'>
                <span className='ps-4 text-lg font-bold text-white'>{category.name}</span>
                <img src={category.image_url} alt={category.name} className='h-24 w-24 object-cover transition-transform duration-300 group-hover:scale-105' />
            </div>
        </Link>
    )
}

export default CategoryCardPage