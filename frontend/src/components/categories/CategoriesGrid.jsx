'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { getCategories } from '@/api/category'

const CategoriesGrid = () => {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        const getCategoriesFunc = async () => {
            const res = await getCategories()
            setCategories(res)
        }
        getCategoriesFunc()
    }, [])
    return (
        <div className='container mx-auto my-10'>
            <div className='grid grid-cols-4 gap-10'>
                {categories.map(category => (
                    <Link href={`/categories/${category.slug}`} key={category.id}>
                        <div className='bg-linear-to-r flex justify-between rounded from-mauve-600 to-mauve-200'>
                            <span className='text-xl ps-2 flex items-center'>{category.name}</span>
                            <img src={category.image_url} alt="" className='w-20 h-20 rounded-l' />
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default CategoriesGrid