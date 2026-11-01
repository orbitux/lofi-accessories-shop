import React from 'react'
import { Skeleton } from '../ui/skeleton'

const CategorySkeleton = () => {
    return (
        <div className='flex items-center bg-mauve-400 justify-between overflow-hidden rounded-xl border border-mauve-200'>
            <Skeleton className='ms-4 h-6 w-28' />
            <Skeleton className='h-24 w-24 rounded-none' />
        </div>
    )
}

export default CategorySkeleton