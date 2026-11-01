'use client'
import React, { useEffect, useState } from 'react'
import { getCategories } from '@/api/category'
import CategoryCardPage from './CategoryCardPage'
import CategorySkeleton from './CategorySkeleton'

const CategoriesGrid = () => {
    const [categories, setCategories] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const getCategoriesFunc = async () => {
            try {
                setLoading(true)
                const getCategoriesFunc = async () => {
                    const res = await getCategories()
                    setCategories(res)
                }
                getCategoriesFunc()
            } catch (error) {
                console.error('Failed to fetch categories: ', error);
            } finally {
                setTimeout(() => {
                    setLoading(false)
                }, 2000)
            }
        }
        getCategoriesFunc()
    }, [])
    return (
        <div className='container mx-auto my-10'>
            <div className='grid grid-cols-4 gap-10'>
                {loading ? (
                    Array.from({ length: 6 }).map((_, index) => (
                        <CategorySkeleton key={index} />
                    ))
                ) : categories.map(category => (
                    <CategoryCardPage key={category.id} category={category} />
                ))}
            </div>
        </div>
    )
}

export default CategoriesGrid