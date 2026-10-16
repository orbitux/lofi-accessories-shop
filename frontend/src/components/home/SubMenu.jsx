'use client'
import axios from 'axios'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { apiUrl } from '../../api/api'
import { getCategories } from '@/api/category'

const SubMenu = () => {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const res = await getCategories()
                setCategories(res)
            } catch (error) {
                console.error("API Error:", error);
            }
        }
        fetchCategories()
    }, [])
    return (
        <div className='absolute right-0 w-full top-12 z-50'>
            <ul className='main-bg-color rounded-b-2xl p-4'>
                {categories.map(category => (
                    <div key={category.slug}>
                        <div>
                            <Link href={category.slug}><li className='text-center py-1'>{category.name}</li></Link>
                        </div>
                    </div>
                ))}
            </ul>
        </div>
    )
}

export default SubMenu