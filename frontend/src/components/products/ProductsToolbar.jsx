import React, { useEffect, useState } from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'
import { Button } from '../ui/button'
import { SlidersHorizontal } from 'lucide-react'
import { getCategories } from '@/api/category'

const ProductsToolbar = ({ products, sort, onSortChange, categoryId, onCategoryChange, showCategoryFilter = true }) => {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const data = await getCategories()
                setCategories(Array.isArray(data) ? data : data.categories || [])
            } catch (error) {
                console.error('Failed to fetch categories:', error)
            }
        }
        fetchCategories()
    }, [])
    return (
        <div className='mb-8 container mx-auto'>
            <div className='flex flex-col md:flex-row items-center justify-between gap-4 border border-mauve-200 bg-mauve-50 rounded-xl p-4'>
                {/* Products count */}
                <div className='text-mauve-800 text-lg'>
                    <span className='fa-num font-bold text-mauve-900'>{products.length}</span>
                    <span className='ms-1'>محصول</span>
                </div>

                {/* Control */}
                <div className='flex flex-wrap items-center justify-center gap-3'>
                    <Select value={sort} onValueChange={onSortChange}>
                        <SelectTrigger className='w-40 bg-white'>
                            <SelectValue placeholder='مرتب سازی' />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value='newest'>
                                جدیدترین
                            </SelectItem>
                            <SelectItem value='cheapest'>
                                ارزانترین
                            </SelectItem>
                            <SelectItem value='expensive'>
                                گرانترین
                            </SelectItem>
                        </SelectContent>
                    </Select>
                    {/* Category */}
                    {showCategoryFilter && (
                        <Select value={categoryId ? String(categoryId) : 'all'}
                            onValueChange={onCategoryChange}
                        >
                            <SelectTrigger className='w-40 bg-white'>
                                <SelectValue placeholder='همه دسته ها' />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value='all'>
                                    همه دسته ها
                                </SelectItem>
                                {categories.map(category => (
                                    <SelectItem key={category.id} value={String(category.id)}>
                                        {category.name}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    )}

                    {/* Future Filters */}
                    <Button
                        variant='outline'
                        className='gap-2'
                        type='button'
                    >
                        <SlidersHorizontal size={17} />
                        فیلتر ها
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default ProductsToolbar