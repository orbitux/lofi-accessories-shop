import React from 'react'
import { Skeleton } from '../ui/skeleton'

const ProductSkeleton = () => {
    return (
        <div className='bg-mauve-300 rounded-xl border border-mauve-200 overflow-hidden'>
            {/* Image */}
            <Skeleton className='w-full h-100 rounded-none' />
            <div className='flex flex-col items-center gap-5 p-5'>
                {/* Product name */}
                <Skeleton className='h-6 w-3/4' />
                {/* Color */}
                <Skeleton className='h-5 w-1/2' />
                {/* Price */}
                <Skeleton className='h-7 w-2/3' />
                <div className='flex gap-4 w-full justify-center'>
                    {/* Buttons */}
                    <Skeleton className='h-9 w-32' />
                    <Skeleton className='h-9 w-28' />
                </div>
            </div>
        </div>
    )
}

export default ProductSkeleton